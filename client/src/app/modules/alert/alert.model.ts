
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
    public keepAfterRouteChange: boolean;

    constructor() {
        this.id = Math.random();
    }
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}
