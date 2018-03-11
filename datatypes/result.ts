

export interface Result {
	result: ResultCode;
	message: string;
}

export interface ResultWithData<T> extends Result {
	data?: T;
}

export enum ResultCode {
	OK = 1,
	Error = -1
}
