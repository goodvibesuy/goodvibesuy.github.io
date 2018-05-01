import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { MainController } from './mainController';
import { ClientModel } from '../models/clientModel';

export class ClientController extends MainController {

    private resource: string;
    private clientModel: ClientModel;

    constructor() {
        super();
        this.resource = "pos";
        this.clientModel = new ClientModel();
    }

    public get = (req: any, res: any): void => {
        this.verifyAccess(req, res,this.resource, (dbName: string) => {
                this.clientModel.get(req.params.id, dbName, function (result: any) {
                    res.send(result);
                });
            }
        );
    }

    public getAll = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource, (dbName: string) => {
            this.clientModel.getAll(dbName, function (result: any) {
                res.send(result);
            });
        });
    };

    public add = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource, (dbName: string) => {
            this.clientModel.add(req.body.client, dbName, function (result: any) {
                res.send(result);
            });
        });
    };

    public update = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource,
            (dbName: string) => {
                this.clientModel.update(req.body.client, dbName, function (result: any) {
                    res.send(result);
                });
            }
        );
    };

    public delete = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource, (dbName: string) => {
            this.clientModel.delete(req.params.id, dbName, function (result: any) {
                res.send(result);
            });
        });
    };
}