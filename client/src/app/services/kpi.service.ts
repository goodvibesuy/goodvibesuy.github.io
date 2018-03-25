import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class KpiService {

    kpisUrl: string = '/api/kpis';
    pointOfSaleUrl: string = '/api/pointOfSail';
    constructor(private http: HttpClient) { }

    get(idSupply:number): Observable<any> {
        return this.http.get<any[]>(this.kpisUrl + "/suppliesPrices/" + idSupply);
    }

    /*
    agregar(route: Route): Observable<any> {
        return this.http.post(this.routeUrl, { idroute: route.idroute, name: route.name });
    }
    */
}
