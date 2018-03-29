import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { MainController } from './mainController';
import { PointsOfSaleModel } from '../models/pointsOfSaleModel';

class PointOfSaleController extends MainController {

    private resource: string;
    private pointsOfSaleModel: PointsOfSaleModel;
    constructor() {
        super();
        this.resource = "pos";
        this.pointsOfSaleModel = new PointsOfSaleModel();
    }

    public getAll = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource,
            (dbName: string) => {
                this.pointsOfSaleModel.getAll(dbName, function (result: any) {
                    res.send(result);
                });
            }
        );
    };

    public getPointOfSale = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource,
            (dbName: string) => {
                this.pointsOfSaleModel.getPointOfSale(req.params.idPOS, dbName, function (result: any) {
                    res.send(result);
                });
            }
        );
    };

    public getFilteredByName = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource,
            (dbName: string) => {
                this.pointsOfSaleModel.getFilteredByName(req.params.filterName, dbName, function (result: any) {
                    res.send(result);
                });
            }
        );
    };

    public delete = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource,
            (dbName: string) => {
                this.pointsOfSaleModel.delete(req.params.id, dbName, function (result: any) {
                    res.send(result);
                });
            }
        );
    };

    public add = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource,
            (dbName: string) => {
                this.pointsOfSaleModel.add(req.body.name, req.body.businessName,req.body.contactName,req.body.RUT,req.body.group,req.body.address, req.body.tel, req.body.image, req.body.coords, dbName, function (result: any) {
                    res.send(result);
                });
            }
        );
    };

    public update = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource,
            (dbName: string) => {
                this.pointsOfSaleModel.update(req.body.id, req.body.name,req.body.businessName,req.body.contactName,req.body.RUT, req.body.address, req.body.tel, req.body.image, req.body.coord, dbName,
                    function (result: any) {
                        res.send(result);
                    });
            }
        );
    };
}

module.exports = new PointOfSaleController();