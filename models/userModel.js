"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var masterDBController = require('../bd/masterConnectionsBD');
//var clientDBController = require('../bd/clientConnectionsBD');
var clientConnectionsBD_1 = require("../bd/clientConnectionsBD");
var UserModel = /** @class */ (function () {
    function UserModel() {
        var clientConnection = new clientConnectionsBD_1.ClientConnectionsBD();
        this.controllerConnections = clientConnection.getController();
    }
    UserModel.prototype.users = function (dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("SELECT * FROM users ", function (err, result) {
                    if (err) {
                        con.release();
                        console.log(err);
                    }
                    else {
                        con.release();
                        if (err)
                            throw err;
                        callBack({ result: 1, message: "OK", data: result });
                    }
                });
            }
        });
    };
    ;
    UserModel.prototype.userByUserName = function (username, dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("SELECT id,user_name,firstname,lastname,rol_id FROM users WHERE user_name = ?", [username], function (err, result) {
                    if (err) {
                        con.release();
                        console.log(err);
                    }
                    else {
                        con.release();
                        if (err)
                            throw err;
                        callBack({ result: 1, message: "OK", data: result });
                    }
                });
            }
        });
    };
    ;
    UserModel.prototype.userByIdMaster = function (idMaster, tokenId, userName, rolId, accountId, dbName, callBack) {
        var now = new Date();
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                console.warn("Sacar lo que manda el rol para afuera");
                con.query("SELECT * FROM users WHERE id_user_master = ?", [idMaster], function (err, userResult) {
                    con.release();
                    if (err) {
                        console.error(now.toString(), " => ", err);
                        callBack({
                            result: false, message: "Fallo la autenticacion."
                        });
                    }
                    else {
                        if (userResult.length > 0) {
                            callBack({
                                result: true, tokenId: tokenId, user: userName, rolId: rolId, accountId: accountId, message: ""
                            });
                        }
                    }
                });
            }
        });
    };
    ;
    return UserModel;
}());
exports.UserModel = UserModel;
//# sourceMappingURL=userModel.js.map