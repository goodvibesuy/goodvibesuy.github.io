var express = require('express');
var router = express.Router();
var unitsModel = require('../models/unitsModel');
var acl = require('../motionLibJS/serverSide/acl/motionACL');
var masterDBController = require('../bd/masterConnectionsBD');

router.get('/', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                unitsModel.getAll(dbName, function (result) {
                    res.send(result);
                });                
            } else {
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        })
    });
});

router.post('/', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                unitsModel.add(req.body.name,dbName, function (result) {
                    res.send(result);
                });                
            } else {
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        })
    });
});

router.put('/', function (req, res, next) {  
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                unitsModel.update(req.body.id,req.body.name,dbName, function (result) {
                    res.send(result);
                });                
            } else {
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        })
    });
});

router.delete('/', function (req, res, next) {  
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                unitsModel.delete(req.body.id,dbName, function (result) {
                    res.send(result);
                });                
            } else {
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        })
    });
});

module.exports = router;
