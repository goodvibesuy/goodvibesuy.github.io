import { ControllerDBClientsConnections } from '../motionLibJS/serverSide/masterClientDBFramework/controllers/controllerDBClient';
var config = require('config');

export class ClientConnectionsBD {

    private host: string;
    private port: number;
    private user: string;
    private pwd: string;

    private controller: ControllerDBClientsConnections;

    constructor() {
        this.host = config.get("db.good.host");
        this.port = config.get("db.good.port");
        this.user = config.get("db.good.user");
        this.pwd = config.get("db.good.pwd");

        this.controller = new ControllerDBClientsConnections(this.host, this.port, this.user, this.pwd);
    }

    public getController(): ControllerDBClientsConnections {
        return this.controller;
    }

    public getUserConnection(databaseName: any) {
    };
}
