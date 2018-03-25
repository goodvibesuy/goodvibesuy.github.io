var express = require('express');
var router = express.Router();
var suppliesController = require('../controllers/suppliesController');

router.get('/', suppliesController.get);

router.get('/getAll', suppliesController.getAll);

router.post('/', suppliesController.addSupply);

//cambiar por get
router.post('/suppliesbyproduct', suppliesController.suppliesByProduct);

router.put('/:id', suppliesController.updateSupply);

router.delete('/:id', suppliesController.deleteSupply);

module.exports = router;
