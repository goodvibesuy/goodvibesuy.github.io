var express = require('express');
var router = express.Router();
var clientController = require('../controllers/clientController');


router.get('/',clientController.getAll);

router.post('/',clientController.add);

router.delete('/:id',clientController.delete);

module.exports = router;
