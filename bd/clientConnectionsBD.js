"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controllerDBClient_1 = require("../motionLibJS/serverSide/masterClientDBFramework/controllers/controllerDBClient");
var ClientConnectionsBD = /** @class */ (function () {
    function ClientConnectionsBD() {
        this.host = "127.0.0.1";
        this.port = 3306;
        this.user = "root";
        this.psw = "";
        this.controller = new controllerDBClient_1.ControllerDBClientsConnections(this.host, this.port, this.user, this.psw);
    }
    ClientConnectionsBD.prototype.getController = function () {
        return this.controller;
    };
    ClientConnectionsBD.prototype.getUserConnection = function (databaseName) {
    };
    ;
    return ClientConnectionsBD;
}());
exports.ClientConnectionsBD = ClientConnectionsBD;
//# sourceMappingURL=clientConnectionsBD.js.map