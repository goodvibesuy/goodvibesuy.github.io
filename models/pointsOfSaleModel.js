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
var result_1 = require("../datatypes/result");
var mainModel_1 = require("./mainModel");
var masterDBController = require('../bd/masterConnectionsBD');
var mysql = require('mysql');
var PointsOfSaleModel = /** @class */ (function (_super) {
    __extends(PointsOfSaleModel, _super);
    function PointsOfSaleModel() {
        return _super.call(this) || this;
    }
    PointsOfSaleModel.prototype.getAll = function (dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query('SELECT * FROM pointofsale ORDER BY name ASC', function (err, result) {
                    con.release();
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
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("SELECT * FROM pointofsale WHERE id = ?", [idPointOfSale], function (err, result) {
                    con.release();
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
                            data: result.length > 0 ? result[0] : null
                        });
                    }
                });
            }
        });
    };
    PointsOfSaleModel.prototype.getFilteredByName = function (filterName, dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("SELECT * FROM pointofsale WHERE name LIKE ?", ["%" + filterName + "%"], function (err, result) {
                    con.release();
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
    PointsOfSaleModel.prototype.add = function (name, businessName, contactName, RUT, group, address, tel, image, coord, dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("INSERT INTO pointofsale  (name,businessName,contactName,RUT,idGroup, address, tel, image, coord) VALUES(?,?,?,?,?,?,?,?,POINT(?,?))", [name, businessName, contactName, RUT, group, address, tel, image, Number(coord.lat), Number(coord.lng)], function (err, result) {
                    con.release();
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
    PointsOfSaleModel.prototype.update = function (id, name, businessName, contactName, RUT, address, tel, image, coord, dbName, callback) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("UPDATE pointofsale  SET name = ?,businessName = ?,contactName = ?,RUT = ?, address = ?, tel = ?, image = ?, coord = POINT(?,?) WHERE id = ?", [name, businessName, contactName, RUT, address, tel, image, Number(coord.lat), Number(coord.lng), id], function (err, result) {
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
                            message: "Los datos se actualizaron correctamente"
                        });
                    }
                });
            }
        });
    };
    ;
    PointsOfSaleModel.prototype.delete = function (id, dbName, callback) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query('DELETE FROM pointofsale WHERE id = ? ', [id], function (err, result) {
                    con.release();
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
}(mainModel_1.MainModel));
exports.PointsOfSaleModel = PointsOfSaleModel;
//# sourceMappingURL=pointsOfSaleModel.js.map