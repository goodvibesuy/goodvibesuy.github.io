
var dbMasterConnectionBuilder = require('../db/master_database_connection');


var ControllerUsersAccounts = function ControllerUsersAccounts(host, port, databaseName, user, password, usersDbModelMap) {

    this.dbMasterConnection = new dbMasterConnectionBuilder(host, port, databaseName, user, password);
    var dbUsersBuilder = require('../db/dbUsers');
    var dbSessionsBuilder = require('../db/dbSessions');
    this.dbUsers = new dbUsersBuilder(usersDbModelMap, this.dbMasterConnection);
    this.dbSessions = new dbSessionsBuilder(this.dbMasterConnection);
};

ControllerUsersAccounts.prototype.login = function (user, password, callback) {

    var dbSessionAux = this.dbSessions;
    this.dbUsers.login(user, password, function (err, loginResponse) {
        if ((loginResponse) && (loginResponse.result)) {
            dbSessionAux.createSession(loginResponse, function (err, loginResponseSession) {
                if (err)
                    callback(err, loginResponseSession)
                else
                    callback(null, loginResponseSession);
            });
        } else {
            callback(err, loginResponse);
        }
    });
};


/**
 * @param {string} user
 * @param {string} tokenId
 * @param {type} callback(err:string, result:boolean)
 * @returns {undefined}
 */
ControllerUsersAccounts.prototype.logout = function (user, accountId, tokenId, callback) {    
    var dbSessionAux = this.dbSessions;
    this.dbSessions.verifySession(user,tokenId,accountId,
            function (err, authError, result) {
                if (err) {
                    callback(err, false);
                    return;
                } else if (authError) {                    
                    callback('invalid session', false);
                    return;
                } else if (!result) {
                    callback('internal error', false);
                    return;                   
                } else {
                    dbSessionAux.deleteSession(user, accountId, function (err) {
                        if (err) {
                            callback(err);
                            return;
                        } else {
                            callback(null, err);
                            return;
                        }
                    });
                }
            }
    );
};
/**
 * 
 * @param {type} user
 * @param {type} tokenId
 * @param {type} accountId
 * @param {type} callback function(err,authError,result,client_database_name)
 * @returns {undefined}
 */
ControllerUsersAccounts.prototype.verifySession = function (user, tokenId,accountId, callback) {
    this.dbSessions.verifySession(user, tokenId,accountId,
            function (err, authError, result, client_database_name) {
                if (err) {
                    callback(err,authError, false);
                    return;
                } else if (!result) {
                    callback('invalid session',authError, false);
                    return;
                } else {
                    callback(null, authError, true, client_database_name);
                    return;
                }
            }
    );
};

ControllerUsersAccounts.prototype.updateState = function (userId,state,accountId, callBack,callBackError){
    this.dbUsers.updateState(userId, state,accountId,function (err, updateStateResponse) {
        if ((updateStateResponse) && (updateStateResponse.result)) {
            callBack(null, updateStateResponse);
        } else {
            callBack(err, updateStateResponse);
        }        
    },function(result) {
        callBackError(result);
    });
};

module.exports = ControllerUsersAccounts;
