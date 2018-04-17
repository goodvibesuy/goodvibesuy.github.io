import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { Route } from '../datatypes/route';
import { PointOfSale } from '../datatypes/pointOfSale';
import { MainModel } from './mainModel';
import { Product } from '../datatypes/product';
var masterDBController = require('../bd/masterConnectionsBD');


export class TravelModel extends MainModel {
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
                con.query("SELECT * FROM route ORDER BY date DESC", function (err: any, result: any) {
                    con.release();
                    if (err) throw err;
                    callBack({ result: 1, message: "OK", data: result });
                });
            }
        });
    };

    add(route: Route, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var mainThis = this;
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                console.log(err);
                con.release();
                console.error(err);
                callBack({ result: -1, message: "Error interno. - No se pudo agregar la ruta." });
            } else {
                con.beginTransaction(function (err: any) {
                    //year: 2018, month: 4, day: 1
                    var d = <any>route.date;
                    var dateRoute = d.year + "-" + (d.month + 1) + "-" + d.day;
                    con.query("INSERT INTO route (name,date) VALUES (?,?)", [route.name, dateRoute], function (err: any, result: any) {
                        if (err) {
                            con.rollback(function () {
                                console.log(err);
                                con.release();
                                callBack({ result: -1, message: "Error interno. - No se pudo agregar la ruta." });
                            });
                        } else {
                            route.id = result.insertId;
                            con.query("INSERT INTO route_user(idroute,iduser) VALUES(?,?) ",
                                [route.id, route.user.id], function (err: any, result: any) {
                                    if (err) {
                                        con.rollback(function () {
                                            console.log(err);
                                            con.release();
                                            callBack({ result: -1, message: "Error interno. - No se pudo guardar el usuario de la ruta." });
                                        });
                                    } else {
                                        //mainThis.addPointsOfSale(0, route, callBack, con);
                                        mainThis.addUpdateProductStock(0, route, callBack, con);
                                    }
                                });
                        }
                    });
                });
            }
        })
    };

    private addUpdateProductStock(index: number, route: Route,
        callBack: (r: ResultWithData<any[]>) => void, con: any): void {
        var mainThis = this;
        con.query("UPDATE route_stock SET quantity = ? WHERE idRoute =? && idProduct = ?",
            [route.stock[index].quantity, route.id, route.stock[index].product.id], function (err: any, result: any) {
                if (err) {
                    con.rollback(function () {
                        console.log(err);
                        con.release();
                        callBack({ result: -1, message: "Error interno. No se pudo guardar el POS de la ruta." });
                    });
                } else {
                    if (result.affectedRows === 1) {
                        if (index + 1 < route.stock.length) {
                            mainThis.addUpdateProductStock(index + 1, route, callBack, con);
                        } else {
                            mainThis.removePointsOfSale(0, route, callBack, con);
                            //mainThis.addPointsOfSale(0, route, callBack, con);
                        }
                    } else {
                        con.query("INSERT INTO route_stock(idRoute,idProduct,quantity) VALUES(?,?,?) ",
                            [route.id, route.stock[index].product.id, route.stock[index].quantity], function (err: any, result: any) {
                                if (err) {
                                    con.rollback(function () {
                                        console.log(err);
                                        con.release();
                                        callBack({ result: -1, message: "Error interno. No se pudo guardar el POS de la ruta." });
                                    });
                                } else {
                                    if (index + 1 < route.stock.length) {
                                        mainThis.addUpdateProductStock(index + 1, route, callBack, con);
                                    } else {
                                        mainThis.removePointsOfSale(0, route, callBack, con);
                                        //mainThis.addPointsOfSale(0, route, callBack, con);
                                    }
                                }
                            });
                    }
                }
            });
    }

    update(route: Route, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var mainThis = this;
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
                callBack({ result: -1, message: "Error interno." });
            } else {
                con.beginTransaction(function (err: any) {
                    var dateOnly = (route.date.toString()).split("T");
                    con.query("UPDATE route SET  name = ?, date = ? WHERE id =?",
                        [route.name, dateOnly[0], route.id],
                        function (err: any, result: any) {
                            if (err) {
                                con.rollback(function () {
                                    console.log(err);
                                    con.release();
                                    callBack({ result: -1, message: "Error interno. - No se pudo actualizar la ruta." });
                                });
                            } else {
                                con.query("UPDATE route_user SET iduser = ? WHERE idroute = ? ",
                                    [route.user.id, route.id], function (err: any, result: any) {
                                        if (err) {
                                            con.rollback(function () {
                                                console.log(err);
                                                con.release();
                                                callBack({ result: -1, message: "Error interno.No se pudo actualizar el usuario de la ruta" });
                                            });
                                        } else {
                                            if (result.affectedRows === 0) {
                                                con.query("INSERT INTO route_user(iduser,idroute)  VALUES(?,?)",
                                                    [route.user.id, route.id], function (err: any, result: any) {
                                                        if (err) {
                                                            con.rollback(function () {
                                                                console.log(err);
                                                                con.release();
                                                                callBack({ result: -1, message: "Error interno.No se pudo actualizar el usuario de la ruta" });
                                                            });
                                                        } else {
                                                            mainThis.addUpdateProductStock(0, route, callBack, con);
                                                        }
                                                    });
                                            } else {
                                                mainThis.addUpdateProductStock(0, route, callBack, con);
                                            }
                                        }
                                    });
                            }
                        });
                });
            }
        });
    };

    removePointsOfSale(index: number, route: Route,
        callBack: (r: ResultWithData<any[]>) => void, con: any): void {
        var mainThis = this;
        if (route.pointsOfSaleToRemove.length > 0) {
            con.query("DELETE FROM route_pointofsale WHERE idRoute = ? AND idPointofsale = ? ",
                [route.id, route.pointsOfSaleToRemove[index].id], function (err: any, result: any) {
                    if (err) {
                        con.rollback(function () {
                            console.log(err);
                            con.release();
                            callBack({ result: -1, message: "Error interno. No se pudo actualizar el POS de la ruta." });
                        });
                    } else {
                        if (index + 1 < route.pointsOfSaleToRemove.length) {
                            mainThis.removePointsOfSale(index + 1, route, callBack, con);
                        } else {
                            mainThis.addPointsOfSale(0, route, callBack, con);
                        }
                    }
                });
        } else {
            mainThis.addPointsOfSale(0, route, callBack, con);
        }
    }

    addPointsOfSale(index: number, route: Route,
        callBack: (r: ResultWithData<any[]>) => void, con: any): void {
        var mainThis = this;

        if (route.pointsOfSale.length > 0) {
            con.query("UPDATE route_pointofsale SET position = ? WHERE idRoute = ? AND idPointofsale = ? ",
                [index, route.id, route.pointsOfSale[index].id], function (err: any, result1: any) {
                    if (err) {
                        con.rollback(function () {
                            console.log(err);
                            con.release();
                            callBack({ result: -1, message: "Error interno. No se pudo actualizar el POS de la ruta." });
                        });
                    } else {
                        if (result1.affectedRows === 0) {
                            con.query("INSERT  INTO route_pointofsale(idRoute,idPointofsale,position) VALUES(?,?,?) ",
                                [route.id, route.pointsOfSale[index].id, index], function (err: any, result2: any) {
                                    if (err) {
                                        con.rollback(function () {
                                            console.log(err);
                                            con.release();
                                            callBack({ result: -1, message: "Error interno. No se pudo guardar el POS de la ruta." });
                                        });
                                    } else {
                                        if (index + 1 < route.pointsOfSale.length) {
                                            mainThis.addPointsOfSale(index + 1, route, callBack, con);
                                        } else {
                                            con.commit(function (err: any) {
                                                if (err) {
                                                    con.rollback(function () {
                                                        console.log(err);
                                                        con.release();
                                                        callBack({ result: -1, message: "Error interno. No se pudo hacer commit de la ruta" });
                                                    });
                                                } else {
                                                    con.release();
                                                    callBack({ result: 1, message: "OK" });
                                                }
                                            });
                                        }
                                    }
                                });
                        } else {
                            if (index + 1 < route.pointsOfSale.length) {
                                mainThis.addPointsOfSale(index + 1, route, callBack, con);
                            } else {
                                con.commit(function (err: any) {
                                    if (err) {
                                        con.rollback(function () {
                                            console.log(err);
                                            con.release();
                                            callBack({ result: -1, message: "Error interno. No se pudo hacer commit de la ruta" });
                                        });
                                    } else {
                                        con.commit(function (err: any) {
                                            if (err) {
                                                con.rollback(function () {
                                                    console.log(err);
                                                    con.release();
                                                    callBack({ result: -1, message: "Error interno. No se pudo hacer commit de la ruta" });
                                                });
                                            } else {
                                                con.release();
                                                callBack({ result: 1, message: "OK" });
                                            }
                                        });
                                    }
                                });
                            }
                        }
                    }
                });
        } else {
            con.rollback(function () {
                con.release();
                callBack({ result: -1, message: "Error interno. No se puede agregar un POS vacio." });
            });
        }
    }

    addPointOfSale(idRoute: Number, idPointOfSale: Number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
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
        var pool = this.controllerConnections.getUserConnection(dbName);
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
        var pool = this.controllerConnections.getUserConnection(dbName);

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

    removeUser(idRoute: Number, idUser: Number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
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
        var pool = this.controllerConnections.getUserConnection(dbName);
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
        var pool = this.controllerConnections.getUserConnection(dbName);
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

    getStock(idRoute: Number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("SELECT * FROM route_stock as rs INNER JOIN product as p ON p.id = idProduct WHERE idroute = ? ORDER BY displayOrder ASC", [idRoute],
                    function (err: any, result: any) {
                        con.release();
                        if (err) throw err;
                        var stock = new Array<{ product: Product, quantity: number }>();
                        for (let i = 0; i < result.length; i++) {
                            let product = <Product>{ id: result[i].idProduct, name: result[i].name, path_image: result[i].path_image };
                            stock.push({ product: product, quantity: result[i].quantity });
                        }
                        callBack({ result: 1, message: "OK", data: stock });
                    });
            }
        });

    };



    getUers(idRoute: Number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
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


    getRoutesByUserId(userId: number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("SELECT * FROM route_user r_u INNER JOIN route r ON r.id = r_u.idroute WHERE iduser = ?", [userId],
                    function (err: any, result: any) {
                        con.release();
                        if (err) throw err;
                        callBack({ result: 1, message: "OK", data: result });
                    });
            }
        });
    }

    getRoutesByUser(user: string, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("SELECT * FROM users WHERE user_name = ?", [user],
                    function (err: any, result: any) {
                        if (err) {
                            con.release();
                            console.error(err);
                        }
                        con.query("SELECT * FROM route_user r_u INNER JOIN route r ON r.id = r_u.idroute WHERE iduser = ?", [result.id],
                            function (err: any, result: any) {
                                con.release();
                                if (err) throw err;
                                callBack({ result: 1, message: "OK", data: result });
                            });
                    });
            }
        });
    }



    delete(idRoute: Number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {

                con.beginTransaction(function (err: any) {
                    con.query("DELETE FROM route_pointofsale WHERE idRoute = ?", [idRoute], function (err: any, result: any) {
                        if (err) {
                            con.rollback(function () {
                                console.log(err);
                                con.release();
                                callBack({ result: -1, message: "Error interno. - No se pudo borrar asociacion ruta pos." });
                            });
                        } else {

                            con.query("DELETE FROM route_stock WHERE idRoute = ?", [idRoute], function (err: any, result: any) {
                                if (err) {
                                    con.rollback(function () {
                                        console.log(err);
                                        con.release();
                                        callBack({ result: -1, message: "Error interno. - No se pudo borrar asociacion ruta stock." });
                                    });
                                } else {

                                    con.query("DELETE FROM route_user WHERE idRoute = ?", [idRoute], function (err: any, result: any) {
                                        if (err) {
                                            con.rollback(function () {
                                                console.log(err);
                                                con.release();
                                                callBack({ result: -1, message: "Error interno. - No se pudo borrar asociacion ruta usuario." });
                                            });
                                        } else {

                                            con.query("DELETE FROM route WHERE id = ?", [idRoute], function (err: any, result: any) {
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
                                                    con.commit(function (err: any) {
                                                        if (err) {
                                                            con.rollback(function () {
                                                                console.log(err);
                                                                con.release();
                                                                callBack({ result: -1, message: "Error interno. No se pudo hacer commit de la ruta" });
                                                            });
                                                        } else {
                                                            con.release();
                                                            callBack({ result: 1, message: "La ruta se ha borrado correctamente" });
                                                        }
                                                    });
                                                }
                                                //if (err) throw err;
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
