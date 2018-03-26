var masterDBController = require('../bd/masterConnectionsBD');
var acl = require('../motionLibJS/serverSide/acl/motionACL');
import {UserModel} from '../models/userModel';
import {MainController} from './mainController';

class UserController extends MainController{
    private userModel:UserModel;
    constructor(){        
        super();
        this.userModel = new UserModel();
    }

    public getAll = (req:any,res:any): void => { 
        this.verifyAccess(req,res,"users",
            (dbName:string) =>{
                this.userModel.users(dbName, function (result:any) {
                    res.send(result);
                });
            }             
        );
    }
}

module.exports = new UserController();