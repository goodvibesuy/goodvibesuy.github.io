var masterDBController = require('../bd/masterConnectionsBD');

import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { Provider } from '../datatypes/provider';
import { MainModel } from './mainModel';

export class ProvidersModel extends MainModel {

    constructor() {
        super();
    }

    getAll(dbName: string, callBack: (r: ResultWithData<Provider[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection((err: any, con: any) => {
            if (!!err) {
                con.release();
                console.error(err);
            } else {
                con.query('SELECT * FROM provider ORDER BY name ASC', (err: any, result: any) => {
                    con.release();
                    if (!!err) {
                        console.log(err);
                        callBack(super.formatError(err));
                    } else {
                        callBack({
                            result: ResultCode.OK,
                            message: 'OK',
                            data: result
                        });
                    }
                });
            }
        });
    };

    get(id: number, dbName: string, callBack: (r: ResultWithData<Provider>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection((err: any, con: any) => {
            if (!!err) {
                con.release();
                console.error(err);
            } else {
                con.query('SELECT * FROM provider  WHERE id = ? ORDER BY name ASC', [id], (err: any, result: any) => {
                    con.release();
                    if (!!err) {
                        console.log(err);
                        callBack(super.formatError(err));
                    } else {
                        callBack({
                            result: ResultCode.OK,
                            message: 'OK',
                            data: result && result.length > 0 ? result[0] : null
                        });
                    }
                });
            }
        });
    };

    add(p: Provider, dbName: string, callBack: (r: ResultWithData<Provider[]>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection((err: any, con: any) => {
            if (!!err) {
                con.release();
                console.error(err);
            } else {
                con.query('INSERT INTO provider ( name ) VALUES ( ? )', [p.name], (err: any, result: any) => {
                    con.release();
                    if (!!err) {
                        console.log(err);
                        callBack(super.formatError(err));
                    } else {
                        callBack({
                            result: ResultCode.OK,
                            message: 'OK',
                            data: result
                        });
                    }
                });
            }
        });
    };

    update(id: Number, provider: Provider, dbName: string, callBack: (r: ResultWithData<Result>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection((err: any, con: any) => {
            if (!!err) {
                con.release();
                console.error(err);
            } else {
                con.query("UPDATE provider SET name = ? WHERE id = ?", [provider.name, id], (err: any, resultClient: any) => {
                    con.release();
                    if (!!err) {
                        console.log(err);
                        callBack(super.formatError(err));
                    } else {
                        callBack({
                            result: ResultCode.OK,
                            message: "OK"
                        });
                    }
                });
            }
        });
    }

    delete(id: Number, dbName: string, callBack: (r: ResultWithData<Result>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection((err: any, con: any) => {
            if (err) {
                con.release();
                console.error(err);
            } else {
                con.query("DELETE FROM provider WHERE id = ? ", [id], (err: any, resultClient: any) => {
                    con.release();
                    if (!!err) {
                        console.log(err);
                        callBack(super.formatError(err));
                    } else {
                        callBack({
                            result: ResultCode.OK,
                            message: "OK"
                        });
                    }
                });
            }
        });
    }
}
