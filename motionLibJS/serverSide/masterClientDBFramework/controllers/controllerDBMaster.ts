
var dbUsersBuilder = require('../db/dbUsers');
var dbSessionsBuilder = require('../db/dbSessions');

//var connectionBuilder = require('../../mysql/mysqlConnection');
import { ZenouraMysqlConnection } from '../../mysql/mysqlConnection'
import {MasterDatabaseConnection} from '../db/MasterDatabaseConnection';

export class ControllerDBMaster {
    private host: string;
    private port: number;
    private user: string;
    private password: string;
    private connectionPool: Array<any>;
    private zenouraMysql: ZenouraMysqlConnection;
    private dbUsers:any;
    private dbSessions:any;
    private dbMasterConnection:MasterDatabaseConnection;

    constructor(host: string, port: number,databaseName:string, userDB: string, passwordDB: string,usersDbModelMap:any) {
        console.log('init creation of  framework client db controller.');
        this.host = host;
        this.port = port;
        this.user = userDB;
        this.password = passwordDB;
        this.connectionPool = [];
        this.zenouraMysql = new ZenouraMysqlConnection();

        this.dbMasterConnection = new MasterDatabaseConnection(host, port, databaseName, this.user, this.password);
    
        this.dbUsers = new dbUsersBuilder(usersDbModelMap, this.dbMasterConnection);
        this.dbSessions = new dbSessionsBuilder(this.dbMasterConnection);
    }

    public getUserConnection(databaseName: any): any {
        console.log(this.connectionPool[databaseName]);
        if (this.connectionPool[databaseName] && this.connectionPool[databaseName] !== undefined) {
            console.log('usando conexion con bd cliente ya existente.');
            return this.connectionPool[databaseName];
        } else {
            console.log('intentando crear conexion cliente.');
            var connection = this.zenouraMysql.establishConnection(this.host, this.port, databaseName, this.user, this.password);
            console.log('creando conexion con bd cliente.');
            console.log(this.host);
            console.log(this.port);
            console.log(databaseName);


            this.connectionPool[databaseName] = connection;
            return connection;
        }
    };

    public getMasterConnection():MasterDatabaseConnection{
        return this.dbMasterConnection;
    }


    public verifySession(user:string, tokenId:string, accountId:number, callback:any) {
        this.dbSessions.verifySession(user, tokenId, accountId,
            function (err:any, authError:any, result:any, client_database_name:string) {
                if (err) {
                    callback(err, authError, false);
                    return;
                } else if (!result) {
                    callback('invalid session', authError, false);
                    return;
                } else {
                    callback(null, authError, true, client_database_name);
                    return;
                }
            }
        );
    };

    public logout(user:string, accountId:number, tokenId:string, callback:any) {
        var dbSessionAux = this.dbSessions;
        this.dbSessions.verifySession(user, tokenId, accountId,
            function (err:any, authError:any, result:any) {
                if (err) {
                    callback(err, false);
                    return;
                } else if (authError) {
                    callback('invalid session', false);
                    return;
                } else if (!result) {
                    callback('internal error', false);
                    return;
                } else {
                    dbSessionAux.deleteSession(user, accountId, function (err:any) {
                        if (err) {
                            callback(err);
                            return;
                        } else {
                            callback(null, err);
                            return;
                        }
                    });
                }
            }
        );
    };

    public login(user:string, password:string, callback:any) {

        var dbSessionAux = this.dbSessions;
        this.dbUsers.login(user, password, function (err:any, loginResponse:any) {
            if ((loginResponse) && (loginResponse.result)) {
                dbSessionAux.createSession(loginResponse, function (err:any, loginResponseSession:any) {
                    if (err)
                        callback(err, loginResponseSession)
                    else
                        callback(null, loginResponseSession);
                });
            } else {
                callback(err, loginResponse);
            }
        });
    };

    public updateState(userId:string, state:string, accountId:string, callBack:any, callBackError:any) {
        this.dbUsers.updateState(userId, state, accountId, function (err:any, updateStateResponse:any) {
            if ((updateStateResponse) && (updateStateResponse.result)) {
                callBack(null, updateStateResponse);
            } else {
                callBack(err, updateStateResponse);
            }
        }, function (result:any) {
            callBackError(result);
        });
    };

}