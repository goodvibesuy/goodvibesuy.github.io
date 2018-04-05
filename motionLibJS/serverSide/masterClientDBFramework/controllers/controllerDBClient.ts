//var connectionBuilder = require('../../mysql/mysqlConnection');
import {ZenouraMysqlConnection} from '../../mysql/mysqlConnection'

export class ControllerDBClientsConnections {
    private host: string;
    private port: number;
    private user: string;
    private password: string;
    private connectionPool: Array<any>;
    private zenouraMysql:ZenouraMysqlConnection;

    constructor(host: string, port: number, userDB: string, passwordDB: string) {
        console.log('init creation of  framework client db controller.');
        this.host = host;
        this.port = port;
        this.user = userDB;
        this.password = passwordDB;  
        this.connectionPool = [];
        this.zenouraMysql = new ZenouraMysqlConnection();
    }

    public getUserConnection(databaseName:any):any {
        console.log(this.connectionPool[databaseName]);
        if (this.connectionPool[databaseName] && this.connectionPool[databaseName] !== undefined) {
            console.log('usando conexion con bd cliente ya existente.');
            return this.connectionPool[databaseName];
        } else {
            console.log('intentando crear conexion cliente.');
            var connection = this.zenouraMysql.establishConnection(this.host, this.port, databaseName,this.user, this.password);
            console.log('creando conexion con bd cliente.');
            console.log(this.host);
            console.log(this.port);
            console.log(databaseName);

            
            this.connectionPool[databaseName] = connection;
            return connection;
        }
    };
}