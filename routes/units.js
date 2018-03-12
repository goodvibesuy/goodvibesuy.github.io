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
  con.query("SELECT * FROM unit", function (err, result) {
    if (err) throw err;
    console.log("Result: ", result);
    res.send({ result: 1, message: "OK", data: result });
  });
});

router.post('/', function (req, res, next) {  
  con.query(
    "INSERT INTO unit  (name, unit) VALUES(?,?)",
    [req.body.name, req.body.unit],
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
    "UPDATE unit  SET name = ?, unit = ? WHERE id = ?",
    [req.body.name, req.body.unit, req.body.id],
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
    "DELETE FROM unit WHERE id = ? ",
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
