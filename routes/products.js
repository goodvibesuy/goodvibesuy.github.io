var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');

router.get('/', productsController.getAll);

router.get('/:id', productsController.get);

router.post('/', productsController.add);

router.put('/:id', productsController.update);

router.delete('/:id', productsController.delete);

router.delete('/:idProduct/supplies/:idSupply', productsController.removeSupply);

module.exports = router;
