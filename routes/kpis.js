var express = require('express');
var router = express.Router();

var kpisModel = require('../models/kpisModel');

router.get('/', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                kpisModel.kpiDeliveryReturnEmpty(dbName,function (response) {
                    res.send(response);
                });
            } else {
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        });
    });
});


router.get('/sales', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                kpisModel.sales(function (response) {
                    res.send(response);
                });
            }else{
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        })
    });    
});

module.exports = router;