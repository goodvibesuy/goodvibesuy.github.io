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
var result_1 = require("../datatypes/result");
var mainModel_1 = require("./mainModel");
var masterDBController = require('../bd/masterConnectionsBD');
var mysql = require('mysql');
var GroupPosModel = /** @class */ (function (_super) {
    __extends(GroupPosModel, _super);
    function GroupPosModel() {
        return _super.call(this) || this;
    }
    GroupPosModel.prototype.getAll = function (dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query('SELECT * FROM grouppointofsale ORDER BY name ASC', function (err, result) {
                    con.release();
                    if (!!err) {
                        callBack({
                            result: result_1.ResultCode.Error,
                            message: 'Error'
                        });
                    }
                    else {
                        callBack({
                            result: result_1.ResultCode.OK,
                            message: 'OK',
                            data: result
                        });
                    }
                });
            }
        });
    };
    return GroupPosModel;
}(mainModel_1.MainModel));
exports.GroupPosModel = GroupPosModel;
//# sourceMappingURL=groupPosModel.js.map