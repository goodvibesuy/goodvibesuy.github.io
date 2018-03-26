var masterDBController = require('../bd/masterConnectionsBD');
var acl = require('../motionLibJS/serverSide/acl/motionACL');
var viewingsModel = require('../models/viewingsModel');
import {MainController} from './mainController';

class ViewingsController extends MainController{

    constructor(){        
        super();
    }

    public add = (req:any,res:any): void => { 
        this.verifyAccess(req,res,"viewing",
            (dbName:string) =>{
                var data = req.body.data;
                viewingsModel.addVisit(req.headers['user'],req.body.idPointOfSale, data, dbName,function (result:any) {
                    res.send(result);
                });
            }             
        )
    }
}

module.exports = new ViewingsController();