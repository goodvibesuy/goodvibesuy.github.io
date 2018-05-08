"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var providersController_1 = require("../controllers/providersController");
var express = __importStar(require("express"));
var ProviderRoute = /** @class */ (function () {
    function ProviderRoute() {
    }
    ProviderRoute.prototype.routes = function () {
        var router = express.Router();
        var providersController = new providersController_1.ProvidersController();
        // get all
        router.get('/', providersController.getAll);
        // get
        router.get('/:id', providersController.get);
        // add
        router.post('/', providersController.add);
        // update
        router.put('/:id', providersController.update);
        // delete
        router.delete('/:id', providersController.delete);
        return router;
    };
    return ProviderRoute;
}());
module.exports = new ProviderRoute();
//# sourceMappingURL=providers.js.map