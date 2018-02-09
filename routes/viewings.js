var express = require('express');
var router = express.Router();

var viewingsModel = require('../models/viewingsModel');

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

  viewingsModel.addVisit(idpointofsail, data, function (result) {
    res.send(result);
  });  
});

module.exports = router;