var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "good"
});

con.connect(function (err) {
  if (err) throw err;
})


router.get('/', function (req, res, next) {
  con.query("SELECT * FROM pointofsale", function (err, result) {
    if (err) throw err;
    console.log("Result: ", result);
    res.send({ result: 1, message: "OK", data: result });
  });
});


router.post("/event", function (req, res) {
  masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
    userModel.userData(req.headers['accountid'], req.headers['user'], dbName, function (users) {
      clientModel.addEvent(req.body.extension, users[0].id, req.body.comentario, req.body.assessment,
        req.body.clientId, req.body.date, req.body.phone, req.headers['accountid'], dbName, function (events) {
          res.send(events);
        });
    });
  });
});

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

module.exports = router;
