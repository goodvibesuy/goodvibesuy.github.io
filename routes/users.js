var express = require('express');
var router = express.Router();
var acl = require('../motionLibJS/serverSide/acl/motionACL');
var masterDBController = require('../bd/masterConnectionsBD');

var userModel = require('../models/userModel');

router.get("/", function (req, res) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                userModel.users(dbName, function (result) {
                    res.send(result);
                });
            } else {
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        })
    })
});

module.exports = router;