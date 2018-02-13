var express = require('express');
var router = express.Router();

var travelModel = require('../models/travelModel');

router.get('/', function (req, res, next) {
    travelModel.getAll(function (result) {
        res.send(result);
    });
});

router.post('/', function (req, res, next) {
    travelModel.add(req.body.name, function (result) {
        res.send(result);
    });
});

router.post('/addPointOfSale', function (req, res, next) {
    travelModel.addPointOfSale(req.body.idRoute,req.body.idPointOfSale, function (result) {
        res.send(result);
    });
});

router.post('/addUser', function (req, res, next) {
    travelModel.addPointOfSale(req.body.idRoute,req.body.idUser, function (result) {
        res.send(result);
    });
});

router.put('/', function (req, res, next) {
    travelModel.updateInput(req.body.name, req.body.unity, req.body.price, req.body.id, function (result) {
        res.send(result);
    });
});

router.delete('/:id', function (req, res, next) {
    travelModel.delete(req.params.id, function (result) {
        res.send(result);
    });
});

module.exports = router;