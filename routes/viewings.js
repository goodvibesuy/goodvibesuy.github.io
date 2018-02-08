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
  con.query("SELECT * FROM product", function (err, result) {
    if (err) throw err;
    console.log("Result: ", result);
    res.send({ result: 1, message: "OK", data: result });
  });
});

router.post('/', function (req, res, next) {
  //console.log(req.body.data);
  var data = req.body.data;
  var idpointofsail = 1;
  con.query(
    "INSERT INTO viewing  (date, idpointofsail) VALUES(NOW(),?)",
    [idpointofsail],
    function (err, result) {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          con.release();
        }
      } else {
        console.log(result);
        console.log(data);

        var idviewing = result.insertId;
        console.log("****");
        console.log(data.length);
        for(var i = 0 ; i < data.length ; i++){
          con.query(
            "INSERT INTO viewing_product(idviewing,idproduct,quantity,type) VALUES(?,?,?,?)",
            [idviewing, data[i].id, data[i].delivery, 'delivery'],
            function (err, resultClient) {
              if (err) {
                if (err.code === "ER_DUP_ENTRY") {
                  con.release();
                }
              }
              /*
              else {
                res.send({ result: 1, message: "OK" });
              }
              */
            }
          );
        }        
      }
    }
  );
});

module.exports = router;