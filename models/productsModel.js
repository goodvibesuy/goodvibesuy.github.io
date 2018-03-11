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
    ProductModel.prototype.delete = function (productId, callback) {
        con.query('DELETE FROM product WHERE id = ? ', [productId], function (err, result) {
            if (!!err) {
                // TODO: log error
                // errorHandler.log(err);
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
