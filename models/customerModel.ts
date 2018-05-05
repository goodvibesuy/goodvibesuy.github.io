import { Result, ResultWithData, ResultCode } from '../datatypes/result';
import { MainModel } from './mainModel';
import { Customer } from '../datatypes/customer';

var mysql = require('mysql');

export class CustomerModel extends MainModel {
    constructor() {
        super();
    } 

    get(id: number, dbName: string, callBack: (r: ResultWithData<Customer>) => void): void {
        var pool = this.controllerConnections.getUserConnection(dbName);
        pool.getConnection( (err: any, con: any) => {
            if (!!err) {
                console.error(err);
                con.release();
            } else {
                let query: string = this.getCustomerQuery(id);

                con.query(query, [id], function (err: any, result: any[]) {
                    con.release();
                    if (!!err) {
                        console.error(err);
                        callBack({
                            result: ResultCode.Error,
                            message: 'Error'
                        });
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
    }

    private getCustomerQuery(id: number): string {
        const SELECT_QUERY: string =    `SELECT cust.*, {0} as type
                                        FROM {1} as pos JOIN good.customer as cust ON pos.idCustomer = cust.id
                                        WHERE cust.id  = ${id}`;
        
        const query: string = SELECT_QUERY.replace('{0}', '1').replace('{1}', 'pointofsale') 
                              + " UNION " +
                              SELECT_QUERY.replace('{0}', '2').replace('{1}', 'client');

        return query;
    }
}