import  {SuppliesModel} from '../models/suppliesModel';
import { MainController } from './mainController';

export class SuppliesController extends MainController {
    private resource: string;
    private suppliesModel:SuppliesModel;
	constructor() {
		super();
        this.resource = 'supplies';
        this.suppliesModel = new SuppliesModel();
	}

	public getAll = (req: any, res: any): void => {
		this.verifyAccess(req, res, this.resource, (dbName: string) => {
			this.suppliesModel.getAll(dbName, function(result: any) {
				res.send(result);
			});
		});
	};

	public get = (req: any, res: any): void => {
		this.verifyAccess(req, res, this.resource, (dbName: string) => {
			this.suppliesModel.supplies(dbName, function(result: any) {
				res.send(result);
			});
		});
	};

	public addSupply = (req: any, res: any): void => {
		this.verifyAccess(req, res, this.resource, (dbName: string) => {
			this.suppliesModel.addSupply(
				req.body.name,
				req.body.unit,
				req.body.amount,
				req.body.price_date,
				req.body.idProvider,
				req.body.path_image,
				dbName,
				function(result: any) {
					res.send(result);
				}
			);
		});
	};

	public suppliesByProduct = (req: any, res: any): void => {
		this.verifyAccess(req, res, this.resource, (dbName: string) => {
			this.suppliesModel.suppliesByProduct(req.body.idProduct, dbName, function(result: any) {
				res.send(result);
			});
		});
	};

	public updateSupply = (req: any, res: any): void => {
		this.verifyAccess(req, res, this.resource, (dbName: string) => {
			this.suppliesModel.updateSupply(
				req.params.id,
				req.body.name,
				req.body.unit,
				req.body.amount,
				req.body.price_date,
				req.body.idProvider,
				req.body.path_image,
				dbName,
				function(result: any) {
					res.send(result);
				}
			);
		});
	};

	public deleteSupply = (req: any, res: any): void => {
		this.verifyAccess(req, res, this.resource, (dbName: string) => {
			this.suppliesModel.deleteSupply(req.params.id, dbName, function(result: any) {
				res.send(result);
			});
		});
	};
}