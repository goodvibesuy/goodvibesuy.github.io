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
  var data = req.body.data;  

  viewingsModel.addVisit(req.body.idPointOfSale, data, function (result) {
    res.send(result);
  });  
});


module.exports = router;