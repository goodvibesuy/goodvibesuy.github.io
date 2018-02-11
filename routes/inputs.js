var express = require('express');
var router = express.Router();

var inputsModel = require('../models/inputsModel');

router.get('/', function (req, res, next) {
  inputsModel.inputs(function (result) {
    res.send(result);
  });
});

router.post('/', function (req, res, next) {  
  inputsModel.addInput(req.body.name, req.body.unity,req.body.price,function(result){
    res.send(result);    
  });
});

//cambiar por get
router.post('/inputsbyproduct',function(req,res,next){
  inputsModel.inputsByProduct(req.body.idProduct,function(result){
    res.send(result);    
  });
});

router.put('/', function (req, res, next) {  
  inputsModel.updateInput(req.body.name, req.body.unity,req.body.price,req.body.id,function(result){
    res.send(result);    
  });
});

router.delete('/', function (req, res, next) {
  inputsModel.deleteInput(req.body.id,function(result){
    res.send(result);    
  });
});

module.exports = router;
