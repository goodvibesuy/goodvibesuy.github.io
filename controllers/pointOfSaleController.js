"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MainController = require('./mainController');
var masterDBController = require('../bd/masterConnectionsBD');
var acl = require('../motionLibJS/serverSide/acl/motionACL');
var pointsOfSaleModel = require('../models/pointsOfSaleModel');
var PointOfSaleController = /** @class */ (function () {
    function PointOfSaleController() {
        console.log("POSController");
    }
    PointOfSaleController.prototype.getAll = function (req, res) {
        masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
            acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
                if (response) {
                    pointsOfSaleModel.getAll(dbName, function (result) {
                        res.send(result);
                    });
                }
                else {
                    res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
                }
            });
        });
    };
    ;
    PointOfSaleController.prototype.getPointOfSale = function (req, res) {
        masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
            acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
                if (response) {
                    pointsOfSaleModel.getPointOfSale(req.params.idPOS, dbName, function (result) {
                        res.send(result);
                    });
                }
                else {
                    res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
                }
            });
        });
    };
    ;
    PointOfSaleController.prototype.getFilteredByName = function (req, res) {
        masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
            acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
                if (response) {
                    pointsOfSaleModel.getFilteredByName(req.params.filterName, dbName, function (result) {
                        res.send(result);
                    });
                }
                else {
                    res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
                }
            });
        });
    };
    ;
    PointOfSaleController.prototype.delete = function (req, res) {
        masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
            acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
                if (response) {
                    pointsOfSaleModel.delete(req.params.id, dbName, function (result) {
                        res.send(result);
                    });
                }
                else {
                    res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
                }
            });
        });
    };
    ;
    PointOfSaleController.prototype.add = function (req, res) {
        masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
            acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
                if (response) {
                    pointsOfSaleModel.add(req.body.name, req.body.address, req.body.tel, req.body.image, req.body.coords, dbName, function (result) {
                        res.send(result);
                    });
                }
                else {
                    res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
                }
            });
        });
    };
    ;
    PointOfSaleController.prototype.update = function (req, res) {
        masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
            acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
                if (response) {
                    pointsOfSaleModel.update(req.body.id, req.body.name, req.body.address, req.body.tel, req.body.image, req.body.coord, dbName, function (result) {
                        res.send(result);
                    });
                }
                else {
                    res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
                }
            });
        });
    };
    ;
    return PointOfSaleController;
}());
module.exports = new PointOfSaleController();
//# sourceMappingURL=pointOfSaleController.js.map