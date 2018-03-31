var express = require('express');
var router = express.Router();
var providersController = require('../controllers/providersController');

router.get('/getAll', providersController.getAll);

module.exports = router;
