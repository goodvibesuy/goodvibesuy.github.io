import { Result, ResultWithData, ResultCode } from '../datatypes/result';
var masterDBController = require('../bd/masterConnectionsBD');
var clientDBController = require('../bd/clientConnectionsBD');

class UnitsModel {
    constructor() {
    }

    getAll(dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("SELECT * FROM unit", function (err: any, result: any) {
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

    add(name: string, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query(
                    "INSERT INTO unit  (name) VALUES(?)",
                    [name],
                    function (err: any, resultClient: any) {
                        if (err) {
                            if (err.code === "ER_DUP_ENTRY") {
                                con.release();
                            }
                        } else {
                            con.release();
                            callBack({ result: 1, message: "OK" });
                        }
                    }
                );
            }
        });
    }

    update(id: Number, name: string, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query(
                    "UPDATE unit  SET name = ? WHERE id = ?",
                    [name, id],
                    function (err: any, resultClient: any) {
                        if (err) {
                            if (err.code === "ER_DUP_ENTRY") {
                                con.release();
                            }
                        } else {
                            con.release();
                            callBack({ result: 1, message: "OK" });
                        }
                    }
                );
            }
        });
    }

    delete(id: Number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query(
                    "DELETE FROM unit WHERE id = ? ",
                    [id],
                    function (err: any, resultClient: any) {
                        if (err) {
                            if (err.code === "ER_DUP_ENTRY") {
                                con.release();
                            }
                        } else {
                            con.release();
                            callBack({ result: 1, message: "OK" });
                        }
                    }
                );
            }
        });
    }
}

module.exports = new UnitsModel();
