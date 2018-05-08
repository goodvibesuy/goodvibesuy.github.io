import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Client } from '../../../../datatypes/client';
import { Result, ResultWithData, ResultCode } from '../../../../datatypes/result';

import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ClientService {

    private static readonly CLIENT_URL: string = '/api/clients';

    constructor(private http: HttpClient) { }

    get(idClient: Number): Observable<ResultWithData<Client>> {
        return this.http.get<ResultWithData<Client>>(ClientService.CLIENT_URL + "/" + idClient);
    }

    getAlls(): Observable<ResultWithData<Client[]>> {
        return this.http.get<ResultWithData<Client[]>>(ClientService.CLIENT_URL);
    }

    add(client: Client): Observable<ResultWithData<Client>> {
        return this.http.post<ResultWithData<Client>>(ClientService.CLIENT_URL, { client });
    }

    update(client: Client): Observable<ResultWithData<Client>> {
        return this.http.put<Result>(ClientService.CLIENT_URL + "/" + client.id, { client });
    }

    delete(id: number): Observable<Result> {
        return this.http.delete<Result>(ClientService.CLIENT_URL + "/" + id);
    }
}
