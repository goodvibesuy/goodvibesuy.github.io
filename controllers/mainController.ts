import { ControllerDBMaster } from '../motionLibJS/serverSide/masterClientDBFramework/controllers/controllerDBMaster';
import { MasterConnectionsBD } from '../bd/masterConnectionsBD';
var acl = require('../motionLibJS/serverSide/acl/newACL');

export class MainController {
    private masterDBController: ControllerDBMaster;

    constructor() {
        var masterDBConnections  = new MasterConnectionsBD();
        this.masterDBController = masterDBConnections.getController();
    }

    protected verifyAccess(req: any, res: any, resource: string, callBack: (dbName: string) => void): void {
        this.masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'],
            function (err: any, authError: any, response: any, dbName: any) {

                acl.getACL().isAllowed(req.headers['user'], resource, 'get', function (err: any, response: any) {
                    if (response) {
                        callBack(dbName);
                    } else {
                        res.send({ result: -1, message: "messages.PERMISSION_DENIED", data: 'res: ' + resource });
                    }
                })
            });
    }
}
