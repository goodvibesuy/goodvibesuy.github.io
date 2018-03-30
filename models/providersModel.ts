var masterDBController = require('../bd/masterConnectionsBD');
var clientDBController = require('../bd/clientConnectionsBD');

import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { Provider } from '../datatypes/provider';

class ProvidersModel {
    constructor() {
    }

    getAll(dbName: string, callBack: (r: ResultWithData<Provider[]>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
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