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
var kpisModel = require('../models/kpisModel');
var KPIController = /** @class */ (function (_super) {
    __extends(KPIController, _super);
    function KPIController() {
        var _this = _super.call(this) || this;
        _this.suppliesPrices = function (req, res) {
            _this.verifyAccess(req, res, function (dbName) {
                kpisModel.suppliesPrices(req.params.supplyId, dbName, function (response) {
                    res.send(response);
                });
            });
        };
        _this.kpiDeliveryReturnEmpty = function (req, res) {
            _this.verifyAccess(req, res, function (dbName) {
                kpisModel.kpiDeliveryReturnEmpty(dbName, function (response) {
                    res.send(response);
                });
            });
        };
        _this.sales = function (req, res) {
            _this.verifyAccess(req, res, function (dbName) {
                kpisModel.sales(function (response) {
                    res.send(response);
                });
            });
        };
        console.log("KPI Controller");
        return _this;
    }
    return KPIController;
}(mainController_1.MainController));
module.exports = new KPIController();
//# sourceMappingURL=kpisController.js.map