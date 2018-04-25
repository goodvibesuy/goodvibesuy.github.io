var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');

router.get('/', productsController.getAll);

router.get('/:id', productsController.get);

router.get('/priceByProduct/:idProduct', productsController.pricesByProduct);

router.get('/priceByProductByPOS/:idProduct/:idPOS', productsController.priceByProductByPOS);

router.post('/', productsController.add);

router.put('/', productsController.update);

router.delete('/:id', productsController.delete);

router.delete('/:idProduct/supplies/:idSupply', productsController.removeSupply);

module.exports = router;
