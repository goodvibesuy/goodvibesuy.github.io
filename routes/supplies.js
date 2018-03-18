var express = require('express');
var router = express.Router();
var acl = require('../motionLibJS/serverSide/acl/motionACL');
var masterDBController = require('../bd/masterConnectionsBD');
var suppliesModel = require('../models/suppliesModel');

router.get('/', function(req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                suppliesModel.supplies(dbName,function(result) {
                    res.send(result);
                });
            }
        })        
    }, function (err) {
        res.send(err);
    });
});

router.post('/', function(req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                suppliesModel.addSupply(req.body.name, req.body.unit, req.body.amount, req.body.path_image,dbName, function(result) {
                    res.send(result);
                });
            }
        })        
    }, function (err) {
        res.send(err);
    });	
});

//cambiar por get
router.post('/suppliesbyproduct', function(req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                suppliesModel.suppliesByProduct(req.body.idProduct, dbName,function(result) {
                    res.send(result);
                });
            }
        })        
    }, function (err) {
        res.send(err);
    });	
});

router.put('/:id', function(req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                suppliesModel.updateSupply(
                    req.params.id,
                    req.body.name,
                    req.body.unit,
                    req.body.amount,
                    req.body.path_image,
                    dbName,
                    function(result) {
                        res.send(result);
                    }
                );
            }
        })        
    }, function (err) {
        res.send(err);
    });	
});

router.delete('/:id', function(req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                suppliesModel.deleteSupply(req.params.id,dbName, function(result) {
                    res.send(result);
                });
            }
        })        
    }, function (err) {
        res.send(err);
    });	
});

module.exports = router;
