"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var result_1 = require("../datatypes/result");
var lodash_1 = __importDefault(require("lodash"));
var masterDBController = require('../bd/masterConnectionsBD');
var clientDBController = require('../bd/clientConnectionsBD');
var ProductModel = /** @class */ (function () {
    function ProductModel() {
    }
    ProductModel.prototype.get = function (id, dbName, callBack) {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query('SELECT * FROM product WHERE id = ?', [id], function (err, productResultQry) {
                    if (!!err) {
                        // TODO: log error
                        // errorHandler.log(err);
                        con.release();
                        console.error(err);
                        callBack({ result: result_1.ResultCode.Error, message: 'Error' });
                    }
                    else {
                        con.query('SELECT * FROM product_supply WHERE idproduct = ?', [id], function (err, suppliesResultQry) {
                            con.release();
                            if (!!err) {
                                // TODO: log error
                                // errorHandler.log(err);
                                console.error(err);
                                callBack({ result: result_1.ResultCode.Error, message: 'Error' });
                            }
                            else {
                                var product = productResultQry[0];
                                product.supplies = lodash_1.default.map(suppliesResultQry, function (s) {
                                    return {
                                        idProduct: s.idproduct,
                                        idSupply: s.idSupply,
                                        quantity: s.quantity // TODO: standarize
                                    };
                                });
                                callBack({ result: result_1.ResultCode.OK, message: 'OK', data: product });
                            }
                        });
                    }
                });
            }
        });
    };
    ProductModel.prototype.getAll = function (dbName, callBack) {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query('SELECT * FROM product', function (err, result) {
                    con.release();
                    if (!!err) {
                        // TODO: log error
                        // errorHandler.log(err);
                        console.error(err);
                        callBack({ result: result_1.ResultCode.Error, message: 'Error' });
                    }
                    else {
                        callBack({ result: result_1.ResultCode.OK, message: 'OK', data: result });
                    }
                });
            }
        });
    };
    ProductModel.prototype.add = function (name, pathImage, dbName, callBack) {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query('INSERT INTO product  (name, path_image) VALUES(?,?)', [name, pathImage], function (err, result) {
                    con.release();
                    if (!!err) {
                        // TODO: log error
                        // errorHandler.log(err);
                        console.error(err);
                        callBack({
                            result: result_1.ResultCode.Error,
                            message: 'Error'
                        });
                    }
                    else {
                        callBack({
                            result: result_1.ResultCode.OK,
                            message: 'OK',
                            data: result.insertId
                        });
                    }
                });
            }
        });
    };
    ProductModel.prototype.update = function (id, name, path_image, dbName, callback) {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("UPDATE product  SET name = ?, path_image = ? WHERE id = ?", [name, path_image, id], function (err, result) {
                    con.release();
                    if (!!err) {
                        // TODO: log error -> common/errorHandling.ts
                        // errorHandler.log(err);
                        console.error(err);
                        callback({
                            result: result_1.ResultCode.Error,
                            message: err.code
                        });
                    }
                    else {
                        callback({
                            result: result_1.ResultCode.OK,
                            message: 'OK'
                        });
                    }
                });
            }
        });
    };
    ;
    ProductModel.prototype.delete = function (productId, dbName, callback) {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                //////////////////////////////////////
                // TODO: delete product supplies ?
                //////////////////////////////////////
                con.query('DELETE FROM product WHERE id = ? ', [productId], function (err, result) {
                    con.release();
                    if (!!err) {
                        // TODO: log error -> common/errorHandling.ts
                        // errorHandler.log(err);
                        var errorMessage = '';
                        if (err.code === "ER_ROW_IS_REFERENCED_2") {
                            errorMessage = "No se puede borrar el registro, porque es utilizado en otra parte del sistema.";
                        }
                        else {
                            errorMessage = "No se puede borrar el registro.";
                        }
                        callback({
                            result: result_1.ResultCode.Error,
                            message: errorMessage
                        });
                    }
                    else {
                        callback({
                            result: result_1.ResultCode.OK,
                            message: 'OK'
                        });
                    }
                });
            }
        });
    };
    ProductModel.prototype.deleteSupply = function (productId, supplyId, dbName, callback) {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query('DELETE FROM product_supply WHERE idproduct = ? AND idSupply = ? ', [productId, supplyId], function (err, result) {
                    con.release();
                    if (!!err) {
                        // TODO: log error -> common/errorHandling.ts
                        // errorHandler.log(err);
                        var errorMessage = "No se puede borrar el registro.";
                        callback({
                            result: result_1.ResultCode.Error,
                            message: errorMessage
                        });
                    }
                    else {
                        callback({
                            result: result_1.ResultCode.OK,
                            message: 'OK'
                        });
                    }
                });
            }
        });
    };
    return ProductModel;
}());
module.exports = new ProductModel();
//# sourceMappingURL=productsModel.js.map