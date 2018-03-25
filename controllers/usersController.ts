var masterDBController = require('../bd/masterConnectionsBD');
var acl = require('../motionLibJS/serverSide/acl/motionACL');
var userModel = require('../models/userModel');
import {MainController} from './mainController';

class UserController extends MainController{

    constructor(){        
        super();
    }

    public getAll = (req:any,res:any): void => { 
        this.verifyAccess(req,res,
            (dbName:string) =>{
                userModel.users(dbName, function (result:any) {
                    res.send(result);
                });
            }             
        )
    }
}

module.exports = new UserController();