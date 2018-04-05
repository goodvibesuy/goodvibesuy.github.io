"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//var connectionBuilder = require('../../mysql/mysqlConnection');
var mysqlConnection_1 = require("../../mysql/mysqlConnection");
var ControllerDBClientsConnections = /** @class */ (function () {
    function ControllerDBClientsConnections(host, port, userDB, passwordDB) {
        console.log('init creation of  framework client db controller.');
        this.host = host;
        this.port = port;
        this.user = userDB;
        this.password = passwordDB;
        this.connectionPool = [];
        this.zenouraMysql = new mysqlConnection_1.ZenouraMysqlConnection();
    }
    ControllerDBClientsConnections.prototype.getUserConnection = function (databaseName) {
        if (this.connectionPool[databaseName] && this.connectionPool[databaseName] !== undefined) {
            console.log('usando conexion con bd cliente ya existente.');
            return this.connectionPool[databaseName];
        }
        else {
            console.log('intentando crear conexion cliente.');
            var connection = this.zenouraMysql.establishConnection(this.host, this.port, databaseName, this.user, this.password);
            console.log('creando conexion con bd cliente.');
            console.log(this.host);
            console.log(this.port);
            console.log(databaseName);
            this.connectionPool[databaseName] = connection;
            return connection;
        }
    };
    ;
    return ControllerDBClientsConnections;
}());
exports.ControllerDBClientsConnections = ControllerDBClientsConnections;
//# sourceMappingURL=controllerDBClient.js.map