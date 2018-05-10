"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var usersController_1 = require("../controllers/usersController");
var express = __importStar(require("express"));
var UsersRoute = /** @class */ (function () {
    function UsersRoute() {
    }
    UsersRoute.prototype.routes = function () {
        var router = express.Router();
        var userController = new usersController_1.UserController();
        router.get("/", userController.getAll);
        router.get("/byUserName", userController.getUserByUserName);
        return router;
    };
    return UsersRoute;
}());
module.exports = new UsersRoute();
//# sourceMappingURL=users.js.map