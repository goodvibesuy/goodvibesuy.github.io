import {ZenouraMysqlConnection} from '../../mysql/mysqlConnection';

export class MasterDatabaseConnection {    
    private zenouraMysql:ZenouraMysqlConnection;
    private connection:any;
    public databaseName:string;

    constructor(host: string, port: number,databaseName:string, userDB: string, passwordDB: string) {   
        this.databaseName =databaseName;     
        this.zenouraMysql = new ZenouraMysqlConnection();
        console.log('Establishing connection with Master Database...');
        this.connection= this.zenouraMysql.establishConnection(host,port,databaseName,userDB,passwordDB);        
        if (this.connection)
            console.log('Connection established on Master Database');
        else
            console.log('Failed to establish connection with Master Database');
    }

    public getConnection():any{
        return this.connection;
    }
}
