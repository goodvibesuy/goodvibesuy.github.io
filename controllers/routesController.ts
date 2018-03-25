//https://github.com/Microsoft/TypeScript/wiki/'this'-in-TypeScript
var masterDBController = require('../bd/masterConnectionsBD');
var acl = require('../motionLibJS/serverSide/acl/motionACL');
var travelModel = require('../models/travelModel');
import { MainController } from './mainController';

class RoutesController extends MainController {

    constructor() {
        super();
    }

    public getAll = (req: any, res: any): void => {
        this.verifyAccess(req, res,
            (dbName: string) => {
                travelModel.getAll(dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public add = (req: any, res: any): void => {
        this.verifyAccess(req, res,
            (dbName: string) => {
                travelModel.add(req.body.name, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public update = (req: any, res: any): void => {
        this.verifyAccess(req, res,
            (dbName: string) => {
                travelModel.update(req.body.name, req.body.idroute, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }



    public getPointsOfSales = (req: any, res: any): void => {
        this.verifyAccess(req, res,
            (dbName: string) => {
                travelModel.getPointsOfSales(req.params.idRoute, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public getUsers = (req: any, res: any): void => {
        this.verifyAccess(req, res,
            (dbName: string) => {
                travelModel.getUers(req.params.idRoute, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public addPointOfSale = (req: any, res: any): void => {
        this.verifyAccess(req, res,
            (dbName: string) => {
                travelModel.addPointOfSale(req.body.idRoute, req.body.idPointOfSale, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public addUser = (req: any, res: any): void => {
        this.verifyAccess(req, res,
            (dbName: string) => {
                travelModel.addUser(req.body.idRoute, req.body.idUser, req.body.date, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public removePointOfSale = (req: any, res: any): void => {
        this.verifyAccess(req, res,
            (dbName: string) => {
                travelModel.removePointOfSale(req.params.idRoute, req.params.idPointOfSale, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public removeUser = (req: any, res: any): void => {
        this.verifyAccess(req, res,
            (dbName: string) => {
                travelModel.removeUser(req.params.idRoute, req.params.idUser, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public delete = (req: any, res: any): void => {
        this.verifyAccess(req, res,
            (dbName: string) => {
                travelModel.delete(req.params.id,dbName, function (result:any) {
                    res.send(result);
                });
            }
        )
    }

    

    public reorderPointOfSale = (req: any, res: any): void => {
        this.verifyAccess(req, res,
            (dbName: string) => {
                travelModel.reorderPointOfSale(req.body.idRoute, req.body.idPointOfSale, req.body.position, req.body.newPosition, dbName,
                    function (result: any) {
                        res.send(result);
                    });
            }
        )
    }



}

module.exports = new RoutesController();