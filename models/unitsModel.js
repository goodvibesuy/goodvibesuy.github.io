"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var masterDBController = require('../bd/masterConnectionsBD');
var clientDBController = require('../bd/clientConnectionsBD');
var UnitsModel = /** @class */ (function () {
    function UnitsModel() {
    }
    UnitsModel.prototype.getAll = function (dbName, callBack) {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("SELECT * FROM unit", function (err, result) {
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
    UnitsModel.prototype.add = function (name, dbName, callBack) {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("INSERT INTO unit  (name) VALUES(?)", [name], function (err, resultClient) {
                    if (err) {
                        if (err.code === "ER_DUP_ENTRY") {
                            con.release();
                        }
                    }
                    else {
                        con.release();
                        callBack({ result: 1, message: "OK" });
                    }
                });
            }
        });
    };
    UnitsModel.prototype.update = function (id, name, dbName, callBack) {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("UPDATE unit  SET name = ? WHERE id = ?", [name, id], function (err, resultClient) {
                    if (err) {
                        if (err.code === "ER_DUP_ENTRY") {
                            con.release();
                        }
                    }
                    else {
                        con.release();
                        callBack({ result: 1, message: "OK" });
                    }
                });
            }
        });
    };
    UnitsModel.prototype.delete = function (id, dbName, callBack) {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("DELETE FROM unit WHERE id = ? ", [id], function (err, resultClient) {
                    if (err) {
                        if (err.code === "ER_DUP_ENTRY") {
                            con.release();
                        }
                    }
                    else {
                        con.release();
                        callBack({ result: 1, message: "OK" });
                    }
                });
            }
        });
    };
    return UnitsModel;
}());
exports.UnitsModel = UnitsModel;
//# sourceMappingURL=unitsModel.js.map