var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'good'
});

con.connect(function(err) {
	if (err) throw err;
});

var suppliesModel = function() {};

suppliesModel.supplies = function(callBack) {
	con.query('SELECT * FROM supply INNER JOIN supplyPrice ON id  = idSupply ORDER BY date DESC', function(
		err,
		result
	) {
		if (err) throw err;
		callBack({ result: 1, message: 'OK', data: result });
	});
};

suppliesModel.suppliesByProduct = function(idProduct, callBack) {
	con.query(
		'SELECT * FROM supply INNER JOIN product_supply ON id  = idSupply WHERE idProduct = ?',
		[idProduct],
		function(err, result) {
			if (err) throw err;
			callBack({ result: 1, message: 'OK', data: result });
		}
	);
};

suppliesModel.addSupply = function(name, idUnit, amount, path_image, callBack) {
	con.query('INSERT INTO supply  (name, unit, path_image) VALUES(?,?,?)', [name, idUnit, path_image], function(
		err,
		result
	) {
		if (err) {
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

			con.query(
				'INSERT INTO supplyPrice  (date, amount, idSupply) VALUES(NOW(),?,?)',
				[amount, idSupply],
				function(err, result) {
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
	});
};

suppliesModel.updateSupply = function(id, name, idUnit, amount, path_image, callBack) {
	con.query('UPDATE supply  SET name = ?, unit = ?, path_image = ? WHERE id = ?', [name, idUnit, path_image, id], function(err, resultClient) {
		if (err) {
			// sea cual sea el tipo de error => siempre tengo que liberar la conexión
			// sino el cliente web queda esperando
			// con.release();
			if (err.code === 'ER_DUP_ENTRY') {
				callBack({ result: -1, message: 'Error: ER_DUP_ENTRY' });
			} else {
				callBack({ result: -1, message: 'Error: generic' });
			}
		} else {
			con.query('INSERT INTO supplyPrice  (date, amount,idSupply) VALUES(NOW(),?,?)', [amount, id], function(
				err,
				result
			) {
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
			});
		}
	});
};

suppliesModel.deleteSupply = function(id, callBack) {
	con.query('DELETE FROM supply WHERE id = ? ', [id], function(err, resultClient) {
		// siempre (debería) tengo que liberar la conexión sino el cliente web queda esperando
		// con.release();
		if (err) {
			if (err.code === 'ER_DUP_ENTRY') {
				callBack({ result: -1, message: 'Error: ER_DUP_ENTRY' });
			} else if (err.code == 'ER_ROW_IS_REFERENCED_2') {
				callBack({ result: -1, message: 'Error: ER_ROW_IS_REFERENCED_2' });
			} else {
				callBack({ result: -1, message: 'Error: generic' });
			}
		} else {
			callBack({ result: 1, message: 'OK' });
		}
	});
};

module.exports = suppliesModel;
