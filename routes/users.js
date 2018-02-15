var express = require('express');
var router = express.Router();

var userModel = require('../models/userModel');

/*
router.get("/userRol", function (req, res) {
    if (req.headers['user'] === undefined || req.headers['user'] === null ||
            req.headers['tokenid'] === undefined || req.headers['tokenid'] === null ||
            req.headers['accountid'] === undefined || req.headers['accountid'] === null) {
        res.statusCode = 401;
        res.send(null);
    } else {
        masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
            userModel.userRol(req.headers['accountid'],req.headers['user'], function (result) {
                res.send(result);
            });
        });
    }
});
*/

router.get("/", function (req, res) {
  userModel.users(function (result) {
    res.send(result);
  });
});

/*
router.get("/rols", function (req, res) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        userModel.getRols(req.headers['accountid'],function (result) {
            res.send(result);
        });
    });
});

router.post("/updatePassword", function (req, res) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        userModel.updatePass(req.headers['accountid'],req.headers['user'], req.body.password, req.body.newPassword, function (result) {
            res.send(result);
        });
    });
});

router.post("/userData", function (req, res) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        userModel.userData(req.headers['accountid'],req.headers['user'], dbName, function (users) {
            res.send(users);
            //res.send(users[0]);
        });
    });
});
*/

module.exports = router;
