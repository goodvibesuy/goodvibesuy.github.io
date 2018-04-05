"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PointOfSale = /** @class */ (function () {
    function PointOfSale() {
        this.id = 0;
        this.name = "";
        this.tel = "";
        this.image = "";
        this.address = "";
    }
    PointOfSale.prototype.setId = function (id) {
        this.id = id;
    };
    PointOfSale.prototype.setName = function (name) {
        this.name = name;
    };
    PointOfSale.prototype.setTel = function (tel) {
        this.tel = tel;
    };
    PointOfSale.prototype.setImage = function (image) {
        this.image = image;
    };
    PointOfSale.prototype.setAddress = function (address) {
        this.address = address;
    };
    return PointOfSale;
}());
exports.PointOfSale = PointOfSale;
//# sourceMappingURL=pointOfSale.js.map