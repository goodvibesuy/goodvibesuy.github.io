var express = require('express');
var router = express.Router();
var routesController = require('../controllers/routesController');

router.get('/', routesController.getAll);

//router.get('/:id', routesController.getAll);

router.post('/', routesController.add);

router.put('/', routesController.update);

router.delete('/:id', routesController.delete);

router.get('/pointofsales/:idRoute', routesController.getPointsOfSales);

router.get('/stock/:idRoute', routesController.getStock);


router.get('/routesByUser/:user', routesController.getRoutesByUser);

//TODO hacer que se saque del usuario autenticado
router.get('/routes/:idUser', routesController.getRoutesByUserId);

router.get('/users/:idRoute', routesController.getUsers);

router.post('/addPointOfSale', routesController.addPointOfSale);

router.post('/addUser', routesController.addUser);

router.put('/reorderPointOfSale', routesController.reorderPointOfSale);

router.delete('/removePointOfSale/:idRoute/:idPointOfSale', routesController.removePointOfSale);

router.delete('/removeUser/:idRoute/:idUser', routesController.removeUser);

module.exports = router;