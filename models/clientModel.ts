import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { Product } from '../datatypes/product';
import { MainModel } from './mainModel';
import { Client } from '../datatypes/client';

var mysql = require('mysql');

export class ClientModel extends MainModel {
    constructor() {
        super();
    }

    get(id: number, dbName: string, callBack: (r: ResultWithData<Client>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (!!err) {
                console.error(err);
                con.release();
            } else {
                const QUERY: string = 'SELECT * FROM client as cli JOIN customer as c ON cli.idCustomer = c.id WHERE c.id = ? ORDER BY name ASC';
                con.query(QUERY, [id], function (err: any, result: any[]) {
                    con.release();
                    if (!!err) {
                        console.error(err);
                        callBack({
                            result: ResultCode.Error,
                            message: 'Error'
                        });
                    } else {
                        callBack({
                            result: ResultCode.OK,
                            message: 'OK',
                            data: result && result.length > 0 ? result[0] : null
                        });
                    }
                });
            }
        });
    }

    getAll(dbName: string, callBack: (r: ResultWithData<Client[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (!!err) {
                console.error(err);
                con.release();
            } else {
                const QUERY: string = 'SELECT * FROM client as cli JOIN customer as c ON cli.idCustomer = c.id ORDER BY name ASC';
                con.query(QUERY, function (err: any, result: any[]) {
                    console.error(err);
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

    add(client: Client, dbName: string, callBack: (r: ResultWithData<number>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (!!err) {
                con.release();
                console.error(err);
            } else {
                var lat: number = 0
                var lng: number = 0
                if (client.coord !== undefined && client.coord !== null) {
                    lat = Number(client.coord.lat);
                    lng = Number(client.coord.lng);
                }

                // empezar transaccion
                con.beginTransaction(function (err: any) {
                    // insertar en tabla base
                    const QUERY: string = "INSERT INTO customer (name, contactName, idGroup, address, tel, image, coord) VALUES(?,?,?,?,?,?,POINT(?,?))";
                    con.query(QUERY, [client.name, '', client.idGroup, client.address, client.tel, 0, Number(lat), Number(lng)], function (err: any, result: any) {
                        if (!!err) {
                            con.rollback(function () {
                                console.log(err);
                                con.release();
                                callBack({
                                    result: -1,
                                    message: "Error interno. - No se pudo agregar el cliente."
                                });
                            });
                        } else {
                            // insertar en tabla especifica
                            const QUERY: string = "INSERT INTO client (idCustomer, lastName) VALUES(?,?)";
                            con.query(QUERY, [result.insertId, client.lastName], function (err: any, result: any) {
                                if (!!err) {
                                    con.rollback(function () {
                                        console.log(err);
                                        con.release();
                                        callBack({
                                            result: ResultCode.Error,
                                            message: "Error interno. - No se pudo agregar el cliente."
                                        });
                                    });
                                } else {
                                    // commit transaccion
                                    con.commit(function (err: any) {
                                        if (!!err) {
                                            con.rollback(function () {
                                                console.log(err);
                                                con.release();
                                                callBack({ result: ResultCode.Error,
                                                    message: "Error interno. No se pudo agregar el cliente."
                                                });
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

    update(client: Client, dbName: string, callback: (r: Result) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (!!err) {
                con.release();
                console.error(err);
            } else {
                var lat: number = 0
                var lng: number = 0
                if (client.coord !== undefined && client.coord !== null) {
                    lat = Number(client.coord.lat);
                    lng = Number(client.coord.lng);
                }
                // empezar transaccion
                con.beginTransaction(function (err: any) {
                    // actualizar la tabla base customer
                    const QUERY: string = "UPDATE customer SET name = ?, contactName = ?, idGroup = ?, address = ?, tel = ?, image = ?, coord = POINT(?,?) WHERE id = ?";
                    const CONTACT_NAME: string = '';
                    con.query(QUERY, 
                        [client.name, CONTACT_NAME, client.idGroup, client.address, client.tel, 0, Number(lat), Number(lng), client.id], function (err: any, result: any) {
                        if (!!err) {
                            // TODO: log error
                            con.rollback(function () {
                                console.error(err);
                                con.release();
                                callback({
                                    result: ResultCode.Error,
                                    message: "Error interno. No se pudo actualizar el cliente."
                                });
                            });
                        } else {
                            // actualizar la tabla especifica client
                            const QUERY: string = "UPDATE client SET lastName = ? WHERE idCustomer = ?";
                            con.query(QUERY, [client.lastName, client.id],
                            function (err: any, result: any) {
                                if (!!err) {
                                    // TODO: log error
                                    con.rollback(function () {
                                        console.error(err);
                                        con.release();
                                        callback({
                                            result: ResultCode.Error,
                                            message: "Error interno. No se pudo actualizar el cliente."
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
                                                    message: "Error interno. No se pudo actualizar el cliente."
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

    delete (id: number, dbName: string, callback: (r: Result) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (!!err) {
                con.release();
                console.error(err);
            } else {
                // empezar transaccion
                con.beginTransaction(function (err: any) {
                    // borrar de la tabla especifica
                    con.query('DELETE FROM client WHERE idCustomer = ? ', [id], function (err: any, result: any) {
                        if (!!err) {
                            con.rollback(function () {
                                console.log(err);
                                con.release();
                                callback({
                                    result: ResultCode.Error,
                                    message: err.code == "ER_ROW_IS_REFERENCED_2" ?
                                        "No se puede borrar el registro, porque es utilizado en otra parte del sistema" :
                                        "Error interno. No se pudo borrar el cliente."
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
                                            message: err.code == "ER_ROW_IS_REFERENCED_2" ?
                                                "No se puede borrar el registro, porque es utilizado en otra parte del sistema" :
                                                "Error interno. No se pudo borrar el cliente."
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
                                                    message: "Error interno. No se pudo borrar el cliente."
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