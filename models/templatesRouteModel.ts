import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { MainModel } from './mainModel';
var masterDBController = require('../bd/masterConnectionsBD');

export class TemplateRoutesModel extends MainModel{
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
                con.query("SELECT * FROM templateRoute", function (err: any, result: any) {
                    con.release();
                    if (err) throw err;
                    callBack({ result: 1, message: "OK", data: result });
                });
            }
        });
    };

    add(travelName: string, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("INSERT INTO templateRoute (name) VALUES (?)", [travelName], function (err: any, result: any) {
                    con.release();
                    if (err) throw err;
                    callBack({ result: 1, message: "OK", data: result });
                });
            }
        });
    };

    addPointOfSale(idTemplateRoute: Number, idPointOfSale: Number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("SELECT position AS last FROM templateRoute_customer WHERE idTemplateRoute = ? order by position desc limit 1",
                    [idTemplateRoute], function (err: any, result: any) {
                        if (err) throw err;
                        var lastPointOfSale = result.length == 0 ? 0 : result[0].last;
                        con.query("INSERT INTO templateRoute_customer (idTemplateRoute,idCustomer,position) VALUES (?,?,?)",
                            [idTemplateRoute, idPointOfSale, lastPointOfSale + 1], function (err: any, result: any) {
                                con.release();
                                if (err) throw err;
                                callBack({ result: 1, message: "OK", data: result });
                            });
                    });
            }
        });
    };

    removePointOfSale(idRoute: Number, idPointOfSale: Number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("SELECT position FROM templateRoute_customer WHERE idTemplateRoute = ? AND idCustomer = ?", [idRoute, idPointOfSale], function (err: any, result: any) {
                    if (err) throw err;
                    var positionPointOfSale = result[0].position;

                    con.query("DELETE FROM templateRoute_customer WHERE idTemplateRoute = ? AND idCustomer = ?", [idRoute, idPointOfSale], function (err: any, result: any) {
                        if (err) throw err;
                        con.query("UPDATE templateRoute_customer SET position = position -1 WHERE idTemplateRoute = ? AND  position > ?",
                            [idRoute, positionPointOfSale], function (err: any, result: any) {
                                con.release();
                                callBack({ result: 1, message: "OK", data: result });
                            });
                    });
                });
            }
        });
    }

    reorderPointOfSale(idRoute: Number, idPointOfSale: Number, position: Number, newPosition: Number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("UPDATE templateRoute_customer SET position = ? WHERE idTemplateRoute = ? AND position = ?", [position, idRoute, newPosition], function (err: any, result: any) {
                    if (err) throw err;
                    con.query("UPDATE templateRoute_customer SET position = ? WHERE idTemplateRoute = ? AND idCustomer = ?",
                        [newPosition, idRoute, idPointOfSale], function (err: any, result: any) {
                            con.release();
                            callBack({ result: 1, message: "OK", data: result });
                        });
                });
            }
        });
    }

    getPointsOfSales(idRoute: Number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("SELECT * FROM templateRoute_customer INNER JOIN customer as POS ON POS.id = idCustomer WHERE idTemplateRoute = ? ORDER BY position ASC", [idRoute],
                    function (err: any, result: any) {
                        con.release();
                        if (err) throw err;
                        callBack({ result: 1, message: "OK", data: result });
                    });
            }
        });

    };

    update(travelName: string, idRoute: Number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("UPDATE templateRoute SET  name = ? WHERE id =?", [travelName, idRoute],
                    function (err: any, result: any) {
                        con.release();
                        if (err) throw err;
                        callBack({ result: 1, message: "OK", data: result });
                    });
            }
        });
    };

    delete(idRoute: Number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("DELETE FROM templateRoute WHERE id = ?", [idRoute], function (err: any, result: any) {
                    con.release();

                    if (!!err) {
                        // TODO: log error -> common/errorHandling.ts
                        // errorHandler.log(err);
                        console.error(err);
                        let errorMessage = err.code;
                        if (err.code === "ER_ROW_IS_REFERENCED_2") {
                            errorMessage = "No se puede borrar el registro, porque es utilizado en otra parte del sistema";
                        }
                        callBack({
                            result: ResultCode.Error,
                            message: errorMessage
                        });
                    } else {
                        callBack({
                            result: ResultCode.OK,
                            message: 'OK'
                        });
                    }
                    //if (err) throw err;
                });
            }
        });
    };
}