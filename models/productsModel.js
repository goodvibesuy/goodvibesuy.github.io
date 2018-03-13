"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var result_1 = require("../datatypes/result");
var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'good'
});
con.connect(function (err) {
    if (err)
        throw err;
});
var ProductModel = /** @class */ (function () {
    function ProductModel() {
    }
    ProductModel.prototype.getAll = function (callBack) {
        con.query('SELECT * FROM product', function (err, result) {
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
                    data: result
                });
            }
        });
    };
    ProductModel.prototype.add = function (name, pathImage, callBack) {
        con.query('INSERT INTO product  (name, path_image) VALUES(?,?)', [name, pathImage], function (err, result) {
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
    };
    ProductModel.prototype.update = function (id, name, path_image, callback) {
        con.query("UPDATE product  SET name = ?, path_image = ? WHERE id = ?", [name, path_image, id], function (err, result) {
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
    };
    ;
    ProductModel.prototype.delete = function (productId, callback) {
        con.query('DELETE FROM product WHERE id = ? ', [productId], function (err, result) {
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
    };
    return ProductModel;
}());
module.exports = new ProductModel();
