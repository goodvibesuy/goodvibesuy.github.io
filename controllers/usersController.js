"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MainController = require('./mainController');
var masterDBController = require('../bd/masterConnectionsBD');
var acl = require('../motionLibJS/serverSide/acl/motionACL');
var userModel = require('../models/userModel');
var UserController = /** @class */ (function () {
    function UserController() {
        console.log("UserController");
    }
    UserController.prototype.getAll = function (req, res) {
        masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
            acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err, response) {
                if (response) {
                    userModel.users(dbName, function (result) {
                        res.send(result);
                    });
                }
                else {
                    res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
                }
            });
        });
    };
    ;
    return UserController;
}());
module.exports = new UserController();
//# sourceMappingURL=usersController.js.map