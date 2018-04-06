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
var mainController_1 = require("./mainController");
var viewingsModel_1 = require("../models/viewingsModel");
var ViewingsController = /** @class */ (function (_super) {
    __extends(ViewingsController, _super);
    function ViewingsController() {
        var _this = _super.call(this) || this;
        _this.add = function (req, res) {
            _this.verifyAccess(req, res, "viewing", function (dbName) {
                var data = req.body.data;
                var userName = req.headers['user'];
                _this.viewingsModel.addVisit(userName, req.body.idPointOfSale, data, req.body.annotation, req.body.idPOS, req.body.idRoute, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.last = function (req, res) {
            _this.verifyAccess(req, res, "viewing", function (dbName) {
                _this.viewingsModel.getLast(req.params.cantViews, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.viewingByRouteAndPOS = function (req, res) {
            _this.verifyAccess(req, res, "viewing", function (dbName) {
                _this.viewingsModel.viewingByRouteAndPOS(req.params.idRoute, req.params.idPointOfSale, dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.viewingsModel = new viewingsModel_1.ViewingsModel();
        return _this;
    }
    return ViewingsController;
}(mainController_1.MainController));
module.exports = new ViewingsController();
//# sourceMappingURL=viewingsController.js.map