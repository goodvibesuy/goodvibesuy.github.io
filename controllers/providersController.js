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
var providersModel_1 = require("../models/providersModel");
var mainController_1 = require("./mainController");
var ProvidersController = /** @class */ (function (_super) {
    __extends(ProvidersController, _super);
    function ProvidersController() {
        var _this = _super.call(this) || this;
        _this.getAll = function (req, res) {
            _this.verifyAccess(req, res, ProvidersController.resource, function (dbName) {
                _this.providersModel.getAll(dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.get = function (req, res) {
            _this.verifyAccess(req, res, ProvidersController.resource, function (dbName) {
                _this.providersModel.get(req.params.id, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.add = function (req, res) {
            _this.verifyAccess(req, res, ProvidersController.resource, function (dbName) {
                _this.providersModel.add(req.body, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.update = function (req, res) {
            _this.verifyAccess(req, res, ProvidersController.resource, function (dbName) {
                _this.providersModel.update(req.params.id, req.body, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.delete = function (req, res) {
            _this.verifyAccess(req, res, ProvidersController.resource, function (dbName) {
                _this.providersModel.delete(req.params.id, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.providersModel = new providersModel_1.ProvidersModel();
        return _this;
    }
    ProvidersController.resource = "providers";
    return ProvidersController;
}(mainController_1.MainController));
exports.ProvidersController = ProvidersController;
//# sourceMappingURL=providersController.js.map