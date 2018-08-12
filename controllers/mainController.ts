/*
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
*/

import { MasterConnectionsBD } from '../bd/masterConnectionsBD';
import { ControllerDBMaster } from '../motionLibJS/serverSide/masterClientDBFramework/controllers/controllerDBMaster';
//import { NewACL } from '../motionLibJS/serverSide/acl/newACL';
var acl = require('../motionLibJS/serverSide/acl/newACL');
import { ControllerDBClientsConnections } from '../motionLibJS/serverSide/masterClientDBFramework/controllers/controllerDBClient';
import { ClientConnectionsBD } from '../bd/clientConnectionsBD';
import { ResultCode } from '../datatypes/result';
import * as express from 'express';

export class MainController {
    protected masterConnectionsBD: MasterConnectionsBD;
    protected controllerConnections: ControllerDBClientsConnections;
    protected masterDBController: ControllerDBMaster;
    //protected acl: NewACL;

    constructor() {
        this.masterConnectionsBD = new MasterConnectionsBD();

        //this.acl = new NewACL();
        var clientConnection: ClientConnectionsBD = new ClientConnectionsBD();
        this.controllerConnections = clientConnection.getController();
        this.masterDBController = this.masterConnectionsBD.getController();
    }

    protected verifyAccess(req: express.Request, res: express.Response, resource: string, callBack: (dbName: string) => void): void {
        let user: string = <string>req.headers['user'];
        let tokenId: string = <string>req.headers['tokenid'];
        let accountId: number = parseInt(<string>req.headers['accountid']);

        this.masterDBController.verifySession(user, tokenId, accountId, (err: any, authError: any, response: any, dbName: any) => {
            if (err || authError) {
                res.send({
                    result: ResultCode.Error,
                    message: "messages.UNVERIFIED_SESSION",
                    data: `Sesion no verificada para el usuario ${user}. Detalles: ${err} ${authError}`
                });
            } else {
                acl.getACL().isAllowed(user, resource, 'get', (err: any, response: any) => {
                    if (response) {
                        callBack(dbName);
                    } else {
                        res.send({
                            result: ResultCode.Error,
                            message: "messages.PERMISSION_DENIED",
                            data: 'res: ' + resource
                        });
                    }
                })
            }
        });
    }

    protected getConnection(dbName: string, res: any, callBack: (con: any) => void): void {
        var mainThis = this;
        var pool = mainThis.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                console.error(err);
                if (con && con.release) {
                    con.release();
                }
                res.send({
                    result: ResultCode.Error,
                    message: "Error al crear la conexion"
                });
            } else {
                try {
                    callBack(con);
                } finally {
                    if (con && con.release) {
                        con.release();
                    }
                }
            }
        });
    }

    protected catchError(req: express.Request, res: express.Response, wrappedFn: () => void): void {
        try {
            wrappedFn();
        }
        catch (err) {
            console.error(new Date() + ': ' + err);
            res.send({ result: ResultCode.Error, message: "Error interno." });
        }
    }

    protected errorHandler(dbName: string, wrappedFn: () => void): void {
        try {
            wrappedFn();
        }
        catch (err) {
            // TODO: insertar en la base de datos
            console.error(err);

            // var pool = this.controllerConnections.getUserConnection(dbName);
            //     pool.getConnection( (err: any, con: any) => {
            //         if (!!err) {
            //             super.errorModel(con, err, callBack);
            //         } else {
            //             const QUERY: string = 'SELECT * FROM BreakType';
            //             con.query(QUERY, function (err: any, result: any[]) {
            //                 if (!!err) {
            //                     mainThis.errorModel(con, err, callBack);
            //                 } else {                        
            //                     con.release();
            //                     callBack({
            //                         result: ResultCode.OK,
            //                         message: 'OK',
            //                         data: result
            //                     });
            //                 }
            //             });
            //         }
            //     });
        }
    }
}
