//https://github.com/Microsoft/TypeScript/wiki/'this'-in-TypeScript
var masterDBController = require('../bd/masterConnectionsBD');
var acl = require('../motionLibJS/serverSide/acl/motionACL');

import { MainController } from './mainController';
import { TravelModel } from '../models/travelModel';

class RoutesController extends MainController {
    private resource: string;
    private travelModel: TravelModel;
    constructor() {
        super();
        this.resource = "routes";
        this.travelModel = new TravelModel();
    }

    public getAll = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource,
            (dbName: string) => {
                this.travelModel.getAll(dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public add = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource,
            (dbName: string) => {
                this.travelModel.add(req.body.route, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public update = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource,
            (dbName: string) => {
                //this.travelModel.update(req.body.name, req.body.idroute, dbName, function (result: any) {
                this.travelModel.update(req.body.route, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public getPointsOfSales = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource,
            (dbName: string) => {
                this.travelModel.getPointsOfSales(req.params.idRoute, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public getStock = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource,
            (dbName: string) => {
                this.travelModel.getStock(req.params.idRoute, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public getUsers = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource,
            (dbName: string) => {
                this.travelModel.getUers(req.params.idRoute, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public getRoutesByUser = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource,
            (dbName: string) => {
                this.travelModel.getRoutesByUser(req.params.user, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public getRoutesByUserId = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource,
            (dbName: string) => {
                this.travelModel.getRoutesByUserId(req.params.idUser, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public addPointOfSale = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource,
            (dbName: string) => {
                this.travelModel.addPointOfSale(req.body.idRoute, req.body.idPointOfSale, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }    

    public addUser = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource,
            (dbName: string) => {
                this.travelModel.addUser(req.body.idRoute, req.body.idUser, req.body.date, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public removePointOfSale = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource,
            (dbName: string) => {
                this.travelModel.removePointOfSale(req.params.idRoute, req.params.idPointOfSale, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public removeUser = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource,
            (dbName: string) => {
                this.travelModel.removeUser(req.params.idRoute, req.params.idUser, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public delete = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource,
            (dbName: string) => {
                this.travelModel.delete(req.params.id, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public reorderPointOfSale = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource,
            (dbName: string) => {
                this.travelModel.reorderPointOfSale(req.body.idRoute, req.body.idPointOfSale, req.body.position, req.body.newPosition, dbName,
                    function (result: any) {
                        res.send(result);
                    });
            }
        )
    }
}

module.exports = new RoutesController();