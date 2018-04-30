"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysqlConnection_1 = require("../../mysql/mysqlConnection");
var MasterDatabaseConnection = /** @class */ (function () {
    function MasterDatabaseConnection(host, port, databaseName, userDB, passwordDB) {
        this.databaseName = databaseName;
        this.zenouraMysql = new mysqlConnection_1.ZenouraMysqlConnection();
        console.log('Establishing connection with Master Database...');
        this.connection = this.zenouraMysql.establishConnection(host, port, databaseName, userDB, passwordDB);
        if (this.connection)
            console.log('Connection established on Master Database');
        else
            console.log('Failed to establish connection with Master Database');
    }
    MasterDatabaseConnection.prototype.getConnection = function () {
        return this.connection;
    };
    return MasterDatabaseConnection;
}());
exports.MasterDatabaseConnection = MasterDatabaseConnection;
//# sourceMappingURL=MasterDatabaseConnection.js.map