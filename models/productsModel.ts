import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { Product } from '../datatypes/product';
import { ProductSupply } from '../datatypes/productSupply';
import _ from 'lodash';

var masterDBController = require('../bd/masterConnectionsBD');
var clientDBController = require('../bd/clientConnectionsBD');

class ProductModel {
    constructor() {}

	get(id: number, dbName: string,callBack: (r: ResultWithData<Product>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query('SELECT * FROM product WHERE id = ?', [id], function(err: any, productResultQry: Product[]) {
                    if (!!err) {
                        // TODO: log error
                        // errorHandler.log(err);
                        con.release();
                        console.error(err);
                        callBack({result: ResultCode.Error, message: 'Error'});
                    } else {
                        con.query('SELECT * FROM product_supply WHERE idproduct = ?', [id], function(err: any, suppliesResultQry: any) {
                            con.release();
                            if (!!err) {
                                // TODO: log error
                                // errorHandler.log(err);
                                console.error(err);
                                callBack({result: ResultCode.Error, message: 'Error'});
                            } else {
                                let product: Product = productResultQry[0];
                                product.supplies = _.map(suppliesResultQry, s => {
                                    return <ProductSupply>{
                                        idProduct: (<any>s).idproduct,  // TODO: standarize
                                        idSupply:  (<any>s).idSupply,   // TODO: standarize
                                        quantity: s.quantity            // TODO: standarize
                                }});
                                callBack({result: ResultCode.OK, message: 'OK', data: product });
                            }
                        });
                    }
                });
            }
        });		
	}
    
	getAll(dbName: string,callBack: (r: ResultWithData<Product[]>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query('SELECT * FROM product', function(err: any, result: Product[]) {
                    con.release();
                    if (!!err) {
                        // TODO: log error
                        // errorHandler.log(err);
                        console.error(err);
                        callBack({result: ResultCode.Error, message: 'Error'});
                    } else {
                        callBack({result: ResultCode.OK, message: 'OK', data: result });
                    }
                });
            }
        });		
	}

	add(name: string, pathImage: string, dbName: string,callBack: (r: ResultWithData<number>) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query('INSERT INTO product  (name, path_image) VALUES(?,?)', [name, pathImage], function(
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
    
    update(id: number, name: string, path_image: string, dbName: string, callback: (r: Result) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("UPDATE product  SET name = ?, path_image = ? WHERE id = ?", [name, path_image, id], function(err: any, result: any) {
                    con.release();
                    if (!!err) {
                        // TODO: log error -> common/errorHandling.ts
                        // errorHandler.log(err);
                        console.error(err);
                        callback({
                            result: ResultCode.Error,
                            message: err.code
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
	};

    delete(productId: number,dbName:string, callback: (r: Result) => void): void {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                
                //////////////////////////////////////
                // TODO: delete product supplies ?
                //////////////////////////////////////

                con.query('DELETE FROM product WHERE id = ? ', [productId], function(err: any, result: any) {
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
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query('DELETE FROM product_supply WHERE idproduct = ? AND idSupply = ? ', [productId, supplyId], function(err: any, result: any) {
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

module.exports = new ProductModel();
