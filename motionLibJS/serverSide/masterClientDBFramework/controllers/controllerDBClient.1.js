
function ControllerDBClientsConnections(host, port, userDB, passwordDB) {
    console.log('init creation of  framework client db controller');
    this.host = host;
    this.port = port;
    this.user = userDB;
    this.password = passwordDB;
    this.connectionPool = [];

    this.connectionBuilder = require('../../mysql/mysqlConnection');
    console.log('framework client db controller created succesfully');

    this.getUserConnection = function (databaseName) {
        if (this.connectionPool[databaseName]) {
            console.log('usando conexion con bd cliente ya existente');
            return this.connectionPool[databaseName];
        } else {
            console.log('intentando crear conexion cliente');
            var connection = new this.connectionBuilder(this.host, this.port, databaseName,
                this.user, this.password);
            console.log('creando conexion con bd cliente');
            console.log(this.host);
            console.log(this.port);
            console.log(databaseName);
            this.connectionPool[databaseName] = connection;
            return connection;
        }
    };
}

module.exports = ControllerDBClientsConnections;