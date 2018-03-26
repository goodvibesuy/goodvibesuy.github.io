var masterDBController = require('../bd/masterConnectionsBD');
var acl = require('../motionLibJS/serverSide/acl/motionACL');
var productModel = require('../models/productsModel');
import { MainController } from './mainController';

class ProductsController extends MainController {
    private resource:string;
    constructor() {
        super();
        this.resource = "products";
    }

    public getAll = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                productModel.getAll(dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public get = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                productModel.get(req.params.id, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public add = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                productModel.add(req.body.name, req.body.path_image, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public update = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                productModel.update(req.params.id, req.body.name, req.body.path_image, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public delete = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                productModel.delete(req.params.id, dbName, function (result: any) {
                    res.send(result);
                });
            }
        )
    }

    public removeSupply = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                productModel.deleteSupply(req.params.idProduct, req.params.idSupply, dbName, function (result:any) {                    
                    res.send(result);                    
                });
            }
        )
    }

}

module.exports = new ProductsController();
