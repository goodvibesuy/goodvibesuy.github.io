import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { Product } from '../datatypes/product';
var masterDBController = require('../bd/masterConnectionsBD');
var clientDBController = require('../bd/clientConnectionsBD');

var mysql = require('mysql');

class PointsOfSaleModel {
    constructor() {
    }

    getAll(dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query('SELECT * FROM pointofsale', function (err: any, result: any[]) {
                    if (!!err) {
                        callBack({
                            result: ResultCode.Error,
                            message: 'Error'
                        });
                    } else {
                        callBack({
                            result: ResultCode.OK,
                            message: 'OK',
                            data: result
                        });
                    }
                });
            }
        });
    }

    getPointOfSale( idPointOfSale: Number, dbName: string,callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("SELECT * FROM pointofsale WHERE id = ?", [idPointOfSale], function (err: any, result: any) {
                    if (!!err) {
                        callBack({
                            result: ResultCode.Error,
                            message: 'Error'
                        });
                    } else {
                        callBack({
                            result: ResultCode.OK,
                            message: 'OK',
                            data: result
                        });
                    }
                });
            }
        });
    }

    getFilteredByName(filterName: string, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("SELECT * FROM pointofsale WHERE name LIKE ?", ["%" + filterName + "%"], function (err: any, result: any[]) {
                    if (!!err) {
                        callBack({
                            result: ResultCode.Error,
                            message: 'Error'
                        });
                    } else {
                        callBack({
                            result: ResultCode.OK,
                            message: 'OK',
                            data: result
                        });
                    }
                });
            }
        });
    }

    add(name: string, address: string, tel: string, coord: any, dbName: string, callBack: (r: ResultWithData<number>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("INSERT INTO pointofsale  (name, address, tel,coord) VALUES(?,?,?,POINT(?,?))",
                    [name, address, tel, Number(coord.lat), Number(coord.lng)], function (
                        err: any,
                        result: any
                    ) {
                        if (!!err) {
                            //if (err.code === "ER_DUP_ENTRY") 
                            console.error(err);
                            callBack({
                                result: ResultCode.Error,
                                message: 'Error'
                            });
                        } else {
                            callBack({
                                result: ResultCode.OK,
                                message: 'OK',
                                data: result.insertId
                            });
                        }
                    });
            }
        });
    }

    update(id: number, name: string, address: string, tel: string, coord: any,dbName:string, callback: (r: Result) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("UPDATE pointofsale  SET name = ?, address = ?, tel = ?, coord = POINT(?,?) WHERE id = ?",
                    [name, address, tel, Number(coord.lat), Number(coord.lng), id], function (err: any, result: any) {
                        if (!!err) {
                            // TODO: log error -> common/errorHandling.ts
                            // errorHandler.log(err);
                            console.error(err);
                            callback({
                                result: ResultCode.Error,
                                message: err.code
                            });
                        } else {
                            callback({
                                result: ResultCode.OK,
                                message: "Los datos se actualizaron correctamente"
                            });
                        }
                    });
            }
        });
    };

    delete(id: number,dbName:string, callback: (r: Result) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query('DELETE FROM pointofsale WHERE id = ? ', [id], function (err: any, result: any) {
                    if (!!err) {
                        // TODO: log error -> common/errorHandling.ts
                        // errorHandler.log(err);
                        console.error(err);
                        let errorMessage = "";
                        if (err.code === "ER_ROW_IS_REFERENCED_2") {
                            errorMessage = "No se puede borrar el registro, porque es utilizado en otra parte del sistema";
                        }
                        callback({
                            result: ResultCode.Error,
                            message: errorMessage
                        });
                    } else {
                        callback({
                            result: ResultCode.OK,
                            message: 'OK'
                        });
                    }
                });        
            }
        });        
    }
}

module.exports = new PointsOfSaleModel();
