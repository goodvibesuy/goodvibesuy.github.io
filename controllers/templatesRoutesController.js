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
var mainController_1 = require("./mainController");
var templatesRouteModel_1 = require("../models/templatesRouteModel");
var TemplatesRoutesController = /** @class */ (function (_super) {
    __extends(TemplatesRoutesController, _super);
    function TemplatesRoutesController() {
        var _this = _super.call(this) || this;
        _this.getAll = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.templateRouteModel.getAll(dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.add = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.templateRouteModel.add(req.body.name, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.update = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.templateRouteModel.update(req.body.name, req.body.idroute, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.getPointsOfSales = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.templateRouteModel.getPointsOfSales(req.params.idRoute, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.addPointOfSale = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.templateRouteModel.addPointOfSale(req.body.idRoute, req.body.idPointOfSale, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.removePointOfSale = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.templateRouteModel.removePointOfSale(req.params.idRoute, req.params.idPointOfSale, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.delete = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.templateRouteModel.delete(req.params.id, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.reorderPointOfSale = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.templateRouteModel.reorderPointOfSale(req.body.idRoute, req.body.idPointOfSale, req.body.position, req.body.newPosition, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.templateRouteModel = new templatesRouteModel_1.TemplateRoutesModel();
        _this.resource = "routes";
        return _this;
    }
    return TemplatesRoutesController;
}(mainController_1.MainController));
module.exports = new TemplatesRoutesController();
//# sourceMappingURL=templatesRoutesController.js.map