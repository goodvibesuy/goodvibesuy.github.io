var express = require('express');
var router = express.Router();
var unitsController = require('../controllers/unitsCotroller')

router.get('/', unitsController.getAll);

router.post('/', unitsController.add);

router.put('/', unitsController.update);

router.delete('/', unitsController.delete);

module.exports = router;
