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
var mainModel_1 = require("./mainModel");
var masterDBController = require('../bd/masterConnectionsBD');
var UnitsModel = /** @class */ (function (_super) {
    __extends(UnitsModel, _super);
    function UnitsModel() {
        return _super.call(this) || this;
    }
    UnitsModel.prototype.getAll = function (dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("SELECT * FROM unit", function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        con.release();
                        if (err)
                            throw err;
                        callBack({ result: 1, message: "OK", data: result });
                    }
                });
            }
        });
    };
    ;
    UnitsModel.prototype.add = function (name, dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("INSERT INTO unit  (name) VALUES(?)", [name], function (err, resultClient) {
                    if (err) {
                        if (err.code === "ER_DUP_ENTRY") {
                            con.release();
                        }
                    }
                    else {
                        con.release();
                        callBack({ result: 1, message: "OK" });
                    }
                });
            }
        });
    };
    UnitsModel.prototype.update = function (id, name, dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("UPDATE unit  SET name = ? WHERE id = ?", [name, id], function (err, resultClient) {
                    if (err) {
                        //if (err.code === "ER_DUP_ENTRY") {
                        con.release();
                        //}
                    }
                    else {
                        con.release();
                        callBack({ result: 1, message: "OK" });
                    }
                });
            }
        });
    };
    UnitsModel.prototype.delete = function (id, dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("DELETE FROM unit WHERE id = ? ", [id], function (err, resultClient) {
                    if (err) {
                        if (err.code === "ER_DUP_ENTRY") {
                            con.release();
                        }
                    }
                    else {
                        con.release();
                        callBack({ result: 1, message: "OK" });
                    }
                });
            }
        });
    };
    return UnitsModel;
}(mainModel_1.MainModel));
exports.UnitsModel = UnitsModel;
//# sourceMappingURL=unitsModel.js.map