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
var mainModel_1 = require("./mainModel");
var ProvidersModel = /** @class */ (function (_super) {
    __extends(ProvidersModel, _super);
    function ProvidersModel() {
        return _super.call(this) || this;
    }
    ProvidersModel.prototype.getAll = function (dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query('SELECT * FROM provider', function (err, result) {
                    if (err)
                        throw err;
                    con.release();
                    callBack({ result: 1, message: 'OK', data: result });
                });
            }
        });
    };
    ;
    return ProvidersModel;
}(mainModel_1.MainModel));
module.exports = new ProvidersModel();
//# sourceMappingURL=providersModel.js.map