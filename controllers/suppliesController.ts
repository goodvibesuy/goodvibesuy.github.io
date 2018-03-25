var masterDBController = require('../bd/masterConnectionsBD');
var acl = require('../motionLibJS/serverSide/acl/motionACL');
var suppliesModel = require('../models/suppliesModel');
import {MainController} from './mainController';

class SuppliesController extends MainController{

    constructor(){        
        super();
    }

    public getAll = (req:any,res:any): void => { 
        this.verifyAccess(req,res,
            (dbName:string) =>{
                suppliesModel.getAll(dbName,function(result:any) {
                    res.send(result);
                });
            }             
        )
    }

    public get = (req:any,res:any): void => { 
        this.verifyAccess(req,res,
            (dbName:string) =>{
                suppliesModel.supplies(dbName,function(result:any) {
                    res.send(result);
                });
            }             
        )
    }

    public addSupply = (req:any,res:any): void => { 
        this.verifyAccess(req,res,
            (dbName:string) =>{
                suppliesModel.addSupply(req.body.name, req.body.unit, req.body.amount, req.body.path_image,dbName, function(result:any) {
                    res.send(result);
                });
            }             
        )
    }

    public suppliesByProduct = (req:any,res:any): void => { 
        this.verifyAccess(req,res,
            (dbName:string) =>{
                suppliesModel.suppliesByProduct(req.body.idProduct, dbName,function(result:any) {
                    res.send(result);
                });
            }             
        )
    }

    public updateSupply = (req:any,res:any): void => { 
        this.verifyAccess(req,res,
            (dbName:string) =>{
                suppliesModel.updateSupply(
                    req.params.id,
                    req.body.name,
                    req.body.unit,
                    req.body.amount,
                    req.body.path_image,
                    dbName,
                    function(result:any) {
                        res.send(result);
                    }
                );
            }             
        )
    }

    public deleteSupply = (req:any,res:any): void => { 
        this.verifyAccess(req,res,
            (dbName:string) =>{
                suppliesModel.deleteSupply(req.params.id,dbName, function(result:any) {
                    res.send(result);
                });
            }             
        )
    }

}

module.exports = new SuppliesController();