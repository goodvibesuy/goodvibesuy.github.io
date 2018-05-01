var express = require('express');
var router = express.Router();
var clientController = require('../controllers/clientController');


router.get('/',clientController.getAll);

router.get('/:id',clientController.get);

router.post('/',clientController.add);

router.put('/:id',clientController.update);

router.delete('/:id',clientController.delete);

module.exports = router;
