import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { Product } from '../datatypes/product';
import { MainModel } from './mainModel';
import { Client } from '../datatypes/Client';

var mysql = require('mysql');

export class ClientModel extends MainModel{    
    constructor() {
        super();    
    }
    
    getAll(dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query('SELECT * FROM client ORDER BY names ASC', function (err: any, result: any[]) {
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
    


    add(client:Client, dbName: string, callBack: (r: ResultWithData<number>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("INSERT INTO client  (names,lastnames,address,phone) VALUES(?,?,?,?)",
                    [client.names,client.lastnames,client.address,client.phone], function (err: any,result: any) {
                        con.release();
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

    /*
    update(id: number, name: string, businessName: string, contactName: string, RUT: string, idGroup: number, address: string, tel: string, image: string, coord: any, dbName: string, callback: (r: Result) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("UPDATE pointofsale  SET name = ?,businessName = ?,contactName = ?,RUT = ?, idGroup = ?, address = ?, tel = ?, image = ?, coord = POINT(?,?) WHERE id = ?",
                    [name, businessName, contactName, RUT, idGroup, address, tel, image, Number(coord.lat), Number(coord.lng), id], function (err: any, result: any) {
                        con.release();
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
*/
    delete(id: number, dbName: string, callback: (r: Result) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query('DELETE FROM client WHERE id = ? ', [id], function (err: any, result: any) {
                    con.release();
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