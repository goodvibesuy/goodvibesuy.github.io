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
var masterDBController = require('../bd/masterConnectionsBD');
var acl = require('../motionLibJS/serverSide/acl/motionACL');
var productModel = require('../models/productsModel');
var mainController_1 = require("./mainController");
var ProductsController = /** @class */ (function (_super) {
    __extends(ProductsController, _super);
    function ProductsController() {
        var _this = _super.call(this) || this;
        _this.getAll = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                productModel.getAll(dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.get = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                productModel.get(req.params.id, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.add = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                productModel.add(req.body.name, req.body.path_image, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.update = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                productModel.update(req.params.id, req.body.name, req.body.path_image, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.delete = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                productModel.delete(req.params.id, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.removeSupply = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                productModel.deleteSupply(req.params.idProduct, req.params.idSupply, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.resource = "products";
        return _this;
    }
    return ProductsController;
}(mainController_1.MainController));
module.exports = new ProductsController();
//# sourceMappingURL=productsController.js.map