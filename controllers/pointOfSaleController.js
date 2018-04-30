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
var mainController_1 = require("./mainController");
var pointsOfSaleModel_1 = require("../models/pointsOfSaleModel");
var PointOfSaleController = /** @class */ (function (_super) {
    __extends(PointOfSaleController, _super);
    function PointOfSaleController() {
        var _this = _super.call(this) || this;
        _this.getAll = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.pointsOfSaleModel.getAll(dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.getPointOfSale = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.pointsOfSaleModel.getPointOfSale(req.params.idPOS, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.getFilteredByName = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.pointsOfSaleModel.getFilteredByName(req.params.filterName, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.delete = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.pointsOfSaleModel.delete(req.params.id, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.add = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.pointsOfSaleModel.add(req.body.name, req.body.businessName, req.body.contactName, req.body.RUT, req.body.idGroup, req.body.address, req.body.tel, req.body.image, req.body.coord, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.update = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.pointsOfSaleModel.update(req.body.id, req.body.name, req.body.businessName, req.body.contactName, req.body.RUT, req.body.idGroup, req.body.address, req.body.tel, req.body.image, req.body.coord, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.resource = "pos";
        _this.pointsOfSaleModel = new pointsOfSaleModel_1.PointsOfSaleModel();
        return _this;
    }
    return PointOfSaleController;
}(mainController_1.MainController));
module.exports = new PointOfSaleController();
//# sourceMappingURL=pointOfSaleController.js.map