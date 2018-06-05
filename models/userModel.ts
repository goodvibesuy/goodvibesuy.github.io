import { ControllerDBClientsConnections } from '../motionLibJS/serverSide/masterClientDBFramework/controllers/controllerDBClient';

//var MasterDBController = require('../bd/masterConnectionsBD');
// import { MasterConnectionDB } from '../bd/masterConnectionsBD';
import { ClientConnectionsBD } from '../bd/clientConnectionsBD';
// import { Role } from '../datatypes/role';
import { Result, ResultWithData, ResultCode } from '../datatypes/result';

export class UserModel {
    private controllerConnections: ControllerDBClientsConnections;
    private masterDBController: any
    constructor() {
        var clientConnection: ClientConnectionsBD = new ClientConnectionsBD();
        this.controllerConnections = clientConnection.getController();

        // this.masterDBController = MasterDBController.getController();
    }

    users(dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("SELECT * FROM users ", function (err: any, result: any) {
                    if (err) {
                        con.release();
                        console.log(err);
                    } else {
                        con.release();
                        if (err) throw err;
                        callBack({ result: 1, message: "OK", data: result });
                    }
                });
            }
        });
    };

    userByUserName(username: string, dbName: string, callBack: (r: ResultWithData<any[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("SELECT id,user_name,firstname,lastname,rol_id FROM users WHERE user_name = ?", [username], function (err: any, result: any) {
                    if (err) {
                        con.release();
                        console.log(err);
                    } else {
                        con.release();
                        if (err) throw err;
                        callBack({ result: 1, message: "OK", data: result });
                    }
                });
            }
        });
    };

    userByIdMaster(idMaster: number, tokenId: string, userName: string, rolId: number, accountId: number,
        dbName: string, callBack: (r: any) => void): void {
        var now = new Date();
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {                
                console.error(err);
                callBack({ result: -1, message: "Error", data: err });
            } else {
                console.warn("Sacar lo que manda el rol para afuera");
                con.query(
                    "SELECT * FROM users WHERE id_user_master = ?", [idMaster],
                    function (err: any, userResult: any) {
                        con.release();
                        if (err) {
                            console.error(now.toString(), " => ", err);
                            callBack({
                                result: false, message: "Fallo la autenticacion."
                            });
                        } else {
                            if (userResult.length > 0) {
                                callBack({
                                    result: true, tokenId, user: userName, rolId, accountId, message: ""
                                });
                            }
                        }
                    });
            }
        });
    };

    // public getUserRole(idUser: number, callBack: (r: ResultWithData<Role>) => void): void {
    //     // masterDBController.
    //     var pool = this.controllerConnections.getUserConnection(dbName);
    //     pool.getConnection(function (err: any, con: any) {
    //         if (err) {
    //             con.release();
    //             console.error(err);
    //         } else {
    //             con.query("SELECT id,user_name,firstname,lastname,rol_id FROM users WHERE user_name = ?", [username], function (err: any, result: any) {
    //                 if (err) {
    //                     con.release();
    //                     console.log(err);
    //                 } else {
    //                     con.release();
    //                     if (err) throw err;
    //                     callBack({ result: 1, message: "OK", data: result });
    //                 }
    //             });
    //         }
    //     });
    // };
}