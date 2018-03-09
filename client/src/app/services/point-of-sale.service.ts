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
    
    getFilteredByName(headers:HttpHeaders,filterName:string): Observable<any> {
        return this.http.get<PointOfSale[]>(this.pointOfSaleURL + "/getFilteredByName/"+ filterName, { headers: headers });
    }

    getPointOfSale(headers:HttpHeaders,idPointOfSale:Number): Observable<any> {
        return this.http.get<PointOfSale[]>(this.pointOfSaleURL + "/getPointOfSale/" + idPointOfSale, { headers: headers });
    }

    addPointOfSale(headers:HttpHeaders,name,address,tel):Observable<any>{
        return this.http.post(this.pointOfSaleURL, {name,address,tel}, { headers: headers });
    }

    updatePointOfSale(headers:HttpHeaders,idPointOfSale:Number,name:string,address:string,tel:string): Observable<PointOfSale> {
        return this.http.put<PointOfSale>(this.pointOfSaleURL , {id:idPointOfSale,name,address,tel}, { headers: headers });
    }

    deletePointOfSale(headers:HttpHeaders,idPointOfSale:Number): Observable<any> {
        return this.http.delete(this.pointOfSaleURL + "/" + idPointOfSale, { headers: headers });
    }
}