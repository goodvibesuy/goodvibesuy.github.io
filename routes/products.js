var express = require('express');
var router = express.Router();
var productModel = require('../models/productsModel');
var acl = require('../motionLibJS/serverSide/acl/motionACL');
var masterDBController = require('../bd/masterConnectionsBD');
var clientDBController = require('../bd/clientConnectionsBD');

router.get('/', function(req, res, next) {
	masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function(
		err,
		authError,
		response,
		dbName
	) {
		acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function(err, response) {
			if (response) {
				productModel.getAll(function(result) {
					res.send(result);
				});
			} else {
				res.send({ result: -1, message: 'messages.PERMISSION_DENIED', data: null });
			}
		});
	});
});

router.post('/', function(req, res, next) {
	masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function(
		err,
		authError,
		response,
		dbName
	) {
		acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function(err, response) {
			if (response) {
				productModel.add(req.body.name, req.body.path_image, function(result) {
					if (result.result == 1) {
						res.send({ result: 1, message: 'OK', insertId: result.insertId });
					} else {
						if (err.code === 'ER_DUP_ENTRY') {
							con.release();
							res.send({ result: 0, message: 'error', error: err });
						}
					}
				});
			} else {
				res.send({ result: -1, message: 'messages.PERMISSION_DENIED', data: null });
			}
		});
	});
});


// router.put('/', function(req, res, next) {
// 	masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function(
// 		err,
// 		authError,
// 		response,
// 		dbName
// 	) {
// 		acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function(err, response) {
// 			if (response) {
// 				productModel.add(req.body.name, req.body.path_image, function(result) {
// 					if (result.result == 1) {
// 						res.send({ result: 1, message: 'OK', insertId: result.insertId });
// 					} else {
// 						if (err.code === 'ER_DUP_ENTRY') {
// 							con.release();
// 							res.send({ result: 0, message: 'error', error: err });
// 						}
// 					}
// 				});
// 			} else {
// 				res.send({ result: -1, message: 'messages.PERMISSION_DENIED', data: null });
// 			}
// 		});
// 	});
// });

/*
router.put('/', function (req, res, next) {  
  con.query(
    "UPDATE product  SET name = ?, path_image = ? WHERE id = ?",
    [req.body.name, req.body.path_image, req.body.id],
    function (err, resultClient) {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          con.release();
        }
      } else {
        res.send({ result: 1, message: "OK" });
      }
    }
  );
});
*/

router.delete('/:id', function(req, res, next) {
	masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function(
		err,
		authError,
		response,
		dbName
	) {
		acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function(err, response) {
			if (response) {
				productModel.delete(req.params.id, function(result) {
					if (result.result == 1) {
						res.send({ result: 1, message: 'OK' });
					} else {
						if (err.code === 'ER_DUP_ENTRY') {
							con.release();
							res.send({ result: -1, message: 'error', error: err });
						}
					}
				});
			} else {
				res.send({ result: -1, message: 'messages.PERMISSION_DENIED', data: null });
			}
		});
	});
});

module.exports = router;
