import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { Product } from '../datatypes/product';
var masterDBController = require('../bd/masterConnectionsBD');
var clientDBController = require('../bd/clientConnectionsBD');

class ViewingsModel {
    constructor() {
    }

    addVisit(idpointofsail:Number,data:any[],dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query(
                    "INSERT INTO viewing  (date, idpointofsail) VALUES(NOW(),?)",
                    [idpointofsail],
                    function (err:any, result:any) {
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
                                        function (err:any, resultClient:any) {
                                            if (err) {
                                                if (err.code === "ER_DUP_ENTRY") {
                                                    con.release();
                                                    callBack({result:-1, message: "Error interno."});
                                                }
                                            }                                
                                            else {
                                                //TODO: corregir
                                            }                                
                                        }
                                    );
                                });
                            }
                            callBack({ result: 1, message: "OK"});
                        }
                    }
                );
            }
        });       
    };
}

module.exports = new ViewingsModel();