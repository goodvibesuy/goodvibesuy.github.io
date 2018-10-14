import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { MainModel } from './mainModel';
var masterDBController = require('../bd/masterConnectionsBD');


export class SuppliesModel extends MainModel {
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
                con.query('SELECT * FROM supply', function (err: any, result: any) {
                    if (err) throw err;
                    con.release();
                    callBack({ result: 1, message: 'OK', data: result });
                });
            }
        });
    }

    supplies(dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query('SELECT * FROM supply INNER JOIN supplyPrice ON id  = idSupply ORDER BY date DESC', function (
                    err: any,
                    result: any
                ) {
                    if (err) throw err;
                    con.release();
                    callBack({ result: 1, message: 'OK', data: result });
                });
            }
        });
    }

    suppliesByProduct(idProduct: Number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query(
                    'SELECT * FROM supply INNER JOIN product_supply ON id  = idSupply WHERE idProduct = ?',
                    [idProduct],
                    function (err: any, result: any) {
                        if (err) throw err;
                        con.release();
                        callBack({ result: 1, message: 'OK', data: result });
                    }
                );
            }
        });
    }

    addSupply(
        name: string,
        idUnit: Number,
        amount: Number,
        price_date: string,
        idProvider: Number,
        path_image: string,
        dbName: string,
        callBack: (r: ResultWithData<any[]>) => void
    ): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query(
                    'INSERT INTO supply  (name, unit, path_image) VALUES(?,?,?)',
                    [name, idUnit, path_image],
                    function (err: any, result: any) {
                        if (err) {
                            con.release();
                            // sea cual sea el tipo de error => siempre (debería) tengo que liberar la conexión
                            // sino el cliente web queda esperando
                            // con.release();
                            if (err.code === 'ER_DUP_ENTRY') {
                                callBack({ result: -1, message: 'Error: ER_DUP_ENTRY' });
                            } else {
                                callBack({ result: -1, message: 'Error: generic' });
                            }
                        } else {
                            var idSupply = result.insertId;
                            var priceDateFormat = new Date(price_date).toISOString().slice(0, 19).replace('T', ' ');
                            con.query(
                                'INSERT INTO supplyPrice  (date, price_date, amount, idSupply, idProvider) VALUES(NOW(),?,?,?,?)',
                                [priceDateFormat, amount, idSupply, idProvider],
                                function (err: any, result: any) {
                                    con.release();
                                    // sea cual sea el tipo de error => siempre tengo que liberar la conexión
                                    // sino el cliente web queda esperando
                                    // con.release();
                                    if (err) {
                                        if (err.code === 'ER_DUP_ENTRY') {
                                            callBack({ result: -1, message: 'Error: ER_DUP_ENTRY' });
                                        } else {
                                            callBack({ result: -1, message: 'Error: generic' });
                                        }
                                    } else {
                                        callBack({ result: 1, message: 'OK' });
                                    }
                                }
                            );
                        }
                    }
                );
            }
        });
    }

    getSupliesPurchases(dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query(
                    'SELECT * FROM supply_purchase',                    
                    function (err: any, resultPurchases: any) {
                        if (err) {
                            con.release();
                            if (err.code === 'ER_DUP_ENTRY') {
                                callBack({ result: -1, message: 'Error: ER_DUP_ENTRY' });
                            } else {
                                callBack({ result: -1, message: 'Error: generic' });
                            }
                        } else {
                            callBack({ result: 1, message: 'OK', data:resultPurchases });
                        }
                    }
                )
            }
        });
    }

    getLastPurchasesBySupply(id:number,dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query(
                    'SELECT * FROM supply_purchase WHERE idSupply = ?',[id],                    
                    function (err: any, resultPurchases: any) {
                        if (err) {
                            con.release();
                            if (err.code === 'ER_DUP_ENTRY') {
                                callBack({ result: -1, message: 'Error: ER_DUP_ENTRY' });
                            } else {
                                callBack({ result: -1, message: 'Error: generic' });
                            }
                        } else {
                            callBack({ result: 1, message: 'OK', data:resultPurchases });
                        }
                    }
                )
            }
        });
    }

    addSupplyPurchase(idSupply: number, idProvider: number, purchaseAmount: number,
        supplyUnit: number, numberOfUnit: number, purchaseDate: Date,
        dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {

        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query(
                    'INSERT INTO supply_purchase  (idSupply, idProvider, purchaseAmount,supplyUnit, numberOfUnit, purchaseDate, date) VALUES(?,?,?,?,?,?,NOW())',
                    [idSupply,idProvider, purchaseAmount,supplyUnit,numberOfUnit, purchaseDate],
                    function (err: any, resultClient: any) {
                        if (err) {
                            con.release();
                            // sea cual sea el tipo de error => siempre tengo que liberar la conexión
                            // sino el cliente web queda esperando
                            // con.release();
                            if (err.code === 'ER_DUP_ENTRY') {
                                callBack({ result: -1, message: 'Error: ER_DUP_ENTRY' });
                            } else {
                                callBack({ result: -1, message: 'Error: generic' });
                            }
                        } else {
                            callBack({ result: 1, message: 'OK' });
                        }
                    }
                )
            }
        });
    }

    updateSupply(
        id: Number,
        name: Number,
        idUnit: Number,
        amount: Number,
        price_date: string,
        idProvider: Number,
        path_image: string,
        dbName: string,
        callBack: (r: ResultWithData<any[]>) => void
    ): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query(
                    'UPDATE supply  SET name = ?, unit = ?, path_image = ? WHERE id = ?',
                    [name, idUnit, path_image, id],
                    function (err: any, resultClient: any) {
                        if (err) {
                            con.release();
                            // sea cual sea el tipo de error => siempre tengo que liberar la conexión
                            // sino el cliente web queda esperando
                            // con.release();
                            if (err.code === 'ER_DUP_ENTRY') {
                                callBack({ result: -1, message: 'Error: ER_DUP_ENTRY' });
                            } else {
                                callBack({ result: -1, message: 'Error: generic' });
                            }
                        } else {
                            var priceDateFormat = new Date(price_date).toISOString().slice(0, 19).replace('T', ' ');
                            con.query(
                                'INSERT INTO supplyPrice  (date, price_date, amount, idSupply, idProvider) VALUES(NOW(),?,?,?,?)',
                                [priceDateFormat, amount, id, idProvider],
                                function (err: any, result: any) {
                                    con.release();
                                    // sea cual sea el tipo de error => siempre tengo que liberar la conexión
                                    // sino el cliente web queda esperando
                                    // con.release();
                                    if (err) {
                                        if (err.code === 'ER_DUP_ENTRY') {
                                            callBack({ result: -1, message: 'Error: ER_DUP_ENTRY' });
                                        } else {
                                            callBack({ result: -1, message: 'Error: generic' });
                                        }
                                    } else {
                                        callBack({ result: 1, message: 'OK' });
                                    }
                                }
                            );
                        }
                    }
                );
            }
        });
    }

    deleteSupply(id: Number, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection((err: any, con: any) => {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query('DELETE FROM supply WHERE id = ? ', [id], (err: any, resultClient: any) => {
                    con.release();
                    if (!!err) {
                        callBack(super.formatError(err));
                    } else {
                        callBack({
                            result: ResultCode.OK,
                            message: 'OK'
                        });
                    }
                });
            }
        });
    }
}
