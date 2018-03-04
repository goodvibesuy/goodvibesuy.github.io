var masterDBCOntrollerBuilder = require('../motionLibJS/serverSide/masterClientDBFramework/controllers/controllerDBMaster');
var masterDBController = new masterDBCOntrollerBuilder("127.0.0.1", 3306, "call", "call", "1GTfq=792", {});

module.exports = masterDBController;