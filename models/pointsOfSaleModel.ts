import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { Product } from '../datatypes/product';
import { MainModel } from './mainModel';
import { PointOfSale } from '../datatypes/pointOfSale';
var masterDBController = require('../bd/masterConnectionsBD');

var mysql = require('mysql');

export class PointsOfSaleModel extends MainModel {
    constructor() {
        super();
    }

    getAll(dbName: string, callBack: (r: ResultWithData<PointOfSale[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query('SELECT * FROM customer as c JOIN pointofsale as pos ON c.id = pos.idCustomer ORDER BY name ASC', function (err: any, result: any[]) {
                    con.release();
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

    getPointOfSale(idPointOfSale: Number, dbName: string, callBack: (r: ResultWithData<PointOfSale[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("SELECT * FROM customer as c JOIN pointofsale as pos ON c.id = pos.idCustomer WHERE id = ?", [idPointOfSale], function (err: any, result: any) {
                    con.release();
                    if (!!err) {
                        callBack({
                            result: ResultCode.Error,
                            message: 'Error'
                        });
                    } else {
                        callBack({
                            result: ResultCode.OK,
                            message: 'OK',
                            data: result.length > 0 ? result[0] : null
                        });
                    }
                });
            }
        });
    }

    getFilteredByName(filterName: string, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("SELECT * FROM customer as c JOIN pointofsale as pos ON c.id = pos.idCustomer WHERE name LIKE ? ORDER BY name ASC", ["%" + filterName + "%"], function (err: any, result: any[]) {
                    con.release();
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

    add(name: string, businessName: string, contactName: string, RUT: string, idGroup: number,
        address: string, tel: string, image: string, coord: any, dbName: string, callBack: (r: ResultWithData<number>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (!!err) {
                con.release();
                console.error(err);
            } else {
                // empezar transaccion
                con.beginTransaction(function (err: any) {

                    // insertar en tabla base
                    con.query("INSERT INTO customer (name,contactName,idGroup, address, tel, image, coord) VALUES(?,?,?,?,?,?,POINT(?,?))",
                        [name, contactName, idGroup, address, tel, image, Number(coord.lat), Number(coord.lng)], function (
                        err: any, result: any) {
                        if (!!err) {
                            con.rollback(function () {
                                console.log(err);
                                con.release();
                                callBack({
                                    result: -1,
                                    message: "Error interno. - No se pudo agregar el punto de venta."
                                });
                            });
                        } else {
                            // insertar en tabla especifica
                            con.query("INSERT INTO pointofsale (idCustomer, businessName, RUT) VALUES(?,?,?)", [result.insertId, businessName, RUT], function (
                                err: any,
                                result: any
                            ) {
                                if (!!err) {
                                    con.rollback(function () {
                                        console.log(err);
                                        con.release();
                                        callBack({
                                            result: -1,
                                            message: "Error interno. - No se pudo agregar el punto de venta."
                                        });
                                    });
                                } else {
                                    // commit transaccion
                                    con.commit(function (err: any) {
                                        if (!!err) {
                                            con.rollback(function () {
                                                console.log(err);
                                                con.release();
                                                callBack({ result: -1, message: "Error interno. No se pudo agregar el punto de venta." });
                                            });
                                        } else {
                                            con.release();
                                            callBack({
                                                result: ResultCode.OK,
                                                message: 'OK'
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                });
            }
        });
    }

    update(id: number, name: string, businessName: string, contactName: string, RUT: string, idGroup: number, address: string, tel: string, image: string, coord: any, dbName: string, callback: (r: Result) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (!!err) {
                con.release();
                console.error(err);
            } else {                
                // empezar transaccion
                con.beginTransaction(function (err: any) {
                    // actualizar la tabla base customer
                    con.query("UPDATE customer SET name = ?,contactName = ?, idGroup = ?, address = ?, tel = ?, image = ?, coord = POINT(?,?) WHERE id = ?",
                        [name, contactName, idGroup, address, tel, image, Number(coord.lat), Number(coord.lng), id], function (err: any, result: any) {
                        if (!!err) {
                            // TODO: log error -> common/errorHandling.ts
                            // errorHandler.log(err);
                            con.rollback(function () {
                                console.error(err);
                                con.release();
                                callback({
                                    result: ResultCode.Error,
                                    message: "Error interno. No se pudo actualizar el punto de venta."
                                });
                            });
                        } else {
                            // actualizar la tabla especifica pointofsale
                            con.query("UPDATE pointofsale SET RUT = ?, businessName = ? WHERE idCustomer = ?", [RUT, businessName, id],
                            function (err: any, result: any) {
                                if (!!err) {
                                    // TODO: log error -> common/errorHandling.ts
                                    // errorHandler.log(err);
                                    con.rollback(function () {
                                        console.error(err);
                                        con.release();
                                        callback({
                                            result: ResultCode.Error,
                                            message: "Error interno. No se pudo actualizar el punto de venta."
                                        });
                                    });
                                } else {
                                    // commit transaccion
                                    con.commit(function (err: any) {
                                        if (!!err) {
                                            con.rollback(function () {
                                                console.log(err);
                                                con.release();
                                                callback({
                                                    result: ResultCode.Error,
                                                     message: "Error interno. No se pudo actualizar el punto de venta."
                                                });
                                            });
                                        } else {
                                            con.release();
                                            callback({
                                                result: ResultCode.OK,
                                                message: 'OK'
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                });
            }
        });
    };

    delete(id: number, dbName: string, callback: (r: Result) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (!!err) {
                con.release();
                console.error(err);
            } else {           
                // empezar transaccion
                con.beginTransaction(function (err: any) {
                    // borrar de la tabla especifica
                    con.query('DELETE FROM pointofsale WHERE idCustomer = ? ', [id], function (err: any, result: any) {
                        if (!!err) {
                            con.rollback(function () {
                                console.log(err);
                                con.release();
                                callback({
                                    result: ResultCode.Error,
                                    message: err.code == "ER_ROW_IS_REFERENCED_2"?
                                            "No se puede borrar el registro, porque es utilizado en otra parte del sistema":
                                            "Error interno. No se pudo borrar el punto de venta."
                                });
                            });
                        } else {
                            // borrar de la tabla base
                            con.query('DELETE FROM customer WHERE id = ? ', [id], function (err: any, result: any) {
                                if (!!err) {
                                    con.rollback(function () {
                                        console.log(err);
                                        con.release();
                                        callback({
                                            result: ResultCode.Error,
                                            message: err.code == "ER_ROW_IS_REFERENCED_2"?
                                                    "No se puede borrar el registro, porque es utilizado en otra parte del sistema":
                                                    "Error interno. No se pudo borrar el punto de venta."
                                        });
                                    });
                                } else {   
                                    con.commit(function (err: any) {
                                        if (!!err) {
                                            con.rollback(function () {
                                                console.log(err);
                                                con.release();
                                                callback({
                                                    result: -1,
                                                    message: "Error interno. No se pudo hacer commit de eliminar la ruta."
                                                });
                                            });
                                        } else {                                             
                                            con.release();                                
                                            callback({
                                                result: ResultCode.OK,
                                                message: 'OK'
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                });
            }
        });
    }
}