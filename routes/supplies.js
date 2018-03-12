var express = require('express');
var router = express.Router();

var suppliesModel = require('../models/suppliesModel');

router.get('/', function (req, res, next) {
  suppliesModel.supplies(function (result) {
    res.send(result);
  });
});

router.post('/', function (req, res, next) {  
  suppliesModel.addSupply(req.body.name, req.body.unit,req.body.amount,function(result){
    res.send(result);    
  });
});

//cambiar por get
router.post('/suppliesbyproduct',function(req,res,next){
  suppliesModel.suppliesByProduct(req.body.idProduct,function(result){
    res.send(result);    
  });
});

router.put('/', function (req, res, next) {  
  suppliesModel.updateSupply(req.body.name, req.body.unit,req.body.amount,req.body.id,function(result){
    res.send(result);    
  });
});

router.delete('/:id', function (req, res, next) {
  suppliesModel.deleteSupply(req.params.id,function(result){
    res.send(result);    
  });
});

module.exports = router;
