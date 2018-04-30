
var clientDBCOntrollerBuilder = require('../motionLibJS/serverSide/masterClientDBFramework/controllers/controllerDBClient');
//var clientDBController = new clientDBCOntrollerBuilder("localhost", 3306, "call_client", "call_client_2016");
var clientDBController = new clientDBCOntrollerBuilder("127.0.0.1", 3306, "root", "");


module.exports = clientDBController;