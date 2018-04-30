"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controllerDBClient_1 = require("../motionLibJS/serverSide/masterClientDBFramework/controllers/controllerDBClient");
var ClientConnectionBD = /** @class */ (function () {
    function ClientConnectionBD() {
        this.host = "127.0.0.1";
        this.port = 3306;
        this.user = "root";
        this.psw = "";
        this.controller = new controllerDBClient_1.ControllerDBClientsConnections(this.host, this.port, this.user, this.psw);
    }
    ClientConnectionBD.prototype.getController = function () {
        return this.controller;
    };
    ClientConnectionBD.prototype.getUserConnection = function (databaseName) {
    };
    ;
    return ClientConnectionBD;
}());
exports.ClientConnectionBD = ClientConnectionBD;
//# sourceMappingURL=clientConnectionBD.js.map