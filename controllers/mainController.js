"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var masterDBController = require('../bd/masterConnectionsBD');
var acl = require('../motionLibJS/serverSide/acl/newACL');
var MainController = /** @class */ (function () {
    function MainController() {
    }
    MainController.prototype.verifyAccess = function (req, res, resource, callBack) {
        masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
            acl.getACL().isAllowed(req.headers['user'], resource, 'get', function (err, response) {
                if (response) {
                    callBack(dbName);
                }
                else {
                    res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
                }
            });
        });
    };
    return MainController;
}());
exports.MainController = MainController;
//# sourceMappingURL=mainController.js.map