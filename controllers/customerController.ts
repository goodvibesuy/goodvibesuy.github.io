import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { MainController } from './mainController';
import { CustomerModel } from '../models/customerModel';

export class CustomerController extends MainController {

    private resource: string;
    private customerModel: CustomerModel;

    constructor() {
        super();
        this.resource = "pos";
        this.customerModel = new CustomerModel();
    }

    public get = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource, (dbName: string) => {
                this.customerModel.get(req.params.id, dbName, function (result: any) {
                    res.send(result);
                });
            }
        );
    }
}