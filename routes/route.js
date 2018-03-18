var express = require('express');
var router = express.Router();
var acl = require('../motionLibJS/serverSide/acl/motionACL');
var travelModel = require('../models/travelModel');
var masterDBController = require('../bd/masterConnectionsBD');
var clientDBController = require('../bd/clientConnectionsBD');

router.get('/', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {        
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                travelModel.getAll(dbName,function (result) {
                    res.send(result);
                });
            } else {
                //console.log("getAllClient --> user : " + req.headers['user'] + " " + messages.PERMISSION_DENIED);                
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        });
    }, function (err) {
        res.send(err);
    });
});

router.get('/pointofsales/:idRoute', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                travelModel.getPointsOfSales(req.params.idRoute, dbName,function (result) {
                    res.send(result);
                });
            } else {
                //res.send({ result: -1, message: messages.PERMISSION_DENIED, data: null });
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        });            
    }, function (err) {
        res.send(err);
    });    
});

router.get('/users/:idRoute', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                travelModel.getUers(req.params.idRoute, dbName,function (result) {
                    res.send(result);
                });
            } else {
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        });            
    }, function (err) {
        res.send(err);
    });
    
});

router.post('/', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                travelModel.add(req.body.name, dbName,function (result) {
                    res.send(result);
                });
            } else {
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        });            
    }, function (err) {
        res.send(err);
    });
    
});

router.post('/addPointOfSale', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                travelModel.addPointOfSale(req.body.idRoute, req.body.idPointOfSale, dbName,function (result) {
                    res.send(result);
                });
            } else {
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        });            
    }, function (err) {
        res.send(err);
    });
    
});

router.post('/addUser', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
    
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                travelModel.addUser(req.body.idRoute, req.body.idUser, req.body.date, dbName,function (result) {
                    res.send(result);
                });
            } else {
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        });
    }, function (err) {
        res.send(err);
    });
    
});


//removePointOfSale
router.delete('/removePointOfSale/:idRoute/:idPointOfSale', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                travelModel.removePointOfSale(req.params.idRoute, req.params.idPointOfSale, dbName,function (result) {
                    res.send(result);
                });
            } else {
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        });            
    }, function (err) {
        res.send(err);
    });
    
});

//removePointOfSale
router.delete('/removeUser/:idRoute/:idUser', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                travelModel.removeUser(req.params.idRoute, req.params.idUser, dbName,function (result) {
                    res.send(result);
                });
            } else {
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        });            
    }, function (err) {
        res.send(err);
    });
    
});

router.post('/addUser', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                travelModel.addPointOfSale(req.body.idRoute, req.body.idUser, dbName,function (result) {
                    res.send(result);
                });
            } else {
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        });            
    }, function (err) {
        res.send(err);
    });
    
});

router.put('/', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                travelModel.update(req.body.name, req.body.idroute, dbName,function (result) {
                    res.send(result);
                });
            } else {
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        });            
    }, function (err) {
        res.send(err);
    });
    
});

router.put('/reorderPointOfSale', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
    
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                travelModel.reorderPointOfSale(req.body.idRoute, req.body.idPointOfSale, req.body.position, req.body.newPosition, dbName,function (result) {
                    res.send(result);
                });
            } else {
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        });
    }, function (err) {
        res.send(err);
    });
    
});

router.delete('/:id', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
            if (response) {
                travelModel.delete(req.params.id,dbName, function (result) {
                    res.send(result);
                });
            } else {
                res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
            }
        });         
    }, function (err) {
        res.send(err);
    });   
});

module.exports = router;