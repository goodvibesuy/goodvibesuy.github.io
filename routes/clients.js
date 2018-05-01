"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var clientController_1 = require("../controllers/clientController");
var express = __importStar(require("express"));
var ClientRoute = /** @class */ (function () {
    function ClientRoute() {
    }
    ClientRoute.prototype.routes = function () {
        var router = express.Router();
        var clientController = new clientController_1.ClientController();
        // get all
        router.get('/', clientController.getAll);
        // get
        router.get('/:id', clientController.get);
        // add
        router.post('/', clientController.add);
        // update
        router.put('/:id', clientController.update);
        // delete
        router.delete('/:id', clientController.delete);
        return router;
    };
    return ClientRoute;
}());
module.exports = new ClientRoute();
//# sourceMappingURL=clients.js.map