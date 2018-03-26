import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { Product } from '../datatypes/product';
import { UserModel } from './userModel';

var masterDBController = require('../bd/masterConnectionsBD');
var clientDBController = require('../bd/clientConnectionsBD');

class ViewingsModel {
    private userModel: UserModel;
    constructor() {
        this.userModel = new UserModel();
    }

    addVisit(user: string, idpointofsail: Number, data: any[], dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        this.userModel.userByUserName(user, dbName, function (result: ResultWithData<any[]>) {
            if (result.data !== undefined && result.data.length > 0) {
                var idUser = result.data[0].id;
                var pool = clientDBController.getUserConnection(dbName);
                pool.getConnection(function (err: any, con: any) {
                    if (err) {
                        console.error(err);
                        con.release();
                    } else {
                        con.query(
                            "INSERT INTO viewing  (date, idpointofsail,idUser) VALUES(NOW(),?,?)",
                            [idpointofsail,idUser],
                            function (err: any, result: any) {
                                if (err) {
                                    if (err.code === "ER_DUP_ENTRY") {
                                        con.release();
                                    }
                                } else {
                                    var idviewing = result.insertId;
                                    for (var i = 0; i < data.length; i++) {
                                        Object.keys(data[i].typeTransaction).forEach(function (key, index) {
                                            con.query(
                                                "INSERT INTO viewing_product(idviewing,idproduct,quantity,type) VALUES(?,?,?,?)",
                                                [idviewing, data[i].id, data[i].typeTransaction[key], key],
                                                function (err: any, resultClient: any) {
                                                    if (err) {
                                                        if (err.code === "ER_DUP_ENTRY") {
                                                            con.release();
                                                            callBack({ result: -1, message: "Error interno." });
                                                        }
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
            }
        });
    };
}

module.exports = new ViewingsModel();