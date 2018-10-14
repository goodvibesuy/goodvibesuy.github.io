"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var stockController_1 = require("../controllers/stockController");
var express = __importStar(require("express"));
var SuppliesRoute = /** @class */ (function () {
    function SuppliesRoute() {
    }
    SuppliesRoute.prototype.routes = function () {
        var router = express.Router();
        var stockController = new stockController_1.StockController();
        router.get('/getAll', stockController.getAll);
        router.put('/:id', stockController.updateStock);
        return router;
    };
    return SuppliesRoute;
}());
module.exports = new SuppliesRoute();
//# sourceMappingURL=stock.js.map