var masterDBController = require('../bd/masterConnectionsBD');

import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { Provider } from '../datatypes/provider';
import { MainModel } from './mainModel';

class ProvidersModel extends MainModel{
    constructor() {
        super();
    }

    getAll(dbName: string, callBack: (r: ResultWithData<Provider[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query('SELECT * FROM provider', function (
                    err: any,
                    result: any
                ) {
                    if (err) throw err;
                    con.release();
                    callBack({ result: 1, message: 'OK', data: result });
                });
            }
        });
    };
}

module.exports = new ProvidersModel();