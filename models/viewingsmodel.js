"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userModel_1 = require("./userModel");
var masterDBController = require('../bd/masterConnectionsBD');
var clientDBController = require('../bd/clientConnectionsBD');
var ViewingsModel = /** @class */ (function () {
    function ViewingsModel() {
        this.userModel = new userModel_1.UserModel();
    }
    ViewingsModel.prototype.addVisit = function (user, idpointofsail, data, annotation, dbName, callBack) {
        this.userModel.userByUserName(user, dbName, function (result) {
            if (result.data !== undefined && result.data.length > 0) {
                var idUser = result.data[0].id;
                var pool = clientDBController.getUserConnection(dbName);
                pool.getConnection(function (err, con) {
                    if (err) {
                        console.error(err);
                        con.release();
                    }
                    else {
                        con.query("INSERT INTO viewing  (date, idpointofsail,idUser,annotation) VALUES(NOW(),?,?,?)", [idpointofsail, idUser, annotation], function (err, result) {
                            if (err) {
                                if (err.code === "ER_DUP_ENTRY") {
                                    con.release();
                                }
                            }
                            else {
                                var idviewing = result.insertId;
                                for (var i = 0; i < data.length; i++) {
                                    Object.keys(data[i].typeTransaction).forEach(function (key, index) {
                                        con.query("INSERT INTO viewing_product(idviewing,idproduct,quantity,type) VALUES(?,?,?,?)", [idviewing, data[i].id, data[i].typeTransaction[key], key], function (err, resultClient) {
                                            if (err) {
                                                if (err.code === "ER_DUP_ENTRY") {
                                                    con.release();
                                                    callBack({ result: -1, message: "Error interno." });
                                                }
                                            }
                                            else {
                                                //TODO: corregir
                                            }
                                        });
                                    });
                                }
                                con.release();
                                callBack({ result: 1, message: "OK" });
                            }
                        });
                    }
                });
            }
        });
    };
    ;
    return ViewingsModel;
}());
exports.ViewingsModel = ViewingsModel;
//# sourceMappingURL=viewingsModel.js.map