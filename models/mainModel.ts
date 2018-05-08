import { ClientConnectionsBD } from '../bd/clientConnectionsBD';
import { ControllerDBClientsConnections } from '../motionLibJS/serverSide/masterClientDBFramework/controllers/controllerDBClient';
import { ResultCode, Result } from '../datatypes/result';

export class MainModel {
    protected controllerConnections: ControllerDBClientsConnections;

    constructor() {
        var clientConnection: ClientConnectionsBD = new ClientConnectionsBD();
        this.controllerConnections = clientConnection.getController();
    }



    protected formatError(err: { code: string }): Result {
        var errorFormatted: Result;

        if (err.code == 'ER_DUP_ENTRY') {
            errorFormatted = {
                result: ResultCode.Error,
                message: "No se pudo insertar o actualizar el elemento."
            };
        } else if (err.code == 'ER_ROW_IS_REFERENCED_2') {
            errorFormatted = {
                result: ResultCode.Error,
                message: "No se pudo borrar el elemento porque es utilizado en otra parte del sistema"
            };
        } else {
            errorFormatted = {
                result: ResultCode.Error,
                message: "Error interno. No se pudo borrar el elemento."
            };
        }
        return errorFormatted;
    }
}