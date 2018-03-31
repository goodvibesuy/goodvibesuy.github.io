import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { Route } from '../datatypes/route';
import { PointOfSale } from '../datatypes/pointOfSale';
var masterDBController = require('../bd/masterConnectionsBD');
var clientDBController = require('../bd/clientConnectionsBD');


export class TravelModel {
    constructor() {
    }

    getAll(dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("SELECT * FROM route", function (err: any, result: any) {
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
                con.query("INSERT INTO route (name) VALUES (?)", [travelName], function (err: any, result: any) {
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
                con.query("SELECT position AS last FROM route_pointofsale WHERE idroute = ? order by position desc limit 1", [idRoute], function (err: any, result: any) {
                    if (err) throw err;
                    var lastPointOfSale = result.length == 0 ? 0 : result[0].last;
                    con.query("INSERT INTO route_pointofsale (idroute,idpointofsale,position) VALUES (?,?,?)", [idRoute, idPointOfSale, lastPointOfSale + 1], function (err: any, result: any) {
                        con.release();
                        if (err) throw err;
                        callBack({ result: 1, message: "OK", data: result });
                    });
                });
            }
        });
    };

    addUser(idRoute: Number, idUser: Number, date: any, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("INSERT INTO route_user (idroute,iduser,date) VALUES (?,?,?)", [idRoute, idUser, date.year + "-" + date.month + "-" + date.day], function (err: any, result: any) {
                    con.release();
                    if (err) throw err;
                    callBack({ result: 1, message: "OK", data: result });
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
                con.query("SELECT position FROM route_pointofsale WHERE idroute = ? AND idpointofsale = ?", [idRoute, idPointOfSale], function (err: any, result: any) {
                    if (err) throw err;
                    var positionPointOfSale = result[0].position;

                    con.query("DELETE FROM route_pointofsale WHERE idroute = ? AND idpointofsale = ?", [idRoute, idPointOfSale], function (err: any, result: any) {
                        if (err) throw err;
                        con.query("UPDATE route_pointofsale SET position = position -1 WHERE idroute = ? AND  position > ?",
                            [idRoute, positionPointOfSale], function (err: any, result: any) {
                                con.release();
                                callBack({ result: 1, message: "OK", data: result });
                            });
                    });
                });
            }
        });
    }

    removeUser = function (idRoute: Number, idUser: Number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("DELETE FROM route_user WHERE idroute = ? AND iduser = ? ", [idRoute, idUser], function (err: any, result: any) {
                    con.release();
                    if (err) throw err;
                    callBack({ result: 1, message: "OK", data: result });
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
                con.query("UPDATE route_pointofsale SET position = ? WHERE idroute = ? AND position = ?", [position, idRoute, newPosition], function (err: any, result: any) {
                    if (err) throw err;
                    con.query("UPDATE route_pointofsale SET position = ? WHERE idroute = ? AND idpointofsale = ?",
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
                con.query("SELECT * FROM route_pointofsale INNER JOIN pointofsale as POS ON POS.id = idpointofsale WHERE idroute = ? ORDER BY position ASC", [idRoute],
                    function (err: any, result: any) {
                        con.release();
                        if (err) throw err;
                        callBack({ result: 1, message: "OK", data: result });
                    });
            }
        });

    };

    getUers(idRoute: Number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("SELECT * FROM route_user INNER JOIN users as u ON u.id = idUser WHERE idroute = ?", [idRoute],
                    function (err: any, result: any) {
                        con.release();
                        if (err) throw err;
                        callBack({ result: 1, message: "OK", data: result });
                    });
            }
        });
    }


    //update(travelName: string, idRoute: Number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
    update(route: Route, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var mainThis = this;
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.beginTransaction(function (err: any) {
                    con.query("UPDATE route SET  name = ?, date = ? WHERE id =?",
                        [route.name, route.date, route.id],
                        function (err: any, result: any) {
                            if (err) {
                                con.rollback(function () {
                                    con.release();
                                    callBack({ result: -1, message: "Error interno." });
                                });
                            } else {
                                con.query("UPDATE route_user SET iduser = ? WHERE idroute = ? ",
                                    [route.user.id, route.id], function (err: any, result: any) {
                                        if (err) {
                                            con.rollback(function () {
                                                con.release();
                                                callBack({ result: -1, message: "Error interno." });
                                            });
                                        } else {
                                            con.query("DELETE FROM route_pointofsale WHERE idRoute = ?",
                                                [route.id], function (err: any, result: any) {
                                                    if (err) {
                                                        con.rollback(function () {
                                                            con.release();
                                                            callBack({ result: -1, message: "Error interno." });
                                                        });
                                                    } else {
                                                        mainThis.addPointsOfSale(route.id,0,route.pointsOfSale,callBack,con);
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

    addPointsOfSale(idRoute: number, index: number, pointsOfSale: PointOfSale[],
        callBack: (r: ResultWithData<any[]>) => void, con: any): void {
        var mainThis = this;
        con.query("INSERT  INTO route_pointofsale(idRoute,idPointofsale,position) VALUES(?,?,?) ",
            [idRoute, pointsOfSale[index].id, index], function (err: any, result: any) {
                if (err) {
                    con.rollback(function () {
                        con.release();
                        callBack({ result: -1, message: "Error interno." });
                    });
                } else {
                    if (index + 1 < pointsOfSale.length) {
                        mainThis.addPointsOfSale(idRoute,index + 1,pointsOfSale,callBack,con);                        
                    } else {
                        con.commit(function (err: any) {
                            if (err) {
                                con.rollback(function () {
                                    con.release();
                                    callBack({ result: -1, message: "Error interno." });
                                });
                            }
                            callBack({ result: 1, message: "OK", data: result });
                            con.end();
                        });
                    }
                }

            });
    }


    delete(idRoute: Number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("DELETE FROM route WHERE idRoute = ?", [idRoute], function (err: any, result: any) {
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
