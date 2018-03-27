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
var unitsModel_1 = require("../models/unitsModel");
var mainController_1 = require("./mainController");
var UnitsController = /** @class */ (function (_super) {
    __extends(UnitsController, _super);
    function UnitsController() {
        var _this = _super.call(this) || this;
        _this.getAll = function (req, res) {
            _this.verifyAccess(req, res, "users", function (dbName) {
                _this.unitsModel.getAll(dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.add = function (req, res) {
            _this.verifyAccess(req, res, "users", function (dbName) {
                _this.unitsModel.add(req.body.name, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.update = function (req, res) {
            _this.verifyAccess(req, res, "users", function (dbName) {
                _this.unitsModel.update(req.body.id, req.body.name, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.delete = function (req, res) {
            _this.verifyAccess(req, res, "users", function (dbName) {
                _this.unitsModel.delete(req.body.id, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.unitsModel = new unitsModel_1.UnitsModel();
        return _this;
    }
    return UnitsController;
}(mainController_1.MainController));
module.exports = new UnitsController();
//# sourceMappingURL=unitsCotroller.js.map