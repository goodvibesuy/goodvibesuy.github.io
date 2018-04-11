var masterDBController = require('../bd/masterConnectionsBD');
var acl = require('../motionLibJS/serverSide/acl/motionACL');

import {MainController} from './mainController';
import {ViewingsModel} from '../models/viewingsModel';

class ViewingsController extends MainController{
    private viewingsModel:ViewingsModel;
    constructor(){        
        super();
        this.viewingsModel = new ViewingsModel();
    }

    public add = (req:any,res:any): void => { 
        this.verifyAccess(req,res,"viewing",
            (dbName:string) =>{
                var data = req.body.data;
                var userName = req.headers['user'];
                this.viewingsModel.addVisit(userName,req.body.idPointOfSale, data, req.body.annotation,req.body.idPOS,req.body.idRoute,dbName,function (result:any) {
                    res.send(result);
                });
            }             
        )
    }

    public last = (req:any,res:any): void => { 
        this.verifyAccess(req,res,"viewing",
            (dbName:string) =>{
                this.viewingsModel.getLast(req.params.cantViews, dbName,function (result:any) {
                    res.send(result);
                });
            }             
        )
    }

    public viewingsByRoute = (req:any,res:any): void => { 
        this.verifyAccess(req,res,"viewing",
            (dbName:string) =>{
                this.viewingsModel.viewingsByRoute(req.params.idRoute, dbName,function (result:any) {
                    res.send(result);
                });
            }             
        )
    }
    

    public getViewingById = (req:any,res:any): void => { 
        this.verifyAccess(req,res,"viewing",
            (dbName:string) =>{
                this.viewingsModel.getViewingById(req.params.idViewing, dbName,function (result:any) {
                    res.send(result);
                });
            }             
        )
    }

    public viewingByRouteAndPOS = (req:any,res:any): void => { 
        this.verifyAccess(req,res,"viewing",
            (dbName:string) =>{ 
                this.viewingsModel.viewingByRouteAndPOS(req.params.idRoute,req.params.idPointOfSale, dbName,function (result:any) {
                    res.send(result);
                });
            }             
        )
    }

}

module.exports = new ViewingsController();