var express = require('express');
var router = express.Router();
var kpisController = require('../controllers/kpisController');

router.get('/', kpisController.kpiDeliveryReturnEmpty);

router.get('/sales', kpisController.sales);

module.exports = router;