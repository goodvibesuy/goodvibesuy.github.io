import { Injectable } from '@angular/core';
import { Client } from '../../../../datatypes/Client';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientService {    
    private clientURL: string = '/api/clients';
    constructor(private http: HttpClient) { }

    addClient(client: Client): Observable<any> {        
        return this.http.post(this.clientURL, {client});
    }

    getClients(): Observable<any> {        
        return this.http.get(this.clientURL);
    }


    delete(id:number): Observable<any> {        
        return this.http.delete(this.clientURL + "/" + id);
    }
}
