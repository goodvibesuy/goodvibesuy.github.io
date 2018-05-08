import { ProvidersModel } from '../models/providersModel';
import { MainController } from './mainController';

export class ProvidersController extends MainController {

    private static readonly resource: string = "providers";

    private providersModel: ProvidersModel;

    constructor() {
        super();
        this.providersModel = new ProvidersModel();
    }

    public getAll = (req: any, res: any): void => {
        this.verifyAccess(req, res, ProvidersController.resource, (dbName: string) => {
            this.providersModel.getAll(dbName, (result: any) => {
                res.send(result);
            });
        });
    }

    public get = (req: any, res: any): void => {
        this.verifyAccess(req, res, ProvidersController.resource, (dbName: string) => {
            this.providersModel.get(req.params.id, dbName, (result: any) => {
                res.send(result);
            });
        });
    }

    public add = (req: any, res: any): void => {
        this.verifyAccess(req, res, ProvidersController.resource, (dbName: string) => {
            this.providersModel.add(req.body, dbName, (result: any) => {
                res.send(result);
            });
        });
    }

    public update = (req: any, res: any): void => {
        this.verifyAccess(req, res, ProvidersController.resource, (dbName: string) => {
            this.providersModel.update(req.params.id, req.body, dbName, (result: any) => {
                res.send(result);
            });
        });
    };

    public delete = (req: any, res: any): void => {
        this.verifyAccess(req, res, ProvidersController.resource, (dbName: string) => {
            this.providersModel.delete(req.params.id, dbName, (result: any) => {
                res.send(result);
            });
        });
    };
}
