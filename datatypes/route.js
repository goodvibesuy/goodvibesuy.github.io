"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var Route = /** @class */ (function () {
    function Route() {
        this.id = 0;
        this.name = "";
        this.date = new Date();
        this.user = new user_1.User();
        this.customers = new Array();
        this.customersToRemove = new Array();
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
    Route.prototype.addCustomer = function (c) {
        this.customers.push(c);
        this.customersToRemove = this.customersToRemove.filter(function (val) {
            return val.id != c.id;
        });
    };
    Route.prototype.removeCustomer = function (idCustomer) {
        this.customersToRemove.push(this.customers.filter(function (val) {
            return val.id == idCustomer;
        })[0]);
        this.customers = this.customers.filter(function (val) {
            return val.id != idCustomer;
        });
    };
    Route.prototype.getCustomers = function () {
        return this.customers.map(function (c) { return c; });
    };
    Route.prototype.getCustomersToRemove = function () {
        return this.customersToRemove;
    };
    Route.prototype.reorderCustomer = function (position, newPosition) {
        var auxPOS = this.customers[newPosition];
        this.customers[newPosition] = this.customers[position];
        this.customers[position] = auxPOS;
    };
    return Route;
}());
exports.Route = Route;
//# sourceMappingURL=route.js.map