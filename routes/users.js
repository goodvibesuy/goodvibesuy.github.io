var express = require('express');
var router = express.Router();
var userController = require('../controllers/usersController');

router.get("/", userController.getAll);

module.exports = router;