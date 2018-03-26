"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var masterDBController = require('../bd/masterConnectionsBD');
var clientDBController = require('../bd/clientConnectionsBD');
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    UserModel.prototype.users = function (dbName, callBack) {
        var pool = clientDBController.getUserConnection(dbName);
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
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("SELECT * FROM users WHERE user_name = ?", [username], function (err, result) {
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
    return UserModel;
}());
exports.UserModel = UserModel;
//# sourceMappingURL=userModel.js.map