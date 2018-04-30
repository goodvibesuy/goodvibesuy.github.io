"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mainModel_1 = require("./mainModel");
var masterDBController = require('../bd/masterConnectionsBD');
var SuppliesModel = /** @class */ (function (_super) {
    __extends(SuppliesModel, _super);
    function SuppliesModel() {
        return _super.call(this) || this;
    }
    SuppliesModel.prototype.getAll = function (dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query('SELECT * FROM supply', function (err, result) {
                    if (err)
                        throw err;
                    con.release();
                    callBack({ result: 1, message: 'OK', data: result });
                });
            }
        });
    };
    SuppliesModel.prototype.supplies = function (dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query('SELECT * FROM supply INNER JOIN supplyPrice ON id  = idSupply ORDER BY date DESC', function (err, result) {
                    if (err)
                        throw err;
                    con.release();
                    callBack({ result: 1, message: 'OK', data: result });
                });
            }
        });
    };
    SuppliesModel.prototype.suppliesByProduct = function (idProduct, dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query('SELECT * FROM supply INNER JOIN product_supply ON id  = idSupply WHERE idProduct = ?', [idProduct], function (err, result) {
                    if (err)
                        throw err;
                    con.release();
                    callBack({ result: 1, message: 'OK', data: result });
                });
            }
        });
    };
    SuppliesModel.prototype.addSupply = function (name, idUnit, amount, price_date, idProvider, path_image, dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query('INSERT INTO supply  (name, unit, path_image) VALUES(?,?,?)', [name, idUnit, path_image], function (err, result) {
                    if (err) {
                        con.release();
                        // sea cual sea el tipo de error => siempre (debería) tengo que liberar la conexión
                        // sino el cliente web queda esperando
                        // con.release();
                        if (err.code === 'ER_DUP_ENTRY') {
                            callBack({ result: -1, message: 'Error: ER_DUP_ENTRY' });
                        }
                        else {
                            callBack({ result: -1, message: 'Error: generic' });
                        }
                    }
                    else {
                        var idSupply = result.insertId;
                        var priceDateFormat = new Date(price_date).toISOString().slice(0, 19).replace('T', ' ');
                        con.query('INSERT INTO supplyPrice  (date, price_date, amount, idSupply, idProvider) VALUES(NOW(),?,?,?,?)', [priceDateFormat, amount, idSupply, idProvider], function (err, result) {
                            con.release();
                            // sea cual sea el tipo de error => siempre tengo que liberar la conexión
                            // sino el cliente web queda esperando
                            // con.release();
                            if (err) {
                                if (err.code === 'ER_DUP_ENTRY') {
                                    callBack({ result: -1, message: 'Error: ER_DUP_ENTRY' });
                                }
                                else {
                                    callBack({ result: -1, message: 'Error: generic' });
                                }
                            }
                            else {
                                callBack({ result: 1, message: 'OK' });
                            }
                        });
                    }
                });
            }
        });
    };
    SuppliesModel.prototype.updateSupply = function (id, name, idUnit, amount, price_date, idProvider, path_image, dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query('UPDATE supply  SET name = ?, unit = ?, path_image = ? WHERE id = ?', [name, idUnit, path_image, id], function (err, resultClient) {
                    if (err) {
                        con.release();
                        // sea cual sea el tipo de error => siempre tengo que liberar la conexión
                        // sino el cliente web queda esperando
                        // con.release();
                        if (err.code === 'ER_DUP_ENTRY') {
                            callBack({ result: -1, message: 'Error: ER_DUP_ENTRY' });
                        }
                        else {
                            callBack({ result: -1, message: 'Error: generic' });
                        }
                    }
                    else {
                        var priceDateFormat = new Date(price_date).toISOString().slice(0, 19).replace('T', ' ');
                        con.query('INSERT INTO supplyPrice  (date, price_date, amount, idSupply, idProvider) VALUES(NOW(),?,?,?,?)', [priceDateFormat, amount, id, idProvider], function (err, result) {
                            con.release();
                            // sea cual sea el tipo de error => siempre tengo que liberar la conexión
                            // sino el cliente web queda esperando
                            // con.release();
                            if (err) {
                                if (err.code === 'ER_DUP_ENTRY') {
                                    callBack({ result: -1, message: 'Error: ER_DUP_ENTRY' });
                                }
                                else {
                                    callBack({ result: -1, message: 'Error: generic' });
                                }
                            }
                            else {
                                callBack({ result: 1, message: 'OK' });
                            }
                        });
                    }
                });
            }
        });
    };
    SuppliesModel.prototype.deleteSupply = function (id, dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query('DELETE FROM supply WHERE id = ? ', [id], function (err, resultClient) {
                    // siempre (debería) tengo que liberar la conexión sino el cliente web queda esperando
                    // con.release();
                    if (err) {
                        con.release();
                        if (err.code === 'ER_DUP_ENTRY') {
                            callBack({ result: -1, message: 'Error: ER_DUP_ENTRY' });
                        }
                        else if (err.code == 'ER_ROW_IS_REFERENCED_2') {
                            callBack({ result: -1, message: 'Error: ER_ROW_IS_REFERENCED_2' });
                        }
                        else {
                            callBack({ result: -1, message: 'Error: generic' });
                        }
                    }
                    else {
                        con.release();
                        callBack({ result: 1, message: 'OK' });
                    }
                });
            }
        });
    };
    return SuppliesModel;
}(mainModel_1.MainModel));
exports.SuppliesModel = SuppliesModel;
//# sourceMappingURL=suppliesModel.js.map