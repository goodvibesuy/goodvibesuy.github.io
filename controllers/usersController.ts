import { Result, ResultWithData, ResultCode } from '../datatypes/result';
var  MainController  = require('./mainController');
var masterDBController = require('../bd/masterConnectionsBD');
var acl = require('../motionLibJS/serverSide/acl/motionACL');
var userModel = require('../models/userModel');

class UserController {

    constructor() {
        console.log("UserController");
    }


    getAll(req:any,res:any): void {        
        masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err:any, authError:any, response:any, dbName:any) {
            acl.getACL().isAllowed(req.headers['user'], 'routes', 'get', function (err:any, response:any) {
                if (response) {
                    userModel.users(dbName, function (result:any) {
                        res.send(result);
                    });
                } else {
                    res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: null });
                }
            })
        }); 
    };
}

module.exports = new UserController();