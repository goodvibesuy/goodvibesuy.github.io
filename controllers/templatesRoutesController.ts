//https://github.com/Microsoft/TypeScript/wiki/'this'-in-TypeScript
var masterDBController = require('../bd/masterConnectionsBD');
var travelModel = require('../models/templatesRouteModel');
import { MainController } from './mainController';

class TemplatesRoutesController extends MainController {
    private resource:string;
    constructor() {
        super();
        this.resource = "routes";
    }

    public getAll = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                travelModel.getAll(dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public add = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                travelModel.add(req.body.name, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public update = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                travelModel.update(req.body.name, req.body.idroute, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public getPointsOfSales = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                travelModel.getPointsOfSales(req.params.idRoute, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public addPointOfSale = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                travelModel.addPointOfSale(req.body.idRoute, req.body.idPointOfSale, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public removePointOfSale = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                travelModel.removePointOfSale(req.params.idRoute, req.params.idPointOfSale, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public delete = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                travelModel.delete(req.params.id,dbName, function (result:any) {
                    res.send(result);
                });
            }
        )
    }

    public reorderPointOfSale = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                travelModel.reorderPointOfSale(req.body.idRoute, req.body.idPointOfSale, req.body.position, req.body.newPosition, dbName,
                    function (result: any) {
                        res.send(result);
                    });
            }
        )
    }
}

module.exports = new TemplatesRoutesController();