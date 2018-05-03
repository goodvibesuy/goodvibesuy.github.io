import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { Product } from '../datatypes/product';
import { ProductSupply } from '../datatypes/productSupply';
import * as _ from 'lodash';

var masterDBController = require('../bd/masterConnectionsBD');
import { MainModel } from './mainModel';
import { GroupPrice } from '../datatypes/groupPrice';


export class ProductModel extends MainModel {
    constructor() {
        super();
    }

    get(id: number, dbName: string, callBack: (r: ResultWithData<Product>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query('SELECT * FROM product WHERE id = ?', [id], function (err: any, productResultQry: Product[]) {
                    if (!!err) {
                        // TODO: log error
                        // errorHandler.log(err);
                        con.release();
                        console.error(err);
                        callBack({ result: ResultCode.Error, message: 'Error' });
                    } else {
                        con.query('SELECT * FROM product_supply WHERE idproduct = ?', [id], function (err: any, suppliesResultQry: any) {
                            con.release();
                            if (!!err) {
                                // TODO: log error
                                // errorHandler.log(err);
                                console.error(err);
                                callBack({ result: ResultCode.Error, message: 'Error' });
                            } else {
                                let product: Product = productResultQry[0];
                                product.supplies = _.map(suppliesResultQry, s => {
                                    return <ProductSupply>{
                                        idProduct: (<any>s).idproduct,  // TODO: standarize
                                        idSupply: (<any>s).idSupply,   // TODO: standarize
                                        quantity: s.quantity            // TODO: standarize
                                    }
                                });
                                callBack({ result: ResultCode.OK, message: 'OK', data: product });
                            }
                        });
                    }
                });
            }
        });
    }

    getAll(dbName: string, callBack: (r: ResultWithData<Product[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query('SELECT * FROM product ORDER BY displayOrder ASC', function (err: any, result: Product[]) {
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

    add(name: string, pathImage: string, dbName: string, callBack: (r: ResultWithData<number>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                // TODO: la base de datos no admite null -> cambiar tipo en la base de datos
                if (!pathImage) {
                    pathImage = '';
                }
                con.query('INSERT INTO product  (name, path_image, displayOrder) VALUES(?, ?, 100)', [name, pathImage], function (
                    err: any,
                    result: any
                ) {
                    con.release();
                    if (!!err) {
                        // TODO: log error
                        // errorHandler.log(err);
                        console.error(err);
                        callBack({
                            result: ResultCode.Error,
                            message: 'Error'
                        });
                    } else {
                        callBack({
                            result: ResultCode.OK,
                            message: 'OK',
                            data: result.insertId
                        });
                    }
                });
            }
        });
    }

    update(product: Product, dbName: string, callback: (r: Result) => void): void {
        var mainThis = this;
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("UPDATE product  SET name = ?, path_image = ? WHERE id = ?", [product.name, product.path_image, product.id],
                    function (err: any, result: any) {
                        if (!!err) {
                            // TODO: log error -> common/errorHandling.ts
                            // errorHandler.log(err);
                            console.error(err);
                            con.release();
                            callback({
                                result: ResultCode.Error,
                                message: err.code
                            });
                        } else {
                            mainThis.updatePricesProduct(0, product, callback, con);
                        }
                    });
            }
        });
    };


    private updatePricesProduct(index: number, product: Product, callback: (r: Result) => void, con: any): void {
        var mainThis = this;
        con.query("INSERT INTO productprice(date,amount,idProduct,idGroupCustomer) VALUES (NOW(),?,?,?)",
            [product.prices[index].amount, product.id, product.prices[index].idGroupCustomer],
            function (err: any, result: any) {
                if (!!err) {
                    // TODO: log error -> common/errorHandling.ts
                    // errorHandler.log(err);
                    console.error(err);
                    con.release();
                    callback({
                        result: ResultCode.Error,
                        message: err.code
                    });
                } else {
                    if (index + 1 < product.prices.length) {
                        mainThis.updatePricesProduct(index + 1, product, callback, con);
                    } else {
                        con.release();
                        callback({
                            result: ResultCode.OK,
                            message: 'OK'
                        });
                    }
                }
            });
    }

    public pricesByProduct(idProduct: number, dbName: string, callBack: (r: ResultWithData<GroupPrice[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
                callBack(<ResultWithData<GroupPrice[]>>{
                    result: ResultCode.Error,
                    message: err.code
                });
            } else {
                con.query("SELECT * FROM productprice WHERE id in ( SELECT MAX(id) FROM productprice WHERE idProduct = ? GROUP BY idGroupCustomer )", [idProduct],
                    function (err: any, result: any) {
                        if (!!err) {
                            // TODO: log error -> common/errorHandling.ts
                            // errorHandler.log(err);
                            console.error(err);
                            con.release();
                            callBack({
                                result: ResultCode.Error,
                                message: err.code
                            });
                        } else {
                            con.release();
                            callBack({ result: ResultCode.OK, message: 'OK', data: result });
                        }
                    }
                );
            }
        });
    }

    public priceByProductByPOS(idProduct: number, idPOS: number, dbName: string, callBack: (r: ResultWithData<any>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
                callBack({
                    result: ResultCode.Error,
                    message: err.code,
                    data: null
                });
            } else {
                con.query("SELECT * FROM customer WHERE id = ?", [idPOS],
                    function (err: any, result: any) {
                        if (!!err) {
                            // TODO: log error -> common/errorHandling.ts
                            // errorHandler.log(err);
                            console.error(err);
                            con.release();
                            callBack({
                                result: ResultCode.Error,
                                message: err.code,
                                data: null
                            });
                        } else {
                            console.log(result[0].idGroup, idProduct);
                            con.query("SELECT * FROM productprice WHERE idGroupCustomer = ? AND idProduct = ? ORDER BY date DESC LIMIT 1",
                                [result[0].idGroup, idProduct],
                                function (err: any, result2: any) {
                                    if (!!err) {
                                        // TODO: log error -> common/errorHandling.ts
                                        // errorHandler.log(err);
                                        console.error(err);
                                        con.release();
                                        callBack({
                                            result: ResultCode.Error,
                                            message: err.code,
                                            data: null
                                        });
                                    } else {
                                        con.release();
                                        callBack({ result: ResultCode.OK, message: 'OK', data: result2 });
                                    }
                                });
                        }
                    });
            }
        });
    }

    delete(productId: number, dbName: string, callback: (r: Result) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {

                //////////////////////////////////////
                // TODO: delete product supplies ?
                //////////////////////////////////////

                con.query('DELETE FROM product WHERE id = ? ', [productId], function (err: any, result: any) {
                    con.release();
                    if (!!err) {
                        // TODO: log error -> common/errorHandling.ts
                        // errorHandler.log(err);
                        let errorMessage = '';
                        if (err.code === "ER_ROW_IS_REFERENCED_2") {
                            errorMessage = "No se puede borrar el registro, porque es utilizado en otra parte del sistema.";
                        } else {
                            errorMessage = "No se puede borrar el registro.";
                        }
                        callback({
                            result: ResultCode.Error,
                            message: errorMessage
                        });
                    } else {
                        callback({
                            result: ResultCode.OK,
                            message: 'OK'
                        });
                    }
                });
            }
        });
    }

    deleteSupply(productId: number, supplyId: number, dbName: string, callback: (r: Result) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query('DELETE FROM product_supply WHERE idproduct = ? AND idSupply = ? ', [productId, supplyId], function (err: any, result: any) {
                    con.release();
                    if (!!err) {
                        // TODO: log error -> common/errorHandling.ts
                        // errorHandler.log(err);
                        let errorMessage = "No se puede borrar el registro.";
                        callback({
                            result: ResultCode.Error,
                            message: errorMessage
                        });
                    } else {
                        callback({
                            result: ResultCode.OK,
                            message: 'OK'
                        });
                    }
                });
            }
        });
    }
}
