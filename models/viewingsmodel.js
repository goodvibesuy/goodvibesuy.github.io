"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var masterDBController = require('../bd/masterConnectionsBD');
var clientDBController = require('../bd/clientConnectionsBD');
var ViewingsModel = /** @class */ (function () {
    function ViewingsModel() {
    }
    ViewingsModel.prototype.addVisit = function (idpointofsail, data, dbName, callBack) {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                console.error(err);
                con.release();
            }
            else {
                con.query("INSERT INTO viewing  (date, idpointofsail) VALUES(NOW(),?)", [idpointofsail], function (err, result) {
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
    };
    ;
    return ViewingsModel;
}());
module.exports = new ViewingsModel();
//# sourceMappingURL=viewingsModel.js.map