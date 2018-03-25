import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { MainController } from './mainController';
var kpisModel = require('../models/kpisModel');

class KPIController extends MainController {
    constructor() {
        super();
        console.log("KPI Controller");
    }

    public suppliesPrices = (req: any, res: any): void => {
        this.verifyAccess(req, res,
            (dbName: string) => {
                kpisModel.suppliesPrices(req.params.supplyId,dbName, function (response:any) {
                    res.send(response);
                });
            }
        )
    }

    public kpiDeliveryReturnEmpty = (req: any, res: any): void => {
        this.verifyAccess(req, res,
            (dbName: string) => {
                kpisModel.kpiDeliveryReturnEmpty(dbName, function (response:any) {
                    res.send(response);
                });
            }
        )
    }

    public sales = (req: any, res: any): void => {
        this.verifyAccess(req, res,
            (dbName: string) => {
                kpisModel.sales(function (response:any) {
                    res.send(response);
                });
            }
        )
    }

}

module.exports = new KPIController();