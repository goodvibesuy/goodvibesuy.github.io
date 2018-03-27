import { Result, ResultWithData, ResultCode } from '../datatypes/result';
var masterDBController = require('../bd/masterConnectionsBD');
var clientDBController = require('../bd/clientConnectionsBD');

class TemplateRoutesModel {
    constructor() {
    }

    getAll(dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
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
        var pool = clientDBController.getUserConnection(dbName);
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

    addPointOfSale(idRoute: Number, idPointOfSale: Number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("SELECT position AS last FROM templateRoute_pointofsale WHERE idroute = ? order by position desc limit 1", [idRoute], function (err: any, result: any) {
                    if (err) throw err;
                    var lastPointOfSale = result.length == 0 ? 0 : result[0].last;
                    con.query("INSERT INTO templateRoute_pointofsale (idroute,idpointofsale,position) VALUES (?,?,?)", [idRoute, idPointOfSale, lastPointOfSale + 1], function (err: any, result: any) {
                        con.release();
                        if (err) throw err;
                        callBack({ result: 1, message: "OK", data: result });
                    });
                });
            }
        });
    };

    removePointOfSale(idRoute: Number, idPointOfSale: Number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("SELECT position FROM templateRoute_pointofsale WHERE idroute = ? AND idpointofsale = ?", [idRoute, idPointOfSale], function (err: any, result: any) {
                    if (err) throw err;
                    var positionPointOfSale = result[0].position;

                    con.query("DELETE FROM templateRoute_pointofsale WHERE idroute = ? AND idpointofsale = ?", [idRoute, idPointOfSale], function (err: any, result: any) {
                        if (err) throw err;
                        con.query("UPDATE templateRoute_pointofsale SET position = position -1 WHERE idroute = ? AND  position > ?",
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
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("UPDATE templateRoute_pointofsale SET position = ? WHERE idroute = ? AND position = ?", [position, idRoute, newPosition], function (err: any, result: any) {
                    if (err) throw err;
                    con.query("UPDATE templateRoute_pointofsale SET position = ? WHERE idroute = ? AND idpointofsale = ?",
                        [newPosition, idRoute, idPointOfSale], function (err: any, result: any) {
                            con.release();
                            callBack({ result: 1, message: "OK", data: result });
                        });
                });
            }
        });
    }

    getPointsOfSales(idRoute: Number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("SELECT * FROM templateRoute_pointofsale INNER JOIN pointofsale as POS ON POS.id = idpointofsale WHERE idroute = ? ORDER BY position ASC", [idRoute],
                    function (err: any, result: any) {
                        con.release();
                        if (err) throw err;
                        callBack({ result: 1, message: "OK", data: result });
                    });
            }
        });

    };

    update(travelName: string, idRoute: Number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("UPDATE templateRoute SET  name = ? WHERE idroute =?", [travelName, idRoute],
                    function (err: any, result: any) {
                        con.release();
                        if (err) throw err;
                        callBack({ result: 1, message: "OK", data: result });
                    });
            }
        });
    };

    delete(idRoute: Number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("DELETE FROM templateRoute WHERE idRoute = ?", [idRoute], function (err: any, result: any) {
                    con.release();

                    if (!!err) {
                        // TODO: log error -> common/errorHandling.ts
                        // errorHandler.log(err);
                        console.error(err);
                        let errorMessage = "";
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

module.exports = new TemplateRoutesModel();