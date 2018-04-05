var masterDBController = require('../bd/masterConnectionsBD');
import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { Product } from '../datatypes/product';
import {ClientConnectionsBD} from '../bd/clientConnectionsBD'
import { ControllerDBClientsConnections } from '../motionLibJS/serverSide/masterClientDBFramework/controllers/controllerDBClient';
import { MainModel } from './mainModel';

class KpisModel extends MainModel{
    
    constructor() {
        super();
    }

    suppliesPrices(supplyId: number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("SELECT * FROM supply s INNER JOIN supplyprice sp ON s.id = sp.idSupply WHERE s.id = ? ORDER BY price_date ASC ",
                    [supplyId], function (err: any, result: any) {
                        if (err) throw err;
                        con.release();
                        callBack({ result: 1, message: "OK", data: result });
                    });
            }
        });
    }

    kpiDeliveryReturnEmpty(dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {                
                con.query("SELECT type,SUM(quantity) AS quantity, name FROM `viewing_product` INNER JOIN `product` ON idproduct = id GROUP BY `idproduct`,`type`", function (err: any, result: any) {
                    if (err) throw err;
                    con.release();
                    callBack({ result: 1, message: "OK", data: result });
                });
            }
        });
    };

    sales(dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                var sumaEntregas = 0;
                con.query("SELECT SUM(quantity) as quantity FROM viewing_product WHERE type = 'delivery' AND idproduct= 1", function (err: any, result: any) {
                    if (err) throw err;
                    sumaEntregas = result[0].quantity;
                    con.query("SELECT quantity FROM viewing_product WHERE type = 'delivery' AND `idproduct`= 1 ORDER BY `idviewing` DESC LIMIT 1", function (err: any, result: any) {
                        if (err) throw err;
                        sumaEntregas -= result[0].quantity;

                        con.query("SELECT SUM(quantity) as quantity FROM viewing_product WHERE type = 'return' AND `idproduct`= 1 ", function (err: any, result: any) {
                            if (err) throw err;
                            console.log(result[0].quantity);
                            sumaEntregas -= result[0].quantity;
                            con.release();
                            callBack({ result: 1, message: "OK", data: [sumaEntregas] });
                        });
                    });
                });
            }
        });
    };
}

module.exports = new KpisModel();
