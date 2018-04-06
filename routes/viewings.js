var express = require('express');
var router = express.Router();
var viewingsController = require('../controllers/viewingsController')

router.get('/last/:cantViews', viewingsController.last);

router.post('/', viewingsController.add);

router.get('/wasVisited/:idRoute/:idPointOfSale', viewingsController.viewingByRouteAndPOS);



module.exports = router;