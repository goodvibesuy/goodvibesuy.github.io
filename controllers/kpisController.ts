import { Result, ResultWithData, ResultCode } from '../datatypes/result';
var MainController = require('./mainController');
var masterDBController = require('../bd/masterConnectionsBD');
var acl = require('../motionLibJS/serverSide/acl/motionACL');
var kpisModel = require('../models/kpisModel');

class KPIController {

    constructor() {
        console.log("UserController");
    }

    kpiDeliveryReturnEmpty(req: any, res: any): void {
        masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'],
            function (err: any, authError: any, response: any, dbName: any) {
                acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err: any, response: any) {
                    if (response) {
                        kpisModel.kpiDeliveryReturnEmpty(dbName, function (response:any) {
                            res.send(response);
                        });
                    } else {
                        res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
                    }
                })
            });
    };

    sales(req: any, res: any): void {
        masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'],
            function (err: any, authError: any, response: any, dbName: any) {
                acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err: any, response: any) {
                    if (response) {
                        kpisModel.sales(function (response:any) {
                            res.send(response);
                        });
                    }else{
                        res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
                    }
                })
            });
    };
    
}

module.exports = new KPIController();