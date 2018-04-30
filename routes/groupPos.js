var express = require('express');
var router = express.Router();
var groupCustomerController = require('../controllers/groupCustomerController');

router.get('/', groupCustomerController.getAll);

module.exports = router;
