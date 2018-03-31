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
var providersModel = require('../models/providersModel');
var mainController_1 = require("./mainController");
var ProvidersController = /** @class */ (function (_super) {
    __extends(ProvidersController, _super);
    function ProvidersController() {
        var _this = _super.call(this) || this;
        _this.getAll = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                providersModel.getAll(dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.resource = "providers";
        return _this;
    }
    return ProvidersController;
}(mainController_1.MainController));
module.exports = new ProvidersController();
//# sourceMappingURL=providersController.js.map