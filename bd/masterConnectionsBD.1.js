var masterDBCOntrollerBuilder = require('../motionLibJS/serverSide/masterClientDBFramework/controllers/controllerDBMaster');
var masterDBController = new masterDBCOntrollerBuilder("127.0.0.1", 3306, "master", "root", "", {});

module.exports = masterDBController;