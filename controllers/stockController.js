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
var stockModel_1 = require("../models/stockModel");
var mainController_1 = require("./mainController");
var StockController = /** @class */ (function (_super) {
    __extends(StockController, _super);
    function StockController() {
        var _this = _super.call(this) || this;
        _this.getAll = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.stockModel.getAll(dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.updateStock = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.stockModel.updateStock(req.params.id, req.body.amount, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.resource = 'supplies';
        _this.stockModel = new stockModel_1.StockModel();
        return _this;
    }
    return StockController;
}(mainController_1.MainController));
exports.StockController = StockController;
//# sourceMappingURL=stockController.js.map