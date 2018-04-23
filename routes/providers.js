var express = require('express');
var router = express.Router();
var providersController = require('../controllers/providersController');

router.get('/getAll', providersController.getAll);

router.post('/', providersController.add);


module.exports = router;
