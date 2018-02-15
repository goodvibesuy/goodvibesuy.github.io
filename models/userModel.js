
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "good"
});

con.connect(function (err) {
    if (err) throw err;
});

var userModel = function () {
};
/*
userModel.userRol = function (accountId, user, callBack) {
    masterDBController.dbMasterConnection.connection.query(
        "SELECT user_name,rol_id FROM users  WHERE user_name = ?", [user],
        function (err, user) {
            if (err) {
                motionLog.errorWithMail(accountId, "ERROR : userModel.userRol => accountId :" + accountId, err.message, function (logResponse) {
                    callBack(responseObject.response(-1, null, "Error interno."));
                });
            } else {
                callBack(responseObject.response(0, user, ""));
            }
        });
};

userModel.getRols = function (accountId, callBack) {
    masterDBController.dbMasterConnection.connection.query("SELECT id , name FROM rols",
        function (err, rols) {
            if (err) {
                motionLog.errorWithMail(accountId, "ERROR : userModel.getRols => accountId :" + accountId, err.message, function (logResponse) {
                    callBack(responseObject.response(-1, null, "Error interno."));
                });
            } else {
                callBack(responseObject.response(0, rols, ""));
            }
        });
};

userModel.userData = function (accountId, user, dbName, callBack) {
    masterDBController.dbMasterConnection.connection.query("SELECT id FROM users WHERE user_name = ?", [user],
        function (err, user) {
            if (err) {
                motionLog.errorWithMail(accountId, "ERROR : userModel.userData => accountId :" + accountId, err.message, function (logResponse) {
                    callBack(responseObject.response(-1, null, "Error interno."));
                });
            } else {
                if (user.length > 0) {
                    var con = clientDBController.getUserConnection(dbName);
                    con.query("SELECT * FROM users WHERE id_user_master = " + user[0].id, function (err, result) {
                        if (err) {
                            motionLog.errorWithMail(accountId, "ERROR : userModel.userData => accountId :" + accountId, err.message, function (logResponse) {
                                callBack(responseObject.response(-1, null, "Error interno."));
                            });
                        } else {
                            callBack(result);
                        }
                    });
                } else {
                    callBack([{ "message": "No se encontro al usuario" }]);
                }
            }
        });
};
*/
userModel.users = function (callBack) {
    con.query("SELECT * FROM users ", function (err, result) {
        if (err) {
            console.log(err);
        } else {
            if (err) throw err;
            callBack({ result: 1, message: "OK", data: result });
        }
    });    
};
/*

userModel.updatePass = function (accountId, user, pass, newPass, callBack) {
    var connection = masterDBController.dbMasterConnection.connection;
    connection.beginTransaction(function (err) {
        if (err) {
            motionLog.errorWithMail(accountId, "ERROR : userModel.updatePass => accountId :" + accountId, err.message, function (logResponse) {
                callBack(responseObject.response(-1, null, "Error interno."));
            });
            throw err;
        }{ result: 1, message: "OK", data: sumaEntregas }{ result: 1, message: "OK", data: sumaEntregas }
        connection.query("SELECT * FROM users  WHERE user_name = ? AND password = ?", [user, sha1(pass.trim())],
            function (err, users) {
                if (err) {
                    motionLog.errorWithMail(accountId, "ERROR : userModel.updatePass => accountId :" + accountId, err.message, function (logResponse) {
                        callBack(responseObject.response(-1, null, "Error interno."));
                    });
                } else {
                    if (users.length === 1) {
                        masterDBController.dbMasterConnection.connection.query("UPDATE users SET password = ? WHERE user_name = ?", [sha1(newPass.trim()), user],
                            function (err, users) {
                                if (err) {
                                    motionLog.errorWithMail(accountId, "ERROR : userModel.updatePass => accountId :" + accountId, err.message, function (logResponse) {
                                        connection.rollback(function () {
                                            callBack(responseObject.response(-1, null, "Error interno."));
                                        });
                                    });
                                } else {
                                    motionLog.assert(accountId, users.affectedRows > 1, "Se actualizaron mas de un usuario => usuario :" + user);
                                    motionLog.assert(accountId, users.affectedRows === 0, "No se actualizo ningun usuario => usuario :" + user);
                                    motionLog.log(accountId, "UPDATE users SET password = ? WHERE user_name = ? ," + sha1(newPass.trim()) + " , " + user);
                                    callBack(responseObject.response(0, null, "La clave se a actualizado correctamente"));
                                }
                            });
                    } else {
                        callBack({ result: 0, message: "Usuario y/o clave incorrecta" });
                    }
                }
            });
    });
};
*/




module.exports = userModel;