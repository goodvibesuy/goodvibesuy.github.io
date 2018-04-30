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
var groupPosModel_1 = require("../models/groupPosModel");
var GroupPosController = /** @class */ (function (_super) {
    __extends(GroupPosController, _super);
    function GroupPosController() {
        var _this = _super.call(this) || this;
        _this.getAll = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.groupPosModel.getAll(dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.resource = "pos";
        _this.groupPosModel = new groupPosModel_1.GroupPosModel();
        return _this;
    }
    return GroupPosController;
}(mainController_1.MainController));
module.exports = new GroupPosController();
//# sourceMappingURL=groupPosController.js.map