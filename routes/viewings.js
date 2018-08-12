"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var viewingsController_1 = require("../controllers/viewingsController");
var Viewings = /** @class */ (function () {
    function Viewings() {
    }
    Viewings.prototype.routes = function () {
        var router = express.Router();
        var viewingsController = new viewingsController_1.ViewingsController();
        router.get('/viewingsBetween/:sourceYear/:sourceMonth/:sourceDay/:lastYear/:lastMonth/:lastDay/:idPos/:idProduct', viewingsController.viewingsBetween);
        router.get('/viewingsByRoute/:idRoute', viewingsController.viewingsByRoute);
        router.get('/getRouteDelivery/:idRoute', viewingsController.getRouteDelivery);
        router.get('/getViewingbyId/:idViewing', viewingsController.getViewingById);
        router.post('/', viewingsController.add);
        router.post('/countDeliveryProductsInViewings', viewingsController.countDeliveryProductsInViewings);
        router.get('/wasVisited/:idRoute/:idPointOfSale', viewingsController.viewingByRouteAndPOS);
        router.get('/viewingProductTypes', viewingsController.viewingProductTypes);
        router.delete('/:id', viewingsController.delete);
        return router;
    };
    return Viewings;
}());
module.exports = new Viewings();
//# sourceMappingURL=viewings.js.map