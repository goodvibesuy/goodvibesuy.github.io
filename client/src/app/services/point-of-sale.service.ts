import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { PointOfSale } from '../shared/models/pointofsale.model';

@Injectable()
export class PointOfSaleService {
    private pointOfSaleURL:string = '/api/pointOfSail';
    constructor(private http: HttpClient) { }

    get(headers:HttpHeaders): Observable<any> {
        return this.http.get<PointOfSale[]>(this.pointOfSaleURL, { headers: headers });
    }

    getPointOfSale(headers:HttpHeaders,idPointOfSale:Number): Observable<any> {
        return this.http.get<PointOfSale[]>(this.pointOfSaleURL + "/getPointOfSale/" + idPointOfSale, { headers: headers });
    }

}
