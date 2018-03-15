"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var result_1 = require("../datatypes/result");
var masterDBController = require('../bd/masterConnectionsBD');
var clientDBController = require('../bd/clientConnectionsBD');
var mysql = require('mysql');
var PointsOfSaleModel = /** @class */ (function () {
    function PointsOfSaleModel() {
    }
    PointsOfSaleModel.prototype.getAll = function (dbName, callBack) {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query('SELECT * FROM pointofsale', function (err, result) {
                    if (!!err) {
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
            }
        });
    };
    PointsOfSaleModel.prototype.getPointOfSale = function (idPointOfSale, dbName, callBack) {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("SELECT * FROM pointofsale WHERE id = ?", [idPointOfSale], function (err, result) {
                    if (!!err) {
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
            }
        });
    };
    PointsOfSaleModel.prototype.getFilteredByName = function (filterName, dbName, callBack) {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("SELECT * FROM pointofsale WHERE name LIKE ?", ["%" + filterName + "%"], function (err, result) {
                    if (!!err) {
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
            }
        });
    };
    PointsOfSaleModel.prototype.add = function (name, address, tel, coord, dbName, callBack) {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("INSERT INTO pointofsale  (name, address, tel,coord) VALUES(?,?,?,POINT(?,?))", [name, address, tel, Number(coord.lat), Number(coord.lng)], function (err, result) {
                    if (!!err) {
                        //if (err.code === "ER_DUP_ENTRY") 
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
    PointsOfSaleModel.prototype.update = function (id, name, address, tel, coord, dbName, callback) {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("UPDATE pointofsale  SET name = ?, address = ?, tel = ?, coord = POINT(?,?) WHERE id = ?", [name, address, tel, Number(coord.lat), Number(coord.lng), id], function (err, result) {
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
                            message: "Los datos se actualizaron correctamente"
                        });
                    }
                });
            }
        });
    };
    ;
    PointsOfSaleModel.prototype.delete = function (id, dbName, callback) {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query('DELETE FROM pointofsale WHERE id = ? ', [id], function (err, result) {
                    if (!!err) {
                        // TODO: log error -> common/errorHandling.ts
                        // errorHandler.log(err);
                        console.error(err);
                        var errorMessage = "";
                        if (err.code === "ER_ROW_IS_REFERENCED_2") {
                            errorMessage = "No se puede borrar el registro, porque es utilizado en otra parte del sistema";
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
    return PointsOfSaleModel;
}());
module.exports = new PointsOfSaleModel();
//# sourceMappingURL=pointsOfSaleModel.js.map