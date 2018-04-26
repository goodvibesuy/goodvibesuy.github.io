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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var result_1 = require("../datatypes/result");
var _ = __importStar(require("lodash"));
var masterDBController = require('../bd/masterConnectionsBD');
var mainModel_1 = require("./mainModel");
var ProductModel = /** @class */ (function (_super) {
    __extends(ProductModel, _super);
    function ProductModel() {
        return _super.call(this) || this;
    }
    ProductModel.prototype.get = function (id, dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
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
                                product.supplies = _.map(suppliesResultQry, function (s) {
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
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query('SELECT * FROM product ORDER BY displayOrder ASC', function (err, result) {
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
        var pool = this.controllerConnections.getUserConnection(dbName);
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
    ProductModel.prototype.update = function (product, dbName, callback) {
        var mainThis = this;
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("UPDATE product  SET name = ?, path_image = ? WHERE id = ?", [product.name, product.path_image, product.id], function (err, result) {
                    if (!!err) {
                        // TODO: log error -> common/errorHandling.ts
                        // errorHandler.log(err);
                        console.error(err);
                        con.release();
                        callback({
                            result: result_1.ResultCode.Error,
                            message: err.code
                        });
                    }
                    else {
                        mainThis.updatePricesProduct(0, product, callback, con);
                    }
                });
            }
        });
    };
    ;
    ProductModel.prototype.updatePricesProduct = function (index, product, callback, con) {
        var mainThis = this;
        con.query("INSERT INTO productprice(date,amount,idProduct,idGroupPointofsale) VALUES (NOW(),?,?,?)", [product.prices[index].amount, product.id, product.prices[index].idGroupPointofsale], function (err, result) {
            if (!!err) {
                // TODO: log error -> common/errorHandling.ts
                // errorHandler.log(err);
                console.error(err);
                con.release();
                callback({
                    result: result_1.ResultCode.Error,
                    message: err.code
                });
            }
            else {
                if (index + 1 < product.prices.length) {
                    mainThis.updatePricesProduct(index + 1, product, callback, con);
                }
                else {
                    con.release();
                    callback({
                        result: result_1.ResultCode.OK,
                        message: 'OK'
                    });
                }
            }
        });
    };
    ProductModel.prototype.pricesByProduct = function (idProduct, dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
                callBack({
                    result: result_1.ResultCode.Error,
                    message: err.code
                });
            }
            else {
                con.query("SELECT * FROM productprice WHERE id in ( SELECT MAX(id) FROM productprice WHERE idProduct = ? GROUP BY idGroupPointofsale )", [idProduct], function (err, result) {
                    if (!!err) {
                        // TODO: log error -> common/errorHandling.ts
                        // errorHandler.log(err);
                        console.error(err);
                        con.release();
                        callBack({
                            result: result_1.ResultCode.Error,
                            message: err.code
                        });
                    }
                    else {
                        con.release();
                        callBack({ result: result_1.ResultCode.OK, message: 'OK', data: result });
                    }
                });
            }
        });
    };
    ProductModel.prototype.priceByProductByPOS = function (idProduct, idPOS, dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
                callBack({
                    result: result_1.ResultCode.Error,
                    message: err.code,
                    data: null
                });
            }
            else {
                con.query("SELECT * FROM pointofsale WHERE id = ?", [idPOS], function (err, result) {
                    if (!!err) {
                        // TODO: log error -> common/errorHandling.ts
                        // errorHandler.log(err);
                        console.error(err);
                        con.release();
                        callBack({
                            result: result_1.ResultCode.Error,
                            message: err.code,
                            data: null
                        });
                    }
                    else {
                        console.log(result[0].idGroup, idProduct);
                        con.query("SELECT * FROM productprice WHERE idGroupPointofsale = ? AND idProduct = ? ORDER BY date DESC LIMIT 1", [result[0].idGroup, idProduct], function (err, result2) {
                            if (!!err) {
                                // TODO: log error -> common/errorHandling.ts
                                // errorHandler.log(err);
                                console.error(err);
                                con.release();
                                callBack({
                                    result: result_1.ResultCode.Error,
                                    message: err.code,
                                    data: null
                                });
                            }
                            else {
                                con.release();
                                callBack({ result: result_1.ResultCode.OK, message: 'OK', data: result2 });
                            }
                        });
                    }
                });
            }
        });
    };
    ProductModel.prototype.delete = function (productId, dbName, callback) {
        var pool = this.controllerConnections.getUserConnection(dbName);
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
        var pool = this.controllerConnections.getUserConnection(dbName);
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
}(mainModel_1.MainModel));
exports.ProductModel = ProductModel;
//# sourceMappingURL=productsModel.js.map