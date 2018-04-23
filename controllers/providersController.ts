var providersModel = require('../models/providersModel');
import {MainController} from './mainController';

class ProvidersController extends MainController{

    private resource:string;
    constructor(){        
        super();
        this.resource = "providers";
    }

    public getAll = (req:any,res:any): void => { 
        this.verifyAccess(req,res,this.resource,
            (dbName:string) =>{
                providersModel.getAll(dbName,function(result:any) {
                    res.send(result);
                });
            }             
        )
    }

    public add = (req:any,res:any): void => { 
        this.verifyAccess(req,res,this.resource,
            (dbName:string) =>{
                providersModel.add(req.body.name,dbName,function(result:any) {
                    res.send(result);
                });
            }             
        )
    }

}

module.exports = new ProvidersController();