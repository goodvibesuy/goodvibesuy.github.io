import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { Product } from '../datatypes/product';
import { UserModel } from './userModel';
import { LineViewingView } from '../datatypes/views/lineViewingView';
import { PointOfSale } from '../datatypes/pointOfSale';
import { MainModel } from './mainModel';

var masterDBController = require('../bd/masterConnectionsBD');

export class ViewingsModel extends MainModel {
    private userModel: UserModel;
    constructor() {
        super();
        this.userModel = new UserModel();
    }

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

    private getProductsLine(index: number, lines: Array<LineViewingView>, dbName: string, con: any,
        callBack: (r: ResultWithData<any[]>) => void): void {
        var mainThis = this;
        if (index < lines.length) {
            con.query(
                "SELECT * FROM viewing_product WHERE idviewing = ?",
                [lines[index].getIdViewing()],
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
                        mainThis.getProductsLine(index + 1, lines, dbName, con, callBack);
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


    public addVisit(userName: string, idpointofsail: Number, data: any[], annotation: string, dbName: string,
        callBack: (r: Result) => void): void {
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
                        con.query(
                            "INSERT INTO viewing  (date, idpointofsale,idUser,annotation) VALUES(NOW(),?,?,?)",
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
                                    for (var i = 0; i < data.length; i++) {
                                        Object.keys(data[i].typeTransaction).forEach(function (key, index) {
                                            con.query(
                                                "INSERT INTO viewing_product(idviewing,idproduct,quantity,type) VALUES(?,?,?,?)",
                                                [idviewing, data[i].id, data[i].typeTransaction[key], key],
                                                function (err: any, resultClient: any) {
                                                    if (err) {
                                                        //if (err.code === "ER_DUP_ENTRY") {
                                                        console.log(err);
                                                        con.release();
                                                        callBack({ result: -1, message: "Error interno." });
                                                        //}
                                                    }
                                                    else {
                                                        //TODO: corregir
                                                    }
                                                }
                                            );
                                        });
                                    }
                                    con.release();
                                    callBack({ result: 1, message: "OK" });
                                }
                            }
                        );
                    }
                });
            } else {
                callBack({ result: -1, message: "Error con el usuario." });
            }
        });
    };
}