"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MainController = require('./mainController');
var masterDBController = require('../bd/masterConnectionsBD');
var acl = require('../motionLibJS/serverSide/acl/motionACL');
var kpisModel = require('../models/kpisModel');
var KPIController = /** @class */ (function () {
    function KPIController() {
        console.log("UserController");
    }
    KPIController.prototype.kpiDeliveryReturnEmpty = function (req, res) {
        masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
            acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
                if (response) {
                    kpisModel.kpiDeliveryReturnEmpty(dbName, function (response) {
                        res.send(response);
                    });
                }
                else {
                    res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
                }
            });
        });
    };
    ;
    KPIController.prototype.sales = function (req, res) {
        masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
            acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
                if (response) {
                    kpisModel.sales(function (response) {
                        res.send(response);
                    });
                }
                else {
                    res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
                }
            });
        });
    };
    ;
    return KPIController;
}());
module.exports = new KPIController();
//# sourceMappingURL=kpisController.js.map