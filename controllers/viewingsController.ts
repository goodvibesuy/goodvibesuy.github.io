//var masterDBController = require('../bd/masterConnectionsBD');
//var acl = require('../motionLibJS/serverSide/acl/motionACL');

import { MainController } from './mainController';
import { ViewingsModel } from '../models/viewingsModel';

export class ViewingsController extends MainController {

    private viewingsModel: ViewingsModel;
    private resource: string;

    constructor() {
        super();
        this.resource = "viewing";
        this.viewingsModel = new ViewingsModel();
    }


    public countDeliveryProductsInViewings = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource, (dbName: string) => {
            this.getConnection(dbName, res, (con: any) => {
                this.viewingsModel.countDeliveryProductsInViewings(req.body.idsViewings, con, (result: any) => {
                    res.send(result);
                })
            });
        });
        //public countDeliveryProductsInViewings(idsViewings: number[], con: any, callBack: (r: ResultWithData<any[]>) => void): void {
    }

    public add = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource, (dbName: string) => {
            var data = req.body.data;
            var userName = req.headers['user'];
            this.viewingsModel.viewingProductTypes(dbName, (productTypesMovements: any) => {
                console.log("productTypesMovements", productTypesMovements);
                if (productTypesMovements.result > 0) {
                    this.viewingsModel.addVisit(userName, req.body.idPointOfSale, data, req.body.annotation, req.body.idPOS,
                        req.body.idRoute, productTypesMovements.data ,dbName, function (result: any) {
                            res.send(result);
                        });
                }else{
                    res.send(productTypesMovements);
                }
            });
        }
        );
    }

    /*
    public last = (req:any,res:any): void => { 
        this.verifyAccess(req,res,"viewing",
            (dbName:string) =>{
                this.viewingsModel.getLast(req.params.cantViews, dbName,function (result:any) {
                    res.send(result);
                });
            }             
        )
    }
    */

    public viewingsBetween = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource, (dbName: string) => {
            this.viewingsModel.viewingsBetween(req.params.sourceYear, req.params.sourceMonth, req.params.sourceDay,
                req.params.lastYear, req.params.lastMonth, req.params.lastDay, Number(req.params.idPos), Number(req.params.idProduct),
                dbName, function (result: any) {
                    res.send(result);
                });
        }
        )
    }


    public viewingsByRoute = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource, (dbName: string) => {
            this.viewingsModel.viewingsByRoute(req.params.idRoute, dbName, function (result: any) {
                res.send(result);
            });
        }
        )
    }

    public getRouteDelivery = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource, (dbName: string) => {
            this.viewingsModel.getRouteDelivery(req.params.idRoute, dbName, function (result: any) {
                res.send(result);
            });
        }
        )
    }


    public getViewingById = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource, (dbName: string) => {
            this.viewingsModel.getViewingById(req.params.idViewing, dbName, function (result: any) {
                res.send(result);
            });
        }
        )
    }

    public viewingByRouteAndPOS = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource, (dbName: string) => {
            this.viewingsModel.viewingByRouteAndPOS(req.params.idRoute, req.params.idPointOfSale, dbName, function (result: any) {
                res.send(result);
            });
        }
        )
    }

    public viewingProductTypes = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource, (dbName: string) => {
            this.viewingsModel.viewingProductTypes(dbName, function (result: any) {
                res.send(result);
            });
        }
        )
    }

    public delete = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource, (dbName: string) => {
            this.viewingsModel.deleteViewing(req.params.id, dbName, function (result: any) {
                res.send(result);
            });
        });
    };
}