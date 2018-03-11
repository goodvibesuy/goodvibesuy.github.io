export interface GVHttpResult<T> {
    data: T;
    message: string;
    result: ResultCode;
}

export enum ResultCode { 
    OK = 1,
    Error = -1
}