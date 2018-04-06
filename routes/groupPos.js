var express = require('express');
var router = express.Router();
var groupPosController = require('../controllers/groupPosController');

router.get('/', groupPosController.getAll);

module.exports = router;
