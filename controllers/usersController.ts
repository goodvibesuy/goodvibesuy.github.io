import { UserModel } from '../models/userModel';
import { MainController } from './mainController';

export class UserController extends MainController {
    private userModel: UserModel;
    private resource: string;
    constructor() {
        super();
        this.userModel = new UserModel();
        this.resource = "users";
    }

    public getAll = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource,
            (dbName: string) => {
                this.userModel.users(dbName, function (result: any) {
                    res.send(result);
                });
            }
        );
    }

    public getUserByIdMaster = (idMaster: number, tokenId: string, userName: string,
        rolId: number, accountId: number, dbName: string, req: any, res: any): void => {
        this.userModel.userByIdMaster(idMaster, tokenId, userName, rolId, accountId, dbName, function (result: any) {
            res.send(result);
        });
    }

    public getUserByUserName = (req: any, res: any): void => {
        this.verifyAccess(req, res, this.resource,
            (dbName: string) => {
                this.userModel.userByUserName(req.headers['user'],dbName,function(result:any){
                    res.send(result);
                });
            }
        )
    }
    
}
