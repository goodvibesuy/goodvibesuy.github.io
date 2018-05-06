"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var suppliesController_1 = require("../controllers/suppliesController");
var express = __importStar(require("express"));
var SuppliesRoute = /** @class */ (function () {
    function SuppliesRoute() {
    }
    SuppliesRoute.prototype.routes = function () {
        var router = express.Router();
        var suppliesController = new suppliesController_1.SuppliesController();
        router.get('/', suppliesController.get);
        router.get('/getAll', suppliesController.getAll);
        router.post('/', suppliesController.addSupply);
        //cambiar por get
        router.post('/suppliesbyproduct', suppliesController.suppliesByProduct);
        router.put('/:id', suppliesController.updateSupply);
        router.delete('/:id', suppliesController.deleteSupply);
        return router;
    };
    return SuppliesRoute;
}());
module.exports = new SuppliesRoute();
//# sourceMappingURL=supplies.js.map