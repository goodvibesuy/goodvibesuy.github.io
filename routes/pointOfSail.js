var express = require('express');
var router = express.Router();
var pointsOfSaleModel = require('../models/pointsOfSaleModel');
var acl = require('../motionLibJS/serverSide/acl/motionACL');
var masterDBController = require('../bd/masterConnectionsBD');
var clientDBController = require('../bd/clientConnectionsBD');

router.get('/', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                pointsOfSaleModel.getAll(function (result) {
                    res.send(result);
                });                
            } else {
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        });
    });
});

router.get('/getPointOfSale/:idPOS', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                pointsOfSaleModel.getPointOfSale(req.params.idPOS,function (result) {
                    res.send(result);
                });
            } else {
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        });
    });
});

router.get('/getFilteredByName/:filterName', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                pointsOfSaleModel.getFilteredByName(req.params.filterName,function (result) {
                    res.send(result);
                });
            } else {
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        });
    });
});

router.delete('/:id', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                pointsOfSaleModel.delete(req.params.id,function (result) {
                    res.send(result);
                });
            } else {
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        });
    });    
});


router.post('/', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                pointsOfSaleModel.add(req.body.name,req.body.address, req.body.tel,req.body.coords,function (result) {
                    res.send(result);
                });
            } else {
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        });
    });
});

router.put('/', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                pointsOfSaleModel.update(req.body.id,req.body.name,req.body.address, req.body.tel,req.body.coord,function (result) {
                    res.send(result);
                });
            } else {
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        });
    });    
});

module.exports = router;
