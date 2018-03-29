//https://github.com/Microsoft/TypeScript/wiki/'this'-in-TypeScript
import { MainController } from './mainController';
import {TemplateRoutesModel} from '../models/templatesRouteModel'

class TemplatesRoutesController extends MainController {
    private resource:string;
    private templateRouteModel:TemplateRoutesModel;
    constructor() {
        super();
        this.templateRouteModel = new TemplateRoutesModel();
        this.resource = "routes";
    }

    public getAll = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                this.templateRouteModel.getAll(dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public add = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                this.templateRouteModel.add(req.body.name, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public update = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                this.templateRouteModel.update(req.body.name, req.body.id, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public getPointsOfSales = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                this.templateRouteModel.getPointsOfSales(req.params.idTemplateRoute, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public addPointOfSale = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                this.templateRouteModel.addPointOfSale(req.body.idTemplateRoute, req.body.idPointOfSale, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public removePointOfSale = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                this.templateRouteModel.removePointOfSale(req.params.idRoute, req.params.idPointOfSale, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public delete = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                this.templateRouteModel.delete(req.params.id,dbName, function (result:any) {
                    res.send(result);
                });
            }
        )
    }

    public reorderPointOfSale = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                this.templateRouteModel.reorderPointOfSale(req.body.idRoute, req.body.idPointOfSale, req.body.position, req.body.newPosition, dbName,
                    function (result: any) {
                        res.send(result);
                    });
            }
        )
    }
}

module.exports = new TemplatesRoutesController();