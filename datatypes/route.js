"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var Route = /** @class */ (function () {
    function Route() {
        this.id = 0;
        this.name = "";
        this.date = new Date();
        this.user = new user_1.User();
        this.pointsOfSale = new Array();
        this.pointsOfSaleToRemove = new Array();
        this.stock = new Array();
    }
    Route.prototype.addProductStock = function (productStock) {
        this.stock.push(productStock);
    };
    Route.prototype.getStock = function () {
        return this.stock;
    };
    Route.prototype.setUser = function (user) {
        this.user = user;
    };
    Route.prototype.getUser = function () {
        return this.user;
    };
    Route.prototype.addPointOfSale = function (POS) {
        this.pointsOfSale.push(POS);
        this.pointsOfSaleToRemove = this.pointsOfSaleToRemove.filter(function (val) {
            return val.id != POS.id;
        });
    };
    Route.prototype.removePointOfSale = function (idPointOfSale) {
        this.pointsOfSaleToRemove.push(this.pointsOfSale.filter(function (val) {
            return val.id == idPointOfSale;
        })[0]);
        this.pointsOfSale = this.pointsOfSale.filter(function (val) {
            return val.id != idPointOfSale;
        });
    };
    Route.prototype.getPointsOfSale = function () {
        return this.pointsOfSale;
    };
    Route.prototype.getPointsOfSaleToRemove = function () {
        return this.pointsOfSaleToRemove;
    };
    Route.prototype.reorderPointOfSale = function (position, newPosition) {
        var auxPOS = this.pointsOfSale[newPosition];
        this.pointsOfSale[newPosition] = this.pointsOfSale[position];
        this.pointsOfSale[position] = auxPOS;
    };
    return Route;
}());
exports.Route = Route;
//# sourceMappingURL=route.js.map