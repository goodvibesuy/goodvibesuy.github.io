var express = require('express');
var router = express.Router();
var productModel = require('../models/productsModel');
var acl = require('../motionLibJS/serverSide/acl/motionACL');
var masterDBController = require('../bd/masterConnectionsBD');
var clientDBController = require('../bd/clientConnectionsBD');

router.get('/', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                productModel.getAll(function (result) {
                    res.send(result);
                });
            } else {
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        });
    });
});

/*
router.get('/', function (req, res, next) {
  con.query("SELECT * FROM product", function (err, result) {
    if (err) throw err;
    console.log("Result: ", result);
    res.send({ result: 1, message: "OK", data: result });
  });
});
*/

/*
router.post('/', function (req, res, next) {
  con.query(
    "INSERT INTO product  (name, path_image) VALUES(?,?)",
    [req.body.name, req.body.path_image],
    function (err, resultClient) {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          con.release();
          res.send({ result: 0, message: "error", error: err });
        }
      } else {
        res.send({ result: 1, message: "OK", insertId: resultClient.insertId });
      }
    }
  );
});

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

router.delete('/', function (req, res, next) {  
  con.query(
    "DELETE FROM product WHERE id = ? ",
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