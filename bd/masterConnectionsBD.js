"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controllerDBMaster_1 = require("../motionLibJS/serverSide/masterClientDBFramework/controllers/controllerDBMaster");
var MasterConnectionsBD = /** @class */ (function () {
    function MasterConnectionsBD() {
        this.host = "127.0.0.1";
        this.port = 3306;
        this.databaseName = "master";
        this.user = "root";
        this.psw = "";
        this.controller = new controllerDBMaster_1.ControllerDBMaster(this.host, this.port, this.databaseName, this.user, this.psw, {});
    }
    MasterConnectionsBD.prototype.getController = function () {
        return this.controller;
    };
    return MasterConnectionsBD;
}());
module.exports = new MasterConnectionsBD();
//# sourceMappingURL=masterConnectionsBD.js.map