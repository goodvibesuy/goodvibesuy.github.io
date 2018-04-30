
function  MasterDatabaseConnection(host,port,databaseName,user,password){
    console.log('Establishing connection with Master Database...');
    var  connectionBuilder = require('../../mysql/mysqlConnection');    
    var mysqlConnection = connectionBuilder(host,port,databaseName,user,password);
    this.connection= mysqlConnection;
    this.databaseName=databaseName;
    if (this.connection)
        console.log('Connection established on Master Database');
    else
        console.log('Failed to establish connection with Master Database');
}

module.exports = MasterDatabaseConnection;
        
