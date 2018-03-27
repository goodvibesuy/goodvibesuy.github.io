var express = require('express');
var router = express.Router();
var routesController = require('../controllers/routesController');

router.get('/', routesController.getAll);

router.post('/', routesController.add);

router.put('/', routesController.update);

router.delete('/:id', routesController.delete);

router.get('/pointofsales/:idRoute', routesController.getPointsOfSales);

router.post('/addPointOfSale', routesController.addPointOfSale);

router.put('/reorderPointOfSale', routesController.reorderPointOfSale);

router.delete('/removePointOfSale/:idRoute/:idPointOfSale', routesController.removePointOfSale);

module.exports = router;