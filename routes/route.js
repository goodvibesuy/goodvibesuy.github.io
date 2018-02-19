var express = require('express');
var router = express.Router();
var acl = require('../motionLibJS/serverSide/acl/motionACL');
var travelModel = require('../models/travelModel');

router.get('/', function (req, res, next) {
    /*masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) { */
    //acl.getACL().isAllowed(req.headers['user'], 'adminClients', 'post', function (err, response) {
    acl.getACL().isAllowed("cabecacorada", 'routes', 'get', function (err, response) {
        if (response) {
            travelModel.getAll(function (result) {
                res.send(result);
            });
        } else {
            //console.log("getAllClient --> user : " + req.headers['user'] + " " + messages.PERMISSION_DENIED);
            //res.send({ result: -1, message: messages.PERMISSION_DENIED, data: null });
            res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
        }
    });
    /*});    */
});

router.get('/pointofsales/:idRoute', function (req, res, next) {
    acl.getACL().isAllowed("cabecacorada", 'routes', 'get', function (err, response) {
        if (response) {
            travelModel.getPointsOfSales(req.params.idRoute, function (result) {
                res.send(result);
            });
        } else {
            //res.send({ result: -1, message: messages.PERMISSION_DENIED, data: null });
            res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
        }
    });
});

router.get('/users/:idRoute', function (req, res, next) {
    acl.getACL().isAllowed("cabecacorada", 'routes', 'get', function (err, response) {
        if (response) {
            travelModel.getUers(req.params.idRoute, function (result) {
                res.send(result);
            });
        } else {
            res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
        }
    });
});

router.post('/', function (req, res, next) {
    acl.getACL().isAllowed("cabecacorada", 'routes', 'get', function (err, response) {
        if (response) {
            travelModel.add(req.body.name, function (result) {
                res.send(result);
            });
        } else {
            res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
        }
    });
});

router.post('/addPointOfSale', function (req, res, next) {
    acl.getACL().isAllowed("cabecacorada", 'routes', 'get', function (err, response) {
        if (response) {
            travelModel.addPointOfSale(req.body.idRoute, req.body.idPointOfSale, function (result) {
                res.send(result);
            });
        } else {
            res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
        }
    });
});

router.post('/addUser', function (req, res, next) {
    acl.getACL().isAllowed("cabecacorada", 'routes', 'get', function (err, response) {
        if (response) {
            travelModel.addUser(req.body.idRoute, req.body.idUser, req.body.date, function (result) {
                res.send(result);
            });
        } else {
            res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
        }
    });
});


//removePointOfSale
router.delete('/removePointOfSale/:idRoute/:idPointOfSale', function (req, res, next) {
    acl.getACL().isAllowed("cabecacorada", 'routes', 'get', function (err, response) {
        if (response) {
            travelModel.removePointOfSale(req.params.idRoute, req.params.idPointOfSale, function (result) {
                res.send(result);
            });
        } else {
            res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
        }
    });
});


router.post('/addUser', function (req, res, next) {
    acl.getACL().isAllowed("cabecacorada", 'routes', 'get', function (err, response) {
        if (response) {
            travelModel.addPointOfSale(req.body.idRoute, req.body.idUser, function (result) {
                res.send(result);
            });
        } else {
            res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
        }
    });
});

router.put('/', function (req, res, next) {
    acl.getACL().isAllowed("cabecacorada", 'routes', 'get', function (err, response) {
        if (response) {
            travelModel.update(req.body.name, req.body.idroute, function (result) {
                res.send(result);
            });
        } else {
            res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
        }
    });
});

router.put('/reorderPointOfSale', function (req, res, next) {
    acl.getACL().isAllowed("cabecacorada", 'routes', 'get', function (err, response) {
        if (response) {
            travelModel.reorderPointOfSale(req.body.idRoute, req.body.idPointOfSale, req.body.position, req.body.newPosition, function (result) {
                res.send(result);
            });
        } else {
            res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
        }
    });
});

router.delete('/:id', function (req, res, next) {
    acl.getACL().isAllowed("cabecacorada", 'routes', 'get', function (err, response) {
        if (response) {
            travelModel.delete(req.params.id, function (result) {
                res.send(result);
            });
        } else {
            res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
        }
    });
});

module.exports = router;