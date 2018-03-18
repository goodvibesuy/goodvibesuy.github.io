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
                        console.log(err);
                    }
                    else {
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
module.exports = new UserModel();
//# sourceMappingURL=userModel.js.map