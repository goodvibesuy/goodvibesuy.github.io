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
var userModel_1 = require("./userModel");
var lineViewingView_1 = require("../datatypes/views/lineViewingView");
var pointOfSale_1 = require("../datatypes/pointOfSale");
var mainModel_1 = require("./mainModel");
var masterDBController = require('../bd/masterConnectionsBD');
var ViewingsModel = /** @class */ (function (_super) {
    __extends(ViewingsModel, _super);
    function ViewingsModel() {
        var _this = _super.call(this) || this;
        _this.userModel = new userModel_1.UserModel();
        return _this;
    }
    ViewingsModel.prototype.getLast = function (cantViews, dbName, callBack) {
        var mainThis = this;
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                console.error(err);
                con.release();
            }
            else {
                con.query("SELECT * FROM viewing v INNER JOIN pointofsale pos ON v.idpointofsale = pos.id ORDER BY v.date DESC LIMIT 10", [cantViews], function (err, result) {
                    if (err) {
                        con.release();
                        callBack({
                            result: result_1.ResultCode.Error,
                            message: err.code,
                            data: result
                        });
                    }
                    else {
                        var viewings = result;
                        var linesViewings = new Array();
                        if (viewings.length > 0) {
                            for (var i = 0; i < viewings.length; i++) {
                                var pos = new pointOfSale_1.PointOfSale();
                                pos.address = viewings[i].address;
                                pos.name = viewings[i].name;
                                pos.tel = viewings[i].tel;
                                pos.id = viewings[i].id;
                                var line = new lineViewingView_1.LineViewingView(viewings[i].date, pos, viewings[i].idviewing);
                                linesViewings.push(line);
                            }
                        }
                        mainThis.getProductsLine(0, linesViewings, dbName, con, callBack);
                    }
                });
            }
        });
    };
    ;
    ViewingsModel.prototype.getProductsLine = function (index, lines, dbName, con, callBack) {
        var mainThis = this;
        if (index < lines.length) {
            con.query("SELECT * FROM viewing_product WHERE idviewing = ?", [lines[index].getIdViewing()], function (err, result) {
                if (err) {
                    con.release();
                    callBack({
                        result: result_1.ResultCode.Error,
                        message: err.code,
                        data: result
                    });
                }
                else {
                    if (result.length > 0) {
                        for (var i = 0; i < result.length; i++) {
                            lines[index].addProduct(result[i]);
                        }
                    }
                    mainThis.getProductsLine(index + 1, lines, dbName, con, callBack);
                }
            });
        }
        else {
            callBack({
                result: result_1.ResultCode.OK,
                message: 'OK',
                data: lines
            });
        }
    };
    ViewingsModel.prototype.addVisit = function (userName, idpointofsail, data, annotation, dbName, callBack) {
        var mainThis = this;
        this.userModel.userByUserName(userName, dbName, function (result) {
            if (result.data !== undefined && result.data.length > 0) {
                var idUser = result.data[0].id;
                var pool = mainThis.controllerConnections.getUserConnection(dbName);
                pool.getConnection(function (err, con) {
                    if (err) {
                        console.error(err);
                        con.release();
                    }
                    else {
                        con.query("INSERT INTO viewing  (date, idpointofsale,idUser,annotation) VALUES(NOW(),?,?,?)", [idpointofsail, idUser, annotation], function (err, result) {
                            if (err) {
                                if (err.code === "ER_DUP_ENTRY") {
                                    con.release();
                                }
                            }
                            else {
                                var idviewing = result.insertId;
                                for (var i = 0; i < data.length; i++) {
                                    Object.keys(data[i].typeTransaction).forEach(function (key, index) {
                                        con.query("INSERT INTO viewing_product(idviewing,idproduct,quantity,type) VALUES(?,?,?,?)", [idviewing, data[i].id, data[i].typeTransaction[key], key], function (err, resultClient) {
                                            if (err) {
                                                if (err.code === "ER_DUP_ENTRY") {
                                                    con.release();
                                                    callBack({ result: -1, message: "Error interno." });
                                                }
                                            }
                                            else {
                                                //TODO: corregir
                                            }
                                        });
                                    });
                                }
                                con.release();
                                callBack({ result: 1, message: "OK" });
                            }
                        });
                    }
                });
            }
            else {
                callBack({ result: -1, message: "Error con el usuario." });
            }
        });
    };
    ;
    return ViewingsModel;
}(mainModel_1.MainModel));
exports.ViewingsModel = ViewingsModel;
//# sourceMappingURL=viewingsModel.js.map