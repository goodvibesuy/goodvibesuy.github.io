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
var clientModel_1 = require("../models/clientModel");
var ClientController = /** @class */ (function (_super) {
    __extends(ClientController, _super);
    function ClientController() {
        var _this = _super.call(this) || this;
        _this.getAll = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.clientModel.getAll(dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.delete = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.clientModel.delete(req.params.id, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.add = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.clientModel.add(req.body.client, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.resource = "pos";
        _this.clientModel = new clientModel_1.ClientModel();
        return _this;
    }
    return ClientController;
}(mainController_1.MainController));
module.exports = new ClientController();
//# sourceMappingURL=clientController.js.map