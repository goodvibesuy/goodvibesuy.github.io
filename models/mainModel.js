"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clientConnectionsBD_1 = require("../bd/clientConnectionsBD");
var MainModel = /** @class */ (function () {
    function MainModel() {
        var clientConnection = new clientConnectionsBD_1.ClientConnectionsBD();
        this.controllerConnections = clientConnection.getController();
    }
    return MainModel;
}());
exports.MainModel = MainModel;
//# sourceMappingURL=mainModel.js.map