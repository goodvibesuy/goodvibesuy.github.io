var express = require('express');
var router = express.Router();
var pointOfSaleController = require('../controllers/pointOfSaleController');

router.get('/', pointOfSaleController.getAll);

router.get('/getPointOfSale/:idPOS', pointOfSaleController.getPointOfSale);

router.get('/getFilteredByName/:filterName', pointOfSaleController.getFilteredByName);

router.delete('/:id', pointOfSaleController.delete);

router.post('/',pointOfSaleController.add);

router.put('/', pointOfSaleController.update);

module.exports = router;
