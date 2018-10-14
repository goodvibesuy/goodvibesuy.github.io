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
var suppliesModel_1 = require("../models/suppliesModel");
var mainController_1 = require("./mainController");
var SuppliesController = /** @class */ (function (_super) {
    __extends(SuppliesController, _super);
    function SuppliesController() {
        var _this = _super.call(this) || this;
        _this.getAll = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.suppliesModel.getAll(dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.get = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.suppliesModel.supplies(dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.addSupply = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.suppliesModel.addSupply(req.body.name, req.body.unit, req.body.amount, req.body.price_date, req.body.idProvider, req.body.path_image, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.getLastPurchases = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.suppliesModel.getSupliesPurchases(dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.getLastPurchasesBySupply = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.suppliesModel.getLastPurchasesBySupply(req.params.id, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.addSupplyPurchase = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.suppliesModel.addSupplyPurchase(req.body.idSupply, req.body.idProvider, req.body.purchaseAmount, req.body.supplyUnit, req.body.numberOfUnits, req.body.purchaseDate, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.suppliesByProduct = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.suppliesModel.suppliesByProduct(req.body.idProduct, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.updateSupply = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.suppliesModel.updateSupply(req.params.id, req.body.name, req.body.unit, req.body.amount, req.body.price_date, req.body.idProvider, req.body.path_image, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.deleteSupply = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.suppliesModel.deleteSupply(req.params.id, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.resource = 'supplies';
        _this.suppliesModel = new suppliesModel_1.SuppliesModel();
        return _this;
    }
    return SuppliesController;
}(mainController_1.MainController));
exports.SuppliesController = SuppliesController;
//# sourceMappingURL=suppliesController.js.map