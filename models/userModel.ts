import { Result, ResultWithData, ResultCode } from '../datatypes/result';
var masterDBController = require('../bd/masterConnectionsBD');
var clientDBController = require('../bd/clientConnectionsBD');

class UserModel {
    constructor() {
    }

    users(dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("SELECT * FROM users ", function (err:any, result:any) {
                    if (err) {
                        console.log(err);
                    } else {
                        if (err) throw err;
                        callBack({ result: 1, message: "OK", data: result });
                    }
                });
            }
        });       
    };
}

module.exports = new UserModel();