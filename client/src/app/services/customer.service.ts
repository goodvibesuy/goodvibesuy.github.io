import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Customer } from '../../../../datatypes/customer';
import { Result, ResultWithData, ResultCode } from '../../../../datatypes/result';

import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CustomerService {

    private customerURL: string = '/api/customers';

    constructor(private http: HttpClient) { }

    get(idCustomer: Number): Observable<ResultWithData<Customer>> {
        return this.http.get<ResultWithData<Customer>>(this.customerURL + "/" + idCustomer);
    }
}