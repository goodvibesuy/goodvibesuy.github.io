"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql');
var ZenouraMysqlConnection = /** @class */ (function () {
    function ZenouraMysqlConnection() {
        //30
        this.connectionLimit = 20;
        this.db_config = {};
        this.pool = null;
    }
    ZenouraMysqlConnection.prototype.establishConnection = function (host, port, databaseName, user, password) {
        if (this.pool === null) {
            this.db_config = {
                connectionLimit: this.connectionLimit,
                host: host,
                port: port,
                user: user,
                password: password,
                database: databaseName
            };
            console.log("Creando pool");
            this.pool = mysql.createPool(this.db_config);
        }
        return this.pool;
    };
    return ZenouraMysqlConnection;
}());
exports.ZenouraMysqlConnection = ZenouraMysqlConnection;
/*
function establishConnection(host, port, databaseName, user, password) {
  db_config = {
    host: host,
    port: port,
    user: user,
    password: password,
    database: databaseName
  };
  connection = mysql.createConnection(db_config);

  setInterval(function () {
    var now = new Date();
    console.log(now.toString(), "++ => ++" + db_config.database);
    connection.query('SELECT 1');
  }, 1000 * 60 * 30);

  return handleDisconnect();
}

function handleDisconnect() {
  connection.connect(function (err) {              // The server is either down
    if (err) {                                     // or restarting (takes a while sometimes).
      console.error('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
  // If you're also serving http, display a 503 error.
  connection.on('error', function (err) {
    console.error('db error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      
      
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
  return connection;
}
*/ 
//# sourceMappingURL=mysqlConnection.js.map