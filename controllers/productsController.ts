var masterDBController = require('../bd/masterConnectionsBD');
var acl = require('../motionLibJS/serverSide/acl/motionACL');
import { MainController } from './mainController';
import {ProductModel} from '../models/productsModel'

class ProductsController extends MainController {
    private resource:string;
    private productModel:ProductModel;
    constructor() {
        super();
        this.resource = "products";
        this.productModel = new ProductModel();
    }

    public getAll = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                this.productModel.getAll(dbName, function (result: any) {
                    res.send(result);
                });
            }
        );
    }

    public get = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                this.productModel.get(req.params.id, dbName, function (result: any) {
                    res.send(result);
                });
            }
        );
    }

    public pricesByProduct = (req:any, res:any):void =>{
        this.verifyAccess(req, res, this.resource, (dbName: string) => {
            this.productModel.pricesByProduct(req.params.idProduct,dbName,function (result: any) {
                res.send(result);
            });
        });
    }

    public priceByProductByPOS = (req:any,res:any):void =>{
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                this.productModel.priceByProductByPOS(req.params.idProduct,req.params.idPOS,dbName,function (result: any) {
                    res.send(result);
                });
            }
        );
    }
    

    public add = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                this.productModel.add(req.body.name, req.body.path_image, dbName, function (result: any) {
                    res.send(result);
                });
            }
        );
    }

    public update = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                this.productModel.update(req.body.product, dbName, function (result: any) {
                    res.send(result);
                });
            }
        );
    }

    public delete = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                this.productModel.delete(req.params.id, dbName, function (result: any) {
                    res.send(result);
                });
            }
        );
    }

    public removeSupply = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource,
            (dbName: string) => {
                this.productModel.deleteSupply(req.params.idProduct, req.params.idSupply, dbName, function (result:any) {                    
                    res.send(result);                    
                });
            }
        );
    }
}

module.exports = new ProductsController();
