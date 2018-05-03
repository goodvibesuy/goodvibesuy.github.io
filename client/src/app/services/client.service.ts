import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Client } from '../../../../datatypes/client';
import { Result, ResultWithData, ResultCode } from '../../../../datatypes/result';

import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ClientService {

    private clientURL: string = '/api/clients';

    constructor(private http: HttpClient) { }

    get(idClient: Number): Observable<ResultWithData<Client>> {
        return this.http.get<ResultWithData<Client>>(this.clientURL + "/" + idClient);
    }

    getAlls(): Observable<ResultWithData<Client[]>> {
        return this.http.get<ResultWithData<Client[]>>(this.clientURL);
    }
    
    add(client: Client): Observable<ResultWithData<Client>> {
        return this.http.post<ResultWithData<Client>>(this.clientURL, { client });
    }

    update(client: Client): Observable<ResultWithData<Client>> {
        return this.http.put<Result>(this.clientURL + "/" + client.id, { client });
    }

    delete(id: number): Observable<Result> {
        return this.http.delete<Result>(this.clientURL + "/" + id);
    }
}
