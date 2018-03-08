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



/*
router.post('/', function (req, res, next) {
    con.query(
        "INSERT INTO pointofsale  (name, address, tel) VALUES(?,?,?)",
        [req.body.name, req.body.address, req.body.tel],
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

router.put('/', function (req, res, next) {
    con.query(
        "UPDATE pointofsale  SET name = ?, address = ?, tel = ? WHERE id = ?",
        [req.body.name, req.body.address, req.body.tel, req.body.id],
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

router.delete('/', function (req, res, next) {
    con.query(
        "DELETE FROM pointofsale WHERE id = ? ",
        [req.body.id],
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

module.exports = router;
