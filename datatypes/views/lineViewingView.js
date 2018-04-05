"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LineViewingView = /** @class */ (function () {
    function LineViewingView(date, pos, idViewing) {
        this.date = date;
        this.pos = pos;
        this.products = new Array();
        this.idViewing = idViewing;
    }
    LineViewingView.prototype.setProducts = function (products) {
        this.products = products;
    };
    LineViewingView.prototype.getDetailProduct = function (idProduct) {
        return this.products.filter(function (input) { return input.idproduct === idProduct; });
    };
    LineViewingView.prototype.getTransactionByProductByType = function (idProduct, type) {
        return this.products.filter(function (input) { return input.idproduct === idProduct; }).filter(function (item) { return item.type === type; });
    };
    LineViewingView.prototype.getQuantityTransactionType = function (type) {
        var transactionsTypes = this.products.filter(function (item) { return item.type === type; });
        return transactionsTypes.reduce(function (a, b) {
            return a + b["quantity"];
        }, 0);
    };
    /*
    products
    {idviewing: 2, idproduct: 1, quantity: 3, type: "delivery"}
    {idviewing: 2, idproduct: 1, quantity: 1, type: "return"}
    {idviewing: 2, idproduct: 1, quantity: 0, type: "empty"}
    */
    LineViewingView.prototype.getDate = function () {
        return this.date;
    };
    LineViewingView.prototype.getPointOfSale = function () {
        return this.pos;
    };
    LineViewingView.prototype.getIdViewing = function () {
        return this.idViewing;
    };
    LineViewingView.prototype.setPointOfSale = function (pos) {
        this.pos = pos;
    };
    LineViewingView.prototype.setDate = function (date) {
        this.date = date;
    };
    LineViewingView.prototype.addProduct = function (productViewing) {
        this.products.push(productViewing);
    };
    LineViewingView.prototype.getProducts = function () {
        return this.products;
    };
    return LineViewingView;
}());
exports.LineViewingView = LineViewingView;
//# sourceMappingURL=lineViewingView.js.map