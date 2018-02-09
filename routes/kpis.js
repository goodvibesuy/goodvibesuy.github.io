var express = require('express');
var router = express.Router();

var kpisModel = require('../models/kpisModel');

router.get('/', function (req, res, next) {
  kpisModel.kpiDeliveryReturnEmpty(function(response){
    res.send(response);
  });
});

router.get('/sales', function (req, res, next) {
  kpisModel.sales(function(response){
    res.send(response);
  });
});

module.exports = router;