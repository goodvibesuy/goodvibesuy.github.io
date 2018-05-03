
export interface IAlert {
    id: number;
    type: AlertType;
    message: string;
    keepAfterRouteChange: boolean;
}

export class Alert implements IAlert {
    public id: number;
    public type: AlertType;
    public message: string;
    public keepAfterRouteChange: boolean = false;

    constructor(type: AlertType, message: string, keepAfterRouteChange: boolean) {
        this.id = Math.random();
        this.type = type;
        this.message = message;
        this.keepAfterRouteChange = keepAfterRouteChange;
    }
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}
