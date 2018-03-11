import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { Product } from '../datatypes/product';

var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'good'
});

con.connect(function(err: any) {
	if (err) throw err;
});

class ProductModel {
	constructor() {}

	getAll(callBack: (r: ResultWithData<Product[]>) => void): void {
		con.query('SELECT * FROM product', function(err: any, result: Product[]) {
			if (!!err) {
				// TODO: log error
				// errorHandler.log(err);
				callBack({
					result: ResultCode.Error,
					message: 'Error'
				});
			} else {
				callBack({
					result: ResultCode.OK,
					message: 'OK',
					data: result
				});
			}
		});
	}

	add(name: string, pathImage: string, callBack: (r: ResultWithData<number>) => void): void {
		con.query('INSERT INTO product  (name, path_image) VALUES(?,?)', [name, pathImage], function(
			err: any,
			result: any
		) {
			if (!!err) {
				// TODO: log error
				// errorHandler.log(err);
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

	delete(productId: number, callback: (r: Result) => void): void {
		con.query('DELETE FROM product WHERE id = ? ', [productId], function(err: any, result: any) {
			if (!!err) {
				// TODO: log error
				// errorHandler.log(err);
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
}

module.exports = new ProductModel();
