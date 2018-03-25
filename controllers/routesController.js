"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//https://github.com/Microsoft/TypeScript/wiki/'this'-in-TypeScript
var masterDBController = require('../bd/masterConnectionsBD');
var acl = require('../motionLibJS/serverSide/acl/motionACL');
var travelModel = require('../models/travelModel');
var mainController_1 = require("./mainController");
var RoutesController = /** @class */ (function (_super) {
    __extends(RoutesController, _super);
    function RoutesController() {
        var _this = _super.call(this) || this;
        _this.getAll = function (req, res) {
            _this.verifyAccess(req, res, function (dbName) {
                travelModel.getAll(dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.add = function (req, res) {
            _this.verifyAccess(req, res, function (dbName) {
                travelModel.add(req.body.name, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.update = function (req, res) {
            _this.verifyAccess(req, res, function (dbName) {
                travelModel.update(req.body.name, req.body.idroute, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.getPointsOfSales = function (req, res) {
            _this.verifyAccess(req, res, function (dbName) {
                travelModel.getPointsOfSales(req.params.idRoute, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.getUsers = function (req, res) {
            _this.verifyAccess(req, res, function (dbName) {
                travelModel.getUers(req.params.idRoute, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.addPointOfSale = function (req, res) {
            _this.verifyAccess(req, res, function (dbName) {
                travelModel.addPointOfSale(req.body.idRoute, req.body.idPointOfSale, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.addUser = function (req, res) {
            _this.verifyAccess(req, res, function (dbName) {
                travelModel.addUser(req.body.idRoute, req.body.idUser, req.body.date, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.removePointOfSale = function (req, res) {
            _this.verifyAccess(req, res, function (dbName) {
                travelModel.removePointOfSale(req.params.idRoute, req.params.idPointOfSale, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.removeUser = function (req, res) {
            _this.verifyAccess(req, res, function (dbName) {
                travelModel.removeUser(req.params.idRoute, req.params.idUser, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.delete = function (req, res) {
            _this.verifyAccess(req, res, function (dbName) {
                travelModel.delete(req.params.id, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.reorderPointOfSale = function (req, res) {
            _this.verifyAccess(req, res, function (dbName) {
                travelModel.reorderPointOfSale(req.body.idRoute, req.body.idPointOfSale, req.body.position, req.body.newPosition, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        return _this;
    }
    return RoutesController;
}(mainController_1.MainController));
module.exports = new RoutesController();
//# sourceMappingURL=routesController.js.map