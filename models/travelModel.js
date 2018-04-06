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
var TravelModel = /** @class */ (function (_super) {
    __extends(TravelModel, _super);
    function TravelModel() {
        return _super.call(this) || this;
    }
    TravelModel.prototype.getAll = function (dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("SELECT * FROM route", function (err, result) {
                    con.release();
                    if (err)
                        throw err;
                    callBack({ result: 1, message: "OK", data: result });
                });
            }
        });
    };
    ;
    TravelModel.prototype.add = function (route, dbName, callBack) {
        var mainThis = this;
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                console.log(err);
                con.release();
                console.error(err);
            }
            else {
                con.beginTransaction(function (err) {
                    //year: 2018, month: 4, day: 1
                    var d = route.date;
                    var dateRoute = d.year + "-" + (d.month + 1) + "-" + d.day;
                    con.query("INSERT INTO route (name,date) VALUES (?,?)", [route.name, dateRoute], function (err, result) {
                        if (err) {
                            con.rollback(function () {
                                console.log(err);
                                con.release();
                                callBack({ result: -1, message: "Error interno. - No se pudo agregar la ruta." });
                            });
                        }
                        else {
                            route.id = result.insertId;
                            con.query("INSERT INTO route_user(idroute,iduser) VALUES(?,?) ", [route.id, route.user.id], function (err, result) {
                                if (err) {
                                    con.rollback(function () {
                                        console.log(err);
                                        con.release();
                                        callBack({ result: -1, message: "Error interno. - No se pudo guardar el usuario de la ruta." });
                                    });
                                }
                                else {
                                    mainThis.addPointsOfSale(route.id, 0, route.pointsOfSale, callBack, con);
                                }
                            });
                        }
                    });
                });
            }
        });
    };
    ;
    TravelModel.prototype.update = function (route, dbName, callBack) {
        var mainThis = this;
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.beginTransaction(function (err) {
                    var dateOnly = (route.date.toString()).split("T");
                    con.query("UPDATE route SET  name = ?, date = ? WHERE id =?", [route.name, dateOnly[0], route.id], function (err, result) {
                        if (err) {
                            con.rollback(function () {
                                console.log(err);
                                con.release();
                                callBack({ result: -1, message: "Error interno. - No se pudo actualizar la ruta." });
                            });
                        }
                        else {
                            con.query("UPDATE route_user SET iduser = ? WHERE idroute = ? ", [route.user.id, route.id], function (err, result) {
                                if (err) {
                                    con.rollback(function () {
                                        console.log(err);
                                        con.release();
                                        callBack({ result: -1, message: "Error interno.No se pudo actualizar el usuario de la ruta" });
                                    });
                                }
                                else {
                                    con.query("DELETE FROM route_pointofsale WHERE idRoute = ?", [route.id], function (err, result) {
                                        if (err) {
                                            con.rollback(function () {
                                                console.log(err);
                                                con.release();
                                                callBack({ result: -1, message: "Error interno. -  No se pudieron borrar los POS de la ruta." });
                                            });
                                        }
                                        else {
                                            mainThis.addPointsOfSale(route.id, 0, route.pointsOfSale, callBack, con);
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
    ;
    TravelModel.prototype.addPointsOfSale = function (idRoute, index, pointsOfSale, callBack, con) {
        var mainThis = this;
        con.query("INSERT  INTO route_pointofsale(idRoute,idPointofsale,position) VALUES(?,?,?) ", [idRoute, pointsOfSale[index].id, index], function (err, result) {
            if (err) {
                con.rollback(function () {
                    console.log(err);
                    con.release();
                    callBack({ result: -1, message: "Error interno. No se pudo guardar el POS de la ruta." });
                });
            }
            else {
                if (index + 1 < pointsOfSale.length) {
                    mainThis.addPointsOfSale(idRoute, index + 1, pointsOfSale, callBack, con);
                }
                else {
                    con.commit(function (err) {
                        if (err) {
                            con.rollback(function () {
                                console.log(err);
                                con.release();
                                callBack({ result: -1, message: "Error interno. No se pudo hacer commit de la ruta" });
                            });
                        }
                        else {
                            callBack({ result: 1, message: "OK", data: result });
                            con.release();
                        }
                    });
                }
            }
        });
    };
    TravelModel.prototype.addPointOfSale = function (idRoute, idPointOfSale, dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("SELECT position AS last FROM route_pointofsale WHERE idroute = ? order by position desc limit 1", [idRoute], function (err, result) {
                    if (err)
                        throw err;
                    var lastPointOfSale = result.length == 0 ? 0 : result[0].last;
                    con.query("INSERT INTO route_pointofsale (idroute,idpointofsale,position) VALUES (?,?,?)", [idRoute, idPointOfSale, lastPointOfSale + 1], function (err, result) {
                        con.release();
                        if (err)
                            throw err;
                        callBack({ result: 1, message: "OK", data: result });
                    });
                });
            }
        });
    };
    ;
    TravelModel.prototype.addUser = function (idRoute, idUser, date, dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("INSERT INTO route_user (idroute,iduser,date) VALUES (?,?,?)", [idRoute, idUser, date.year + "-" + date.month + "-" + date.day], function (err, result) {
                    con.release();
                    if (err)
                        throw err;
                    callBack({ result: 1, message: "OK", data: result });
                });
            }
        });
    };
    ;
    TravelModel.prototype.removePointOfSale = function (idRoute, idPointOfSale, dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("SELECT position FROM route_pointofsale WHERE idroute = ? AND idpointofsale = ?", [idRoute, idPointOfSale], function (err, result) {
                    if (err)
                        throw err;
                    var positionPointOfSale = result[0].position;
                    con.query("DELETE FROM route_pointofsale WHERE idroute = ? AND idpointofsale = ?", [idRoute, idPointOfSale], function (err, result) {
                        if (err)
                            throw err;
                        con.query("UPDATE route_pointofsale SET position = position -1 WHERE idroute = ? AND  position > ?", [idRoute, positionPointOfSale], function (err, result) {
                            con.release();
                            callBack({ result: 1, message: "OK", data: result });
                        });
                    });
                });
            }
        });
    };
    TravelModel.prototype.removeUser = function (idRoute, idUser, dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("DELETE FROM route_user WHERE idroute = ? AND iduser = ? ", [idRoute, idUser], function (err, result) {
                    con.release();
                    if (err)
                        throw err;
                    callBack({ result: 1, message: "OK", data: result });
                });
            }
        });
    };
    TravelModel.prototype.reorderPointOfSale = function (idRoute, idPointOfSale, position, newPosition, dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("UPDATE route_pointofsale SET position = ? WHERE idroute = ? AND position = ?", [position, idRoute, newPosition], function (err, result) {
                    if (err)
                        throw err;
                    con.query("UPDATE route_pointofsale SET position = ? WHERE idroute = ? AND idpointofsale = ?", [newPosition, idRoute, idPointOfSale], function (err, result) {
                        con.release();
                        callBack({ result: 1, message: "OK", data: result });
                    });
                });
            }
        });
    };
    TravelModel.prototype.getPointsOfSales = function (idRoute, dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("SELECT * FROM route_pointofsale INNER JOIN pointofsale as POS ON POS.id = idpointofsale WHERE idroute = ? ORDER BY position ASC", [idRoute], function (err, result) {
                    con.release();
                    if (err)
                        throw err;
                    callBack({ result: 1, message: "OK", data: result });
                });
            }
        });
    };
    ;
    TravelModel.prototype.getUers = function (idRoute, dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("SELECT * FROM route_user INNER JOIN users as u ON u.id = idUser WHERE idroute = ?", [idRoute], function (err, result) {
                    con.release();
                    if (err)
                        throw err;
                    callBack({ result: 1, message: "OK", data: result });
                });
            }
        });
    };
    TravelModel.prototype.delete = function (idRoute, dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("DELETE FROM route WHERE id = ?", [idRoute], function (err, result) {
                    con.release();
                    if (!!err) {
                        // TODO: log error -> common/errorHandling.ts
                        // errorHandler.log(err);
                        console.error(err);
                        var errorMessage = "";
                        if (err.code === "ER_ROW_IS_REFERENCED_2") {
                            errorMessage = "No se puede borrar el registro, porque es utilizado en otra parte del sistema";
                        }
                        callBack({
                            result: result_1.ResultCode.Error,
                            message: errorMessage
                        });
                    }
                    else {
                        callBack({
                            result: result_1.ResultCode.OK,
                            message: 'OK'
                        });
                    }
                    //if (err) throw err;
                });
            }
        });
    };
    ;
    return TravelModel;
}(mainModel_1.MainModel));
exports.TravelModel = TravelModel;
//# sourceMappingURL=travelModel.js.map