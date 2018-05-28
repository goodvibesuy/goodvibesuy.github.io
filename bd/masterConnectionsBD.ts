import { ControllerDBMaster } from '../motionLibJS/serverSide/masterClientDBFramework/controllers/controllerDBMaster';
var config = require('config');

export class MasterConnectionsBD {

    private host: string;
    private port: number
    private user: string;
    private pwd: string;
    private databaseName: string;
    private controller: ControllerDBMaster;

    constructor() {
        this.host = config.get("db.master.host");
        this.port = config.get("db.master.port");
        this.user = config.get("db.master.user");
        this.pwd = config.get("db.master.pwd");
        this.databaseName = config.get("db.master.databaseName");

        this.controller = new ControllerDBMaster(this.host, this.port, this.databaseName, this.user, this.pwd, {});
    }

    public getController(): ControllerDBMaster {
        return this.controller;
    }
}
