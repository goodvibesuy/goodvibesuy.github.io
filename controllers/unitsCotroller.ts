var masterDBController = require('../bd/masterConnectionsBD');
var acl = require('../motionLibJS/serverSide/acl/motionACL');
import {UnitsModel} from '../models/unitsModel';
import {MainController} from './mainController';

class UnitsController extends MainController{
    private unitsModel:UnitsModel;
    constructor(){        
        super();
        this.unitsModel = new UnitsModel();
    }

    public getAll = (req:any,res:any): void => { 
        this.verifyAccess(req,res,"users",
            (dbName:string) =>{
                this.unitsModel.getAll(dbName, function (result:any) {
                    res.send(result);
                });
            }             
        );
    }

    public add = (req:any,res:any): void => { 
        this.verifyAccess(req,res,"users",
            (dbName:string) =>{
                this.unitsModel.add(req.body.name,dbName, function (result:any) {
                    res.send(result);
                });
            }             
        );
    }

    public update = (req:any,res:any): void => { 
        this.verifyAccess(req,res,"users",
            (dbName:string) =>{
                this.unitsModel.update(req.body.id,req.body.name,dbName, function (result:any) {
                    res.send(result);
                });
            }             
        );
    }

    public delete = (req:any,res:any): void => { 
        this.verifyAccess(req,res,"users",
            (dbName:string) =>{
                this.unitsModel.delete(req.body.id,dbName, function (result:any) {
                    res.send(result);
                });
            }             
        );
    }

}

module.exports = new UnitsController();