import { Result, ResultWithData, ResultCode } from '../datatypes/result';
var masterDBController = require('../bd/masterConnectionsBD');
//var clientDBController = require('../bd/clientConnectionsBD');
import {ClientConnectionsBD} from '../bd/clientConnectionsBD'
import { ControllerDBClientsConnections } from '../motionLibJS/serverSide/masterClientDBFramework/controllers/controllerDBClient';

export class UserModel {
    private controllerConnections:ControllerDBClientsConnections;
    constructor() {
        var clientConnection:ClientConnectionsBD = new ClientConnectionsBD();
        this.controllerConnections = clientConnection.getController();
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
                con.query("SELECT * FROM users WHERE user_name = ?", [username], function (err: any, result: any) {
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

    userByIdMaster(idMaster: number,tokenId:string,userName:string,rolId:number,accountId:number,
                     dbName: string, callBack: (r:any) => void): void {
        var now = new Date();
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection(function (err: any, con: any) {
            if (err) {
                con.release();
                console.error(err);
            } else {
                console.warn("Sacar lo que manda el rol para afuera");
                con.query(
                    "SELECT * FROM users WHERE id_user_master = ?", [idMaster],
                    function (err:any, userResult:any) {
                        con.release();
                        if (err) {
                            console.error(now.toString(), " => ", err);
                            callBack({
                                result: false,  message: "Fallo la autenticacion."
                            });
                        } else {
                            if (userResult.length > 0) {
                                callBack({
                                    result: true, tokenId , user: userName,rolId, accountId, message: ""
                                });
                            }
                        }
                    });
            }
        });
    };


}