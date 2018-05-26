import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { Product } from '../datatypes/product';
import { UserModel } from './userModel';
import { LineViewingView } from '../datatypes/views/lineViewingView';
import { PointOfSale } from '../datatypes/pointOfSale';
import { MainModel } from './mainModel';
import { parallel } from 'async';
import *  as _ from 'lodash';

var masterDBController = require('../bd/masterConnectionsBD');

export class ViewingsModel extends MainModel {
    private userModel: UserModel;
    constructor() {
        super();
        this.userModel = new UserModel();
    }

    public getViewingById(viewingId: number, dbName: string,
        callBack: (r: ResultWithData<any[]>) => void): void {
        console.warn("Revisar porque esta puesto idProducto en 0 siempre");

        var mainThis = this;
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                console.error(err);
                con.release();
            } else {
                con.query(
                    "SELECT * FROM viewing v INNER JOIN customer pos ON v.idCustomer = pos.id WHERE idviewing = ?",
                    [viewingId],
                    function (err: any, result: any) {
                        if (err) {
                            con.release();
                            callBack({
                                result: ResultCode.Error,
                                message: err.code,
                                data: result
                            });
                        } else {
                            let pos: PointOfSale = new PointOfSale();
                            pos.address = result[0].address;
                            pos.name = result[0].name;
                            pos.tel = result[0].tel;
                            pos.id = result[0].id;
                            var line: LineViewingView = new LineViewingView(result[0].date, pos, result[0].idviewing);


                            var linesViewings: LineViewingView[] = new Array<LineViewingView>();
                            linesViewings.push(line);
                            mainThis.getProductsLine(0, linesViewings, 0, dbName, con, callBack);
                        }
                    }
                );
            }
        });
    }


    public viewingsBetween(sourceYear: number, sourceMonth: number, sourceDay: number, lastYear: number, lastMonth: number, lastDay: number,
        idPos: number, idProduct: number,
        dbName: string,
        callBack: (r: ResultWithData<any[]>) => void): void {
        var mainThis = this;
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                console.error(err);
                con.release();
            } else {
                let queryParameters: any[] = new Array();
                let filters = "";
                let haveDate: boolean = (Number(sourceYear) !== 0 && Number(sourceMonth) !== 0 && Number(sourceDay) !== 0);

                if (haveDate) {
                    filters += "v.date > ? AND v.date < ?";
                    queryParameters.push(sourceYear + "-" + sourceMonth + "-" + sourceDay);
                    queryParameters.push(lastYear + "-" + lastMonth + "-" + lastDay + " 23:59");
                }

                if (idPos !== 0) {
                    if (haveDate) {
                        filters += "AND pos.id = ?";
                    } else {
                        filters += " pos.id = ?";
                    }
                    queryParameters.push(idPos);
                }

                if (queryParameters.length > 0) {
                    filters = " WHERE " + filters;
                }

                con.query(
                    "SELECT * FROM viewing v INNER JOIN customer pos ON v.idCustomer = pos.id " + filters + " ORDER BY v.date DESC",
                    queryParameters,
                    function (err: any, result: any) {
                        if (err) {
                            console.log(err);
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
                                    pos.idGroup = viewings[i].idGroup;
                                    var line: LineViewingView = new LineViewingView(viewings[i].date, pos, viewings[i].idviewing);
                                    linesViewings.push(line);
                                }
                            }
                            mainThis.getProductsLine(0, linesViewings, idProduct, dbName, con, callBack);
                        }
                    }
                );
            }
        });
    };

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


    public viewingsByRoute(idRoute: number, dbName: string,
        callBack: (r: ResultWithData<any[]>) => void): void {
        var mainThis = this;
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                console.error(err);
                con.release();
            } else {
                con.query(
                    "SELECT * FROM route_customer rc INNER JOIN viewing v ON rc.idViewing = v.idviewing WHERE idRoute = ? ",
                    [idRoute],
                    function (err: any, result: any) {
                        con.release();
                        if (err) {
                            callBack({
                                result: ResultCode.Error,
                                message: err.code,
                                data: result
                            });
                        } else {
                            callBack({
                                result: ResultCode.OK,
                                message: 'OK',
                                data: result
                            });
                        }
                    }
                );
            }
        });
    };

    public viewingProductTypes(dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var mainThis = this;
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                console.error(err);
                con.release();
            } else {
                con.query(
                    "SELECT * FROM viewing_product_type",
                    function (err: any, result: any) {
                        if (err) {
                            con.release();
                            callBack({
                                result: ResultCode.Error,
                                message: err.code,
                                data: result
                            });
                        } else {
                            con.release();
                            callBack({
                                result: ResultCode.OK,
                                message: 'OK',
                                data: result
                            });
                        }
                    }
                );
            }
        });
    };

    public viewingByRouteAndPOS(idRoute: number, idPointofsale: number, dbName: string,
        callBack: (r: ResultWithData<any[]>) => void): void {
        var mainThis = this;
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                console.error(err);
                con.release();
            } else {
                con.query(
                    "SELECT idViewing FROM route_customer WHERE idRoute = ? AND idCustomer = ?",
                    [idRoute, idPointofsale],
                    function (err: any, result: any) {
                        if (err) {
                            con.release();
                            callBack({
                                result: ResultCode.Error,
                                message: err.code,
                                data: result
                            });
                        } else {
                            con.release();
                            callBack({
                                result: ResultCode.OK,
                                message: 'OK',
                                data: result
                            });
                        }
                    }
                );
            }
        });
    };

    private getProductsLine(index: number, lines: Array<LineViewingView>, idProduct: number,
        dbName: string, con: any,
        callBack: (r: ResultWithData<any[]>) => void): void {
        var mainThis = this;
        if (index < lines.length) {
            let queryParameters: any[] = new Array();
            queryParameters.push(lines[index].getIdViewing());
            let filters = "";
            if (idProduct !== 0) {
                filters = "AND idproduct = ?";
                queryParameters.push(idProduct);
            }

            con.query(
                "SELECT * FROM viewing_product WHERE idviewing = ? " + filters, queryParameters,
                function (err: any, result: any) {
                    if (err) {
                        con.release();
                        callBack({
                            result: ResultCode.Error,
                            message: err.code,
                            data: result
                        });
                    } else {
                        if (result.length > 0) {
                            for (let i = 0; i < result.length; i++) {
                                lines[index].addProduct(result[i]);
                            }
                        }
                        mainThis.getProductsLine(index + 1, lines, idProduct, dbName, con, callBack);
                    }
                });
        } else {
            con.release();
            callBack({
                result: ResultCode.OK,
                message: 'OK',
                data: lines
            });
        }
    }

    public addVisit(userName: string, idpointofsail: Number, data: any[], annotation: string, idPOS: number, idRoute: number,
        dbName: string, callBack: (r: Result) => void): void {
        var mainThis = this;
        this.userModel.userByUserName(userName, dbName, function (result: ResultWithData<any[]>) {
            if (result.data !== undefined && result.data.length > 0) {
                var idUser = result.data[0].id;
                var pool = mainThis.controllerConnections.getUserConnection(dbName);
                pool.getConnection(function (err: any, con: any) {
                    if (err) {
                        console.log(err);
                        con.release();
                        callBack({ result: -1, message: "Error interno." });
                    } else {
                        con.beginTransaction(function (err: any) {
                            con.query(
                                "INSERT INTO viewing  (date, idCustomer,idUser,annotation) VALUES(NOW(),?,?,?)",
                                [idpointofsail, idUser, annotation],
                                function (err: any, result: any) {
                                    if (err) {
                                        console.log(err);
                                        con.release();
                                        callBack({ result: -1, message: "Error interno." });
                                        //if (err.code === "ER_DUP_ENTRY") {
                                        //    con.release();
                                        //}
                                    } else {
                                        var idviewing = result.insertId;
                                        //TODO revisar el cao en el que no se actualiza nada.
                                        con.query(
                                            "UPDATE route_customer  SET idViewing = ? WHERE idCustomer = ?  AND idRoute = ?",
                                            [idviewing, idpointofsail, idRoute],
                                            function (err: any, result: any) {
                                                if (err) {
                                                    console.log(err);
                                                    con.release();
                                                    callBack({ result: -1, message: "Error interno." });
                                                } else {
                                                    mainThis.addViewingProducts(0, 0, ["delivery", "return", "empty"], idviewing, idRoute, data, con, callBack);
                                                }
                                            }
                                        );
                                    }
                                }
                            );
                        });
                    }
                });
            } else {
                callBack({ result: -1, message: "Error con el usuario." });
            }
        });
    };


    public updateVisit(userName: string, idViewing: number, idpointofsail: number, data: any[], annotation: string, idPOS: number, idRoute: number,
        dbName: string, callBack: (r: Result) => void): void {
        var mainThis = this;
        this.userModel.userByUserName(userName, dbName, function (result: ResultWithData<any[]>) {
            if (result.data !== undefined && result.data.length > 0) {
                var idUser = result.data[0].id;
                var pool = mainThis.controllerConnections.getUserConnection(dbName);
                pool.getConnection(function (err: any, con: any) {
                    if (err) {
                        console.log(err);
                        con.release();
                        callBack({ result: -1, message: "Error interno." });
                    } else {
                        con.beginTransaction(function (err: any) {
                            con.query(
                                "UPDATE viewing  SET date = ?, idCustomer = ?, idUser = ?, annotation = ? WHERE idviewing = ?",
                                [idpointofsail, idUser, annotation, idViewing],
                                function (err: any, result: any) {
                                    if (err) {
                                        console.log(err);
                                        con.release();
                                        callBack({ result: -1, message: "Error interno." });
                                        //if (err.code === "ER_DUP_ENTRY") {
                                        //    con.release();
                                        //}
                                    } else {
                                        var idviewing = result.insertId;
                                        //TODO revisar el cao en el que no se actualiza nada.
                                        con.query(
                                            "UPDATE route_customer  SET idViewing = ? WHERE idCustomer = ?  AND idRoute = ?",
                                            [idviewing, idpointofsail, idRoute],
                                            function (err: any, result: any) {
                                                if (err) {
                                                    console.log(err);
                                                    con.release();
                                                    callBack({ result: -1, message: "Error interno." });
                                                } else {
                                                    mainThis.addViewingProducts(0, 0, ["delivery", "return", "empty"], idviewing, idRoute, data, con, callBack);
                                                }
                                            }
                                        );
                                    }
                                }
                            );
                        });
                    }
                });
            } else {
                callBack({ result: -1, message: "Error con el usuario." });
            }
        });
    };

    //TODO Sacar harcode de type
    public addViewingProducts(index: number, indexTransaction: number, typeTransaction: string[], idviewing: number, idRoute: number,
        data: any[], con: any, callBack: (r: Result) => void): void {
        var mainThis = this;
        var viewingProductTypes: Map<string, number> = new Map<string, number>();
        viewingProductTypes.set("delivery", 1);
        viewingProductTypes.set("return", 2);
        viewingProductTypes.set("empty", 3);

        var viewingProductType = typeTransaction[indexTransaction];
        console.log(viewingProductTypes.get(viewingProductType));
        con.query(
            "INSERT INTO viewing_product(idviewing,idproduct,quantity,type,idviewingProductType) VALUES(?,?,?,?,?)",
            [idviewing, data[index].id, data[index].typeTransaction[typeTransaction[indexTransaction]],
                viewingProductType, viewingProductTypes.get(viewingProductType)],
            function (err: any, resultClient: any) {
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
                        con.query(
                            "UPDATE route_stock  SET quantity = quantity - ? WHERE idProduct = ?  AND idRoute = ?",
                            [data[index].typeTransaction.delivery, data[index].id, idRoute],
                            function (err: any, result: any) {
                                if (err) {
                                    con.rollback(function () {
                                        console.log(err);
                                        con.release();
                                        callBack({ result: -1, message: "Error interno." });
                                    });
                                } else {
                                    if (indexTransaction + 1 < typeTransaction.length) {
                                        mainThis.addViewingProducts(index, indexTransaction + 1, typeTransaction, idviewing, idRoute, data, con, callBack);
                                    } else {
                                        if (index + 1 < data.length) {
                                            mainThis.addViewingProducts(index + 1, 0, typeTransaction, idviewing, idRoute, data, con, callBack);
                                        } else {
                                            con.commit(function (err: any) {
                                                if (err) {
                                                    con.rollback(function () {
                                                        console.log(err);
                                                        con.release();
                                                        callBack({ result: -1, message: "Error interno. No se pudo agregar el producto de visita" });
                                                    });
                                                } else {
                                                    callBack({ result: 1, message: "OK" });
                                                    con.release();
                                                }
                                            });
                                        }

                                    }
                                }
                            }
                        );

                    } else {
                        if (indexTransaction + 1 < typeTransaction.length) {
                            mainThis.addViewingProducts(index, indexTransaction + 1, typeTransaction, idviewing, idRoute, data, con, callBack);
                        } else {
                            if (index + 1 < data.length) {
                                mainThis.addViewingProducts(index + 1, 0, typeTransaction, idviewing, idRoute, data, con, callBack);
                            } else {
                                con.commit(function (err: any) {
                                    if (err) {
                                        con.rollback(function () {
                                            console.log(err);
                                            con.release();
                                            callBack({ result: -1, message: "Error interno. No se pudo agregar el producto de visita" });
                                        });
                                    } else {
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
    }

    public deleteViewing(idViewing: number, dbName: string, callBack: (r: Result) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (!!err) {
                con.release();
                console.error(err);
            } else {

                con.beginTransaction(function (err: any) {

                    // obtener id de ruta
                    con.query("SELECT id, name, score FROM viewing_product_type", [], (err: any, viewingTypes: [{ id: number, name: string, score: number }]) => {
                        if (!!err) {
                            con.rollback(function () {
                                console.log(err);
                                con.release();
                                callBack({ result: -1, message: "Error del sistema al obtener viewing_product_type." });
                            });
                        } else {

                            // obtener id de ruta
                            con.query("SELECT idRoute FROM route_customer WHERE idViewing = ?", [idViewing], (err: any, resultRouteCustomer: any) => {
                                if (!!err) {
                                    con.rollback(function () {
                                        console.log(err);
                                        con.release();
                                        callBack({ result: -1, message: "Error del sistema al eliminar visita del recorrido." });
                                    });
                                } else {
                                    // TODO: validar que hay al menos un elemento en el resultado
                                    var idRoute: number = resultRouteCustomer[0].idRoute;

                                    // incrementar stock del recorrido segun viewing_product
                                    con.query("SELECT idviewing, idproduct, quantity, idviewingProductType FROM viewing_product WHERE idviewing = ?", [idViewing], (err: any, result: any) => {
                                        if (!!err) {
                                            con.rollback(function () {
                                                console.log(err);
                                                con.release();
                                                callBack({ result: -1, message: "Error del sistema al eliminar productos de la visita." });
                                            });
                                        } else {
                                            // filtrar solo aquellas entregas que fueron positivas (quantity > 0 y score > 0)
                                            var querysFn = _.map(_.filter(result, r => r.quantity > 0 && viewingTypes.find(t => t.id == r.idviewingProductType)!.score > 0),
                                                (viewingProduct: any): ((callback: any) => void) => {
                                                    return (callback) => {
                                                        const QRY_ROUTE_STOCK = "UPDATE route_stock SET quantity = quantity + ? WHERE idRoute = ? AND idProduct = ?";
                                                        con.query(QRY_ROUTE_STOCK, [viewingProduct.quantity, idRoute, viewingProduct.idproduct], (err: any, result: any) => {
                                                            if (!!err) {
                                                                console.log(err);
                                                                con.release();
                                                                callback({ result: -1, message: "Error del sistema al eliminar productos de la visita." }, null);
                                                            } else {
                                                                callback(null, { result: 1, message: "OK" });
                                                            }
                                                        });
                                                    }
                                                }
                                            );

                                            parallel(querysFn, (err: any, success: any) => {
                                                // eliminar productos de la visita: viewing_product
                                                con.query("DELETE FROM viewing_product WHERE idviewing = ?", [idViewing], (err: any, result: any) => {
                                                    if (!!err) {
                                                        con.rollback(function () {
                                                            console.log(err);
                                                            con.release();
                                                            callBack({ result: -1, message: "Error del sistema al eliminar productos de la visita." });
                                                        });
                                                    } else {

                                                        // eliminar visita del recorrido: route_customer
                                                        con.query("UPDATE route_customer  SET idViewing = NULL WHERE idViewing = ?", [idViewing], (err: any, result: any) => {
                                                            if (!!err) {
                                                                con.rollback(function () {
                                                                    console.log(err);
                                                                    con.release();
                                                                    callBack({ result: -1, message: "Error del sistema al eliminar visita del recorrido." });
                                                                });
                                                            } else {

                                                                // eliminar visita: viewing
                                                                con.query("DELETE FROM viewing WHERE idViewing = ?", [idViewing], (err: any, result: any) => {
                                                                    if (!!err) {
                                                                        con.rollback(function () {
                                                                            console.log(err);
                                                                            con.release();
                                                                            callBack({ result: -1, message: "Error del sistema al eliminar visita." });
                                                                        });
                                                                    } else {

                                                                        con.commit(function (err: any) {
                                                                            if (!!err) {
                                                                                con.rollback(function () {
                                                                                    console.log(err);
                                                                                    con.release();
                                                                                    callBack({ result: -1, message: "Error interno. No se pudo confirmar la eliminación de la visita" });
                                                                                });
                                                                            } else {
                                                                                con.release();
                                                                                callBack({ result: 1, message: "OK" });
                                                                            }
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
                            });
                        }
                    });
                });
            }
        });
    };
}
