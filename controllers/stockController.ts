import  {StockModel} from '../models/stockModel';
import { MainController } from './mainController';

export class StockController extends MainController {
    private resource: string;
    private stockModel:StockModel;
	constructor() {
		super();
        this.resource = 'supplies';
        this.stockModel = new StockModel();
	}

	public getAll = (req: any, res: any): void => {
		this.verifyAccess(req, res, this.resource, (dbName: string) => {
			this.stockModel.getAll(dbName, function(result: any) {
				res.send(result);
			});
		});
	};

	public updateStock = (req: any, res: any): void => {
		this.verifyAccess(req, res, this.resource, (dbName: string) => {
			this.stockModel.updateStock(
				req.params.id,
				req.body.amount,
				dbName,
				function(result: any) {
					res.send(result);
				}
			);
		});
	};
}