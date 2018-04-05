import { ClientConnectionsBD } from '../bd/clientConnectionsBD';
import { ControllerDBClientsConnections } from '../motionLibJS/serverSide/masterClientDBFramework/controllers/controllerDBCLient';

export class MainModel {
    protected controllerConnections: ControllerDBClientsConnections;
    constructor() {
        var clientConnection: ClientConnectionsBD = new ClientConnectionsBD();
        this.controllerConnections = clientConnection.getController();
    }   
}