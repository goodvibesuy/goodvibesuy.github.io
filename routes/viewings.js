var express = require('express');
var router = express.Router();
var viewingsController = require('../controllers/viewingsController')

router.get('/last/:cantViews', viewingsController.last);

router.get('/viewingsByRoute/:idRoute', viewingsController.viewingsByRoute);

router.get('/:idViewing', viewingsController.getViewingById);

router.post('/', viewingsController.add);

router.get('/wasVisited/:idRoute/:idPointOfSale', viewingsController.viewingByRouteAndPOS);



module.exports = router;