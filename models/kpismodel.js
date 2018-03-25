"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var masterDBController = require('../bd/masterConnectionsBD');
var clientDBController = require('../bd/clientConnectionsBD');
var KpisModel = /** @class */ (function () {
    function KpisModel() {
    }
    KpisModel.prototype.suppliesPrices = function (supplyId, dbName, callBack) {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query("SELECT * FROM supply s INNER JOIN supplyprice sp ON s.id = sp.idSupply WHERE s.id = ?", [supplyId], function (err, result) {
                    if (err)
                        throw err;
                    con.release();
                    callBack({ result: 1, message: "OK", data: result });
                });
            }
        });
    };
    KpisModel.prototype.kpiDeliveryReturnEmpty = function (dbName, callBack) {
        var pool = clientDBController.getUserConnection(dbName);
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
        var pool = clientDBController.getUserConnection(dbName);
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
}());
module.exports = new KpisModel();
//# sourceMappingURL=kpisModel.js.map