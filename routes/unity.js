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
  con.query("SELECT * FROM unity", function (err, result) {
    if (err) throw err;
    console.log("Result: ", result);
    res.send({ result: 1, message: "OK", data: result });
  });
});

router.post('/', function (req, res, next) {  
  con.query(
    "INSERT INTO unity  (name, unity) VALUES(?,?)",
    [req.body.name, req.body.unity],
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
    "UPDATE unity  SET name = ?, unity = ? WHERE id = ?",
    [req.body.name, req.body.unity, req.body.id],
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
    "DELETE FROM unity WHERE id = ? ",
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
