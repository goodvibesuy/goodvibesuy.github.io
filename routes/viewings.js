var express = require('express');
var router = express.Router();
var viewingsController = require('../controllers/viewingsController')

router.post('/', viewingsController.add);

module.exports = router;