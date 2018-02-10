var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  inputsModel.inputs(function (result) {
    res.send(result);
  });
});

router.post('/', function (req, res, next) {  
  con.query(
    "INSERT INTO input  (name, unity) VALUES(?,?)",
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
    "UPDATE input  SET name = ?, unity = ? WHERE id = ?",
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
    "DELETE FROM input WHERE id = ? ",
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
