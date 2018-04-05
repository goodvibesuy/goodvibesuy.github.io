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
var KpisModel = /** @class */ (function (_super) {
    __extends(KpisModel, _super);
    function KpisModel() {
        return _super.call(this) || this;
    }
    KpisModel.prototype.suppliesPrices = function (supplyId, dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("SELECT * FROM supply s INNER JOIN supplyprice sp ON s.id = sp.idSupply WHERE s.id = ? ORDER BY price_date ASC ", [supplyId], function (err, result) {
                    if (err)
                        throw err;
                    con.release();
                    callBack({ result: 1, message: "OK", data: result });
                });
            }
        });
    };
    KpisModel.prototype.kpiDeliveryReturnEmpty = function (dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("SELECT type,SUM(quantity) AS quantity, name FROM `viewing_product` INNER JOIN `product` ON idproduct = id GROUP BY `idproduct`,`type`", function (err, result) {
                    if (err)
                        throw err;
                    con.release();
                    callBack({ result: 1, message: "OK", data: result });
                });
            }
        });
    };
    ;
    KpisModel.prototype.sales = function (dbName, callBack) {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                var sumaEntregas = 0;
                con.query("SELECT SUM(quantity) as quantity FROM viewing_product WHERE type = 'delivery' AND idproduct= 1", function (err, result) {
                    if (err)
                        throw err;
                    sumaEntregas = result[0].quantity;
                    con.query("SELECT quantity FROM viewing_product WHERE type = 'delivery' AND `idproduct`= 1 ORDER BY `idviewing` DESC LIMIT 1", function (err, result) {
                        if (err)
                            throw err;
                        sumaEntregas -= result[0].quantity;
                        con.query("SELECT SUM(quantity) as quantity FROM viewing_product WHERE type = 'return' AND `idproduct`= 1 ", function (err, result) {
                            if (err)
                                throw err;
                            console.log(result[0].quantity);
                            sumaEntregas -= result[0].quantity;
                            con.release();
                            callBack({ result: 1, message: "OK", data: [sumaEntregas] });
                        });
                    });
                });
            }
        });
    };
    ;
    return KpisModel;
}(mainModel_1.MainModel));
module.exports = new KpisModel();
//# sourceMappingURL=kpisModel.js.map