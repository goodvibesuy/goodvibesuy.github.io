var express = require('express');
var router = express.Router();
var productModel = require('../models/productsModel');
var acl = require('../motionLibJS/serverSide/acl/motionACL');
var masterDBController = require('../bd/masterConnectionsBD');
var clientDBController = require('../bd/clientConnectionsBD');
var messages = require('../messages/messages');

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
				res.send({ result: -1, message: messages.PERMISSION_DENIED });
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
					if (result.result == 1) { // ResultCode.OK
						res.send(result);
					} else {
						// TODO: Error handling ?
						res.send(result);
					}
				});
			} else {
				res.send({ result: -1, message: messages.PERMISSION_DENIED });
			}
		});
	});
});

router.put('/:id', function(req, res, next) {
	masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function(
		err,
		authError,
		response,
		dbName
	) {
		acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function(err, response) {
			if (response) {
				productModel.update(req.params.id, req.body.name, req.body.path_image, function(result) {
					if (result.result == 1) { // ResultCode.OK
						res.send(result);
					} else {
						// TODO: Error handling ?
						res.send(result);
					}
				});
			} else {
				res.send({ result: -1, message: messages.PERMISSION_DENIED });
			}
		});
	});
});

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
					if (result.result == 1) { // ResultCode.OK
						res.send(result);
					} else {
						// TODO: Error handling ?
						res.send(result);
					}
				});
			} else {
				res.send({ result: -1, message: messages.PERMISSION_DENIED });
			}
		});
	});
});

module.exports = router;
