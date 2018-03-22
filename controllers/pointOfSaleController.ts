import { Result, ResultWithData, ResultCode } from '../datatypes/result';
var MainController = require('./mainController');
var masterDBController = require('../bd/masterConnectionsBD');
var acl = require('../motionLibJS/serverSide/acl/motionACL');
var pointsOfSaleModel = require('../models/pointsOfSaleModel');

class PointOfSaleController {

    constructor() {
        console.log("POSController");
    }


    getAll(req: any, res: any): void {
        masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'],
            function (err: any, authError: any, response: any, dbName: any) {
                acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err: any, response: any) {
                    if (response) {
                        pointsOfSaleModel.getAll(dbName, function (result: any) {
                            res.send(result);
                        });
                    } else {
                        res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
                    }
                })
            });
    };

    getPointOfSale(req: any, res: any): void {
        masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'],
            function (err: any, authError: any, response: any, dbName: any) {
                acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err: any, response: any) {
                    if (response) {
                        pointsOfSaleModel.getPointOfSale(req.params.idPOS, dbName, function (result: any) {
                            res.send(result);
                        });
                    } else {
                        res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
                    }
                })
            });
    };

    getFilteredByName(req: any, res: any): void {
        masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err: any, authError: any, response: any, dbName: any) {
            acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err: any, response: any) {
                if (response) {
                    pointsOfSaleModel.getFilteredByName(req.params.filterName, dbName, function (result: any) {
                        res.send(result);
                    });
                } else {
                    res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
                }
            })
        });
    };

    delete(req: any, res: any): void {
        masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'],
            function (err: any, authError: any, response: any, dbName: any) {
                acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err: any, response: any) {
                    if (response) {
                        pointsOfSaleModel.delete(req.params.id, dbName, function (result: any) {
                            res.send(result);
                        });
                    } else {
                        res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
                    }
                })
            });
    };

    add(req: any, res: any): void {
        masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'],
            function (err: any, authError: any, response: any, dbName: any) {
                acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err: any, response: any) {
                    if (response) {
                        pointsOfSaleModel.add(req.body.name, req.body.address, req.body.tel, req.body.image, req.body.coords, dbName, function (result: any) {
                            res.send(result);
                        });
                    } else {
                        res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
                    }
                })
            });
    };

    update(req: any, res: any): void {
        masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'],
            function (err: any, authError: any, response: any, dbName: any) {
                acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err: any, response: any) {
                    if (response) {
                        pointsOfSaleModel.update(req.body.id, req.body.name, req.body.address, req.body.tel, req.body.image, req.body.coord, dbName,
                            function (result: any) {
                                res.send(result);
                            });
                    } else {
                        res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
                    }
                })
            });
    };
}

module.exports = new PointOfSaleController();