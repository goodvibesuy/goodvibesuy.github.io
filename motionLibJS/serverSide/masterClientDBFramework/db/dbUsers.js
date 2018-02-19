/*
 * Copyright (C) MotionSoft Consulting S.R.L. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Ing. Pablo Rivero <privero@motionsoft.com.uy>
 *
 */

var sha1 = require('sha1');

function DBUsers(usersDbModelMap, masterDBConnection) {
    /*
     * Try loggin with the given credentials.
     * response(err,result,userData) returns in "result" true iff the login success
     */
    this.userDbModelMap = usersDbModelMap;
    this.masterDBConnection = masterDBConnection;
}

function updateUserState(state, userId, connection, callBack, callBackError) {
    connection.query('UPDATE users SET active = ? WHERE id = ?', [state, userId],
        function (err, rows, fields) {
            if (err) {
                connection.release();
                console.log(err);
                callBackError({ status: 0, message: "Error Interno." });
                return;
            } else {
                connection.query('DELETE FROM sessions WHERE user_id = ?', [userId],
                    function (err3, users3, fields3) {
                        if (err) {
                            connection.release();
                            callBack(err3);
                            return;
                        } else {
                            connection.release();
                            callBack(rows);
                        }
                    });
            }
        }
    );
}

DBUsers.prototype.updateState = function (userId, state, accountId, callBack, callBackError) {
    var pool = this.masterDBConnection.connection;
    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            console.error(err);
        } else {
            if (state === 1) {
                var cantUsersActiveQuery = "SELECT max_users, count(*) as cantUsers";
                cantUsersActiveQuery += " FROM accounts a INNER JOIN users_accounts ua ON a.id = ua.account_id INNER JOIN users u ON ua.user_id = u.id ";
                cantUsersActiveQuery += " WHERE a.id = ? AND u.active = 1";
                var now = new Date();
                connection.query(cantUsersActiveQuery, [accountId],
                    function (err, account) {
                        if (err) {
                            console.error(now.toString(), " => ", err);
                            connection.release();
                            callBackError({ status: 0, message: "Error Interno." });
                        } else {
                            if (account[0].cantUsers < account[0].max_users) {
                                updateUserState(state, userId, connection, callBack, callBackError);
                            } else {
                                connection.release();
                                callBackError({ status: 0, message: "No es posible agregar mas usuarios, excede el limite de usuarios activos contratado." });
                            }
                        }
                    }
                );
            } else {
                updateUserState(state, userId, connection, callBack, callBackError);
            }
        }
    });
};


DBUsers.prototype.login = function (user, password, loginCallback) {
    var userDataBuilder = require('../datatypes/User');
    var loginResponseBuilder = require('../datatypes/LoginResponse');
    var proyection = 'id,password,user_name,active';
    if (this.usersDbModelMap) {
        for (var map in this.usersDbModelMap.fields) {
            proyection = proyection + ', ' + map.dbField;
        }
    }
    var mdbcon = this.masterDBConnection.connection;
    // initialize values for the result 

    var userData = null;
    var message = "";
    var loginResult = false;
    var multiAccount = false;
    var accounts = null;
    var now = new Date();
    this.masterDBConnection.connection.query('SELECT ' + proyection + ' FROM users WHERE user_name = ? ',
        [user.trim()],
        function (err, rows, fields) {
            if (err) {
                console.error(now.toString(), "DBUsers - primer if => ", err);
                loginCallback(err);
                return;
            } else
                if ((!rows) || (!rows[0]) || (sha1(password.trim()) !== rows[0].password)) {
                    loginCallback(null, new loginResponseBuilder(null, false, 'Invalid user/password', false, null));
                    return;
                } else if (sha1(password) === rows[0].password) {
                    if (parseInt(rows[0].active) === 0) {
                        loginCallback(null, new loginResponseBuilder(null, false, 'User inactive', false, null));
                        return;
                    } else {
                        // Login success
                        userData = new userDataBuilder(rows[0].id, rows[0].user_name);
                        loginResult = true;

                        // if extra fields, assing to user
                        if (this.userDbModelMap) {
                            for (map in userDbModelMap) {
                                if (rows[0][map.dbField]) {
                                    userData[map.objectField] = rows[0][map.dbField];
                                }
                            }
                        }

                        // Load the user accounts
                        mdbcon.query(
                            'select a.id,a.name,ua.owner,ua.user_id, a.database_name as databaseName ' +
                            'from users_accounts ua inner join accounts a on ' +
                            'a.id = ua.account_id ' +
                            'where ua.user_id=' + userData.id,
                            function (errAccounts, rowsAccounts, fieldsAccounts) {
                                if (errAccounts) {
                                    console.error(now.toString(), " => ", errAccounts);
                                    loginCallback(errAccounts);
                                    return;
                                }
                                if ((!rowsAccounts) || (!rowsAccounts[0])) {
                                    loginCallback('No accounts for the given user');
                                    return;
                                }
                                accounts = rowsAccounts;
                                if (rowsAccounts.lenght > 1) {
                                    multiAccount = true;
                                }
                                loginResAux = new loginResponseBuilder(userData,
                                    loginResult, message, multiAccount, accounts);
                                loginCallback(null, loginResAux);
                            });
                        // Load the user accounts
                    }
                }
        });
};


module.exports = DBUsers;

