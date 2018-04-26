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
var userModel_1 = require("./userModel");
var lineViewingView_1 = require("../datatypes/views/lineViewingView");
var pointOfSale_1 = require("../datatypes/pointOfSale");
var mainModel_1 = require("./mainModel");
var masterDBController = require('../bd/masterConnectionsBD');
var ViewingsModel = /** @class */ (function (_super) {
    __extends(ViewingsModel, _super);
    function ViewingsModel() {
        var _this = _super.call(this) || this;
        _this.userModel = new userModel_1.UserModel();
        return _this;
    }
    ViewingsModel.prototype.getViewingById = function (viewingId, dbName, callBack) {
        console.warn("Revisar porque esta puesto idProducto en 0 siempre");
        var mainThis = this;
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                console.error(err);
                con.release();
            }
            else {
                con.query("SELECT * FROM viewing v INNER JOIN pointofsale pos ON v.idpointofsale = pos.id WHERE idviewing = ?", [viewingId], function (err, result) {
                    if (err) {
                        con.release();
                        callBack({
                            result: result_1.ResultCode.Error,
                            message: err.code,
                            data: result
                        });
                    }
                    else {
                        var pos = new pointOfSale_1.PointOfSale();
                        pos.address = result[0].address;
                        pos.name = result[0].name;
                        pos.tel = result[0].tel;
                        pos.id = result[0].id;
                        var line = new lineViewingView_1.LineViewingView(result[0].date, pos, result[0].idviewing);
                        var linesViewings = new Array();
                        linesViewings.push(line);
                        mainThis.getProductsLine(0, linesViewings, 0, dbName, con, callBack);
                    }
                });
            }
        });
    };
    ViewingsModel.prototype.viewingsBetween = function (sourceYear, sourceMonth, sourceDay, lastYear, lastMonth, lastDay, idPos, idProduct, dbName, callBack) {
        var mainThis = this;
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                console.error(err);
                con.release();
            }
            else {
                var queryParameters = new Array();
                var filters = "";
                var haveDate = (Number(sourceYear) !== 0 && Number(sourceMonth) !== 0 && Number(sourceDay) !== 0);
                if (haveDate) {
                    filters += "v.date > ? AND v.date < ?";
                    queryParameters.push(sourceYear + "-" + sourceMonth + "-" + sourceDay);
                    queryParameters.push(lastYear + "-" + lastMonth + "-" + lastDay + " 23:59");
                }
                if (idPos !== 0) {
                    if (haveDate) {
                        filters += "AND pos.id = ?";
                    }
                    else {
                        filters += " pos.id = ?";
                    }
                    queryParameters.push(idPos);
                }
                if (queryParameters.length > 0) {
                    filters = " WHERE " + filters;
                }
                con.query("SELECT * FROM viewing v INNER JOIN pointofsale pos ON v.idpointofsale = pos.id " + filters + " ORDER BY v.date DESC", queryParameters, function (err, result) {
                    if (err) {
                        console.log(err);
                        con.release();
                        callBack({
                            result: result_1.ResultCode.Error,
                            message: err.code,
                            data: result
                        });
                    }
                    else {
                        var viewings = result;
                        var linesViewings = new Array();
                        if (viewings.length > 0) {
                            for (var i = 0; i < viewings.length; i++) {
                                var pos = new pointOfSale_1.PointOfSale();
                                pos.address = viewings[i].address;
                                pos.name = viewings[i].name;
                                pos.tel = viewings[i].tel;
                                pos.id = viewings[i].id;
                                var line = new lineViewingView_1.LineViewingView(viewings[i].date, pos, viewings[i].idviewing);
                                linesViewings.push(line);
                            }
                        }
                        mainThis.getProductsLine(0, linesViewings, idProduct, dbName, con, callBack);
                    }
                });
            }
        });
    };
    ;
    /*
    public getLast(cantViews: number, dbName: string,
        callBack: (r: ResultWithData<any[]>) => void): void {
        var mainThis = this;
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                console.error(err);
                con.release();
            } else {
                con.query(
                    "SELECT * FROM viewing v INNER JOIN pointofsale pos ON v.idpointofsale = pos.id ORDER BY v.date DESC LIMIT 10", [cantViews],
                    function (err: any, result: any) {
                        if (err) {
                            con.release();
                            callBack({
                                result: ResultCode.Error,
                                message: err.code,
                                data: result
                            });
                        } else {

                            var viewings = result;
                            var linesViewings: LineViewingView[] = new Array<LineViewingView>();
                            if (viewings.length > 0) {
                                for (let i = 0; i < viewings.length; i++) {
                                    let pos: PointOfSale = new PointOfSale();
                                    pos.address = viewings[i].address;
                                    pos.name = viewings[i].name;
                                    pos.tel = viewings[i].tel;
                                    pos.id = viewings[i].id;
                                    var line: LineViewingView = new LineViewingView(viewings[i].date, pos, viewings[i].idviewing);
                                    linesViewings.push(line);
                                }
                            }
                            mainThis.getProductsLine(0, linesViewings, dbName, con, callBack);
                        }
                    }
                );
            }
        });
    };
    */
    ViewingsModel.prototype.viewingsByRoute = function (idRoute, dbName, callBack) {
        var mainThis = this;
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                console.error(err);
                con.release();
            }
            else {
                con.query("SELECT * FROM route_pointofsale rps INNER JOIN viewing  v ON rps.idViewing = v.idviewing WHERE idRoute = ? ", [idRoute], function (err, result) {
                    con.release();
                    if (err) {
                        callBack({
                            result: result_1.ResultCode.Error,
                            message: err.code,
                            data: result
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
    ;
    ViewingsModel.prototype.viewingByRouteAndPOS = function (idRoute, idPointofsale, dbName, callBack) {
        var mainThis = this;
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                console.error(err);
                con.release();
            }
            else {
                con.query("SELECT idViewing FROM route_pointofsale WHERE idRoute = ? AND idPointofsale = ?", [idRoute, idPointofsale], function (err, result) {
                    if (err) {
                        con.release();
                        callBack({
                            result: result_1.ResultCode.Error,
                            message: err.code,
                            data: result
                        });
                    }
                    else {
                        con.release();
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
    ;
    ViewingsModel.prototype.getProductsLine = function (index, lines, idProduct, dbName, con, callBack) {
        var mainThis = this;
        if (index < lines.length) {
            var queryParameters = new Array();
            queryParameters.push(lines[index].getIdViewing());
            var filters = "";
            if (idProduct !== 0) {
                filters = "AND idproduct = ?";
                queryParameters.push(idProduct);
            }
            con.query("SELECT * FROM viewing_product WHERE idviewing = ? " + filters, queryParameters, function (err, result) {
                if (err) {
                    con.release();
                    callBack({
                        result: result_1.ResultCode.Error,
                        message: err.code,
                        data: result
                    });
                }
                else {
                    if (result.length > 0) {
                        for (var i = 0; i < result.length; i++) {
                            lines[index].addProduct(result[i]);
                        }
                    }
                    mainThis.getProductsLine(index + 1, lines, idProduct, dbName, con, callBack);
                }
            });
        }
        else {
            con.release();
            callBack({
                result: result_1.ResultCode.OK,
                message: 'OK',
                data: lines
            });
        }
    };
    ViewingsModel.prototype.addVisit = function (userName, idpointofsail, data, annotation, idPOS, idRoute, dbName, callBack) {
        var mainThis = this;
        this.userModel.userByUserName(userName, dbName, function (result) {
            if (result.data !== undefined && result.data.length > 0) {
                var idUser = result.data[0].id;
                var pool = mainThis.controllerConnections.getUserConnection(dbName);
                pool.getConnection(function (err, con) {
                    if (err) {
                        console.log(err);
                        con.release();
                        callBack({ result: -1, message: "Error interno." });
                    }
                    else {
                        con.beginTransaction(function (err) {
                            con.query("INSERT INTO viewing  (date, idpointofsale,idUser,annotation) VALUES(NOW(),?,?,?)", [idpointofsail, idUser, annotation], function (err, result) {
                                if (err) {
                                    console.log(err);
                                    con.release();
                                    callBack({ result: -1, message: "Error interno." });
                                    //if (err.code === "ER_DUP_ENTRY") {
                                    //    con.release();
                                    //}
                                }
                                else {
                                    var idviewing = result.insertId;
                                    //TODO revisar el cao en el que no se actualiza nada.
                                    con.query("UPDATE route_pointofsale  SET idViewing = ? WHERE idPointofsale = ?  AND idRoute = ?", [idviewing, idpointofsail, idRoute], function (err, result) {
                                        if (err) {
                                            console.log(err);
                                            con.release();
                                            callBack({ result: -1, message: "Error interno." });
                                        }
                                        else {
                                            mainThis.addViewingProducts(0, 0, ["delivery", "return", "empty"], idviewing, idRoute, data, con, callBack);
                                        }
                                    });
                                }
                            });
                        });
                    }
                });
            }
            else {
                callBack({ result: -1, message: "Error con el usuario." });
            }
        });
    };
    ;
    ViewingsModel.prototype.updateVisit = function (userName, idViewing, idpointofsail, data, annotation, idPOS, idRoute, dbName, callBack) {
        var mainThis = this;
        this.userModel.userByUserName(userName, dbName, function (result) {
            if (result.data !== undefined && result.data.length > 0) {
                var idUser = result.data[0].id;
                var pool = mainThis.controllerConnections.getUserConnection(dbName);
                pool.getConnection(function (err, con) {
                    if (err) {
                        console.log(err);
                        con.release();
                        callBack({ result: -1, message: "Error interno." });
                    }
                    else {
                        con.beginTransaction(function (err) {
                            con.query("UPDATE viewing  SET date = ?, idpointofsale = ?, idUser = ?, annotation = ? WHERE idviewing = ?", [idpointofsail, idUser, annotation, idViewing], function (err, result) {
                                if (err) {
                                    console.log(err);
                                    con.release();
                                    callBack({ result: -1, message: "Error interno." });
                                    //if (err.code === "ER_DUP_ENTRY") {
                                    //    con.release();
                                    //}
                                }
                                else {
                                    var idviewing = result.insertId;
                                    //TODO revisar el cao en el que no se actualiza nada.
                                    con.query("UPDATE route_pointofsale  SET idViewing = ? WHERE idPointofsale = ?  AND idRoute = ?", [idviewing, idpointofsail, idRoute], function (err, result) {
                                        if (err) {
                                            console.log(err);
                                            con.release();
                                            callBack({ result: -1, message: "Error interno." });
                                        }
                                        else {
                                            mainThis.addViewingProducts(0, 0, ["delivery", "return", "empty"], idviewing, idRoute, data, con, callBack);
                                        }
                                    });
                                }
                            });
                        });
                    }
                });
            }
            else {
                callBack({ result: -1, message: "Error con el usuario." });
            }
        });
    };
    ;
    ViewingsModel.prototype.addViewingProducts = function (index, indexTransaction, typeTransaction, idviewing, idRoute, data, con, callBack) {
        var mainThis = this;
        con.query("INSERT INTO viewing_product(idviewing,idproduct,quantity,type) VALUES(?,?,?,?)", [idviewing, data[index].id, data[index].typeTransaction[typeTransaction[indexTransaction]], typeTransaction[indexTransaction]], function (err, resultClient) {
            if (err) {
                //if (err.code === "ER_DUP_ENTRY") {
                con.rollback(function () {
                    console.log(err);
                    con.release();
                    callBack({ result: -1, message: "Error interno. No se pudo agregar el producto de visita" });
                });
                //}
            }
            else {
                if (typeTransaction[indexTransaction] === "delivery") {
                    con.query("UPDATE route_stock  SET quantity = quantity - ? WHERE idProduct = ?  AND idRoute = ?", [data[index].typeTransaction.delivery, data[index].id, idRoute], function (err, result) {
                        if (err) {
                            con.rollback(function () {
                                console.log(err);
                                con.release();
                                callBack({ result: -1, message: "Error interno." });
                            });
                        }
                        else {
                            if (indexTransaction + 1 < typeTransaction.length) {
                                mainThis.addViewingProducts(index, indexTransaction + 1, typeTransaction, idviewing, idRoute, data, con, callBack);
                            }
                            else {
                                if (index + 1 < data.length) {
                                    mainThis.addViewingProducts(index + 1, 0, typeTransaction, idviewing, idRoute, data, con, callBack);
                                }
                                else {
                                    con.commit(function (err) {
                                        if (err) {
                                            con.rollback(function () {
                                                console.log(err);
                                                con.release();
                                                callBack({ result: -1, message: "Error interno. No se pudo agregar el producto de visita" });
                                            });
                                        }
                                        else {
                                            callBack({ result: 1, message: "OK" });
                                            con.release();
                                        }
                                    });
                                }
                            }
                        }
                    });
                }
                else {
                    if (indexTransaction + 1 < typeTransaction.length) {
                        mainThis.addViewingProducts(index, indexTransaction + 1, typeTransaction, idviewing, idRoute, data, con, callBack);
                    }
                    else {
                        if (index + 1 < data.length) {
                            mainThis.addViewingProducts(index + 1, 0, typeTransaction, idviewing, idRoute, data, con, callBack);
                        }
                        else {
                            con.commit(function (err) {
                                if (err) {
                                    con.rollback(function () {
                                        console.log(err);
                                        con.release();
                                        callBack({ result: -1, message: "Error interno. No se pudo agregar el producto de visita" });
                                    });
                                }
                                else {
                                    callBack({ result: 1, message: "OK" });
                                    con.release();
                                }
                            });
                        }
                    }
                }
            }
        });
        //}
    };
    return ViewingsModel;
}(mainModel_1.MainModel));
exports.ViewingsModel = ViewingsModel;
//# sourceMappingURL=viewingsModel.js.map