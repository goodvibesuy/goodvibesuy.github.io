import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { MainController } from './mainController';
import { GroupPosModel } from '../models/groupCustomerModel';

class GroupCustomerController extends MainController {

    private resource: string;
    private groupPosModel: GroupPosModel;
    constructor() {
        super();
        this.resource = "pos";
        this.groupPosModel = new GroupPosModel();
    }

    public getAll = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource,
            (dbName: string) => {
                this.groupPosModel.getAll(dbName, function (result: any) {
                    res.send(result);
                });
            }
        );
    };
}

module.exports = new GroupCustomerController();