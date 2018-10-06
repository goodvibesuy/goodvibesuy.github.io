import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { MainModel } from './mainModel';
import { parallel } from 'async';
import *  as _ from 'lodash';

export class StockModel extends MainModel {
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
                con.query('SELECT * FROM product_stock ', function (err: any, result: any[]) {
                    con.release();
                    if (!!err) {
                        // TODO: log error
                        // errorHandler.log(err);
                        console.error(err);
                        callBack({ result: ResultCode.Error, message: 'Error' });
                    } else {
                        callBack({ result: ResultCode.OK, message: 'OK', data: result });
                    }
                });
            }
        });
    }

    /**
     * 
     * @param idProduct 
     * @param amount - si es positivo aumenta el stock sino resta
     * @param dbName 
     * @param callBack 
     */
    updateStock(idProduct:number,amount:number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query('UPDATE product_stock SET amount = amount + ? WHERE idProduct = ?',[amount,idProduct], 
                            function (err: any, result: any[]) {
                    con.release();
                    if (!!err) {
                        // TODO: log error
                        // errorHandler.log(err);
                        console.error(err);
                        callBack({ result: ResultCode.Error, message: 'Error' });
                    } else {
                        callBack({ result: ResultCode.OK, message: 'OK', data: result });
                    }
                });
            }
        });
    }

}
