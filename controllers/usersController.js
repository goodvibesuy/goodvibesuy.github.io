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
var userModel_1 = require("../models/userModel");
var mainController_1 = require("./mainController");
var UserController = /** @class */ (function (_super) {
    __extends(UserController, _super);
    function UserController() {
        var _this = _super.call(this) || this;
        _this.getAll = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.userModel.users(dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.getUserByIdMaster = function (idMaster, tokenId, userName, rolId, accountId, dbName, req, res) {
            _this.userModel.userByIdMaster(idMaster, tokenId, userName, rolId, accountId, dbName, function (result) {
                res.send(result);
            });
        };
        _this.getUserByUserName = function (req, res) {
            _this.verifyAccess(req, res, _this.resource, function (dbName) {
                _this.userModel.userByUserName(req.headers['user'], dbName, function (result) {
                    res.send(result);
                });
            });
        };
        _this.userModel = new userModel_1.UserModel();
        _this.resource = "users";
        return _this;
    }
    return UserController;
}(mainController_1.MainController));
exports.UserController = UserController;
//# sourceMappingURL=usersController.js.map