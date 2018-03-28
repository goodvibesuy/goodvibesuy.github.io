import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { PointOfSale } from '../models/pointofsale.model';

@Injectable()
export class PointOfSaleService {
    private pointOfSaleURL: string = '/api/pointOfSail';
    constructor(private http: HttpClient) { }

    get(): Observable<any> {
        return this.http.get<PointOfSale[]>(this.pointOfSaleURL);
    }

    getFilteredByName(filterName: string): Observable<any> {
        return this.http.get<PointOfSale[]>(this.pointOfSaleURL + '/getFilteredByName/' + filterName);
    }

    getPointOfSale(idPointOfSale: Number): Observable<any> {
        return this.http.get<PointOfSale[]>(this.pointOfSaleURL + '/getPointOfSale/' + idPointOfSale);
    }

    addPointOfSale(name: string, businessName: string, contactName: string, RUT: string,
        address: string, tel: string, image: string, coords: google.maps.LatLng): Observable<any> {
        return this.http.post(this.pointOfSaleURL, { name, businessName, contactName, RUT,address, tel, image, coords });
    }

    updatePointOfSale(idPointOfSale: Number, name: string,
        businessName: string, contactName: string, RUT: string,
        address: string, tel: string, image: string, coord: google.maps.LatLng): Observable<PointOfSale> {
        return this.http.put<PointOfSale>(this.pointOfSaleURL, { id: idPointOfSale, name, businessName, contactName, RUT, address, tel, coord, image });
    }

    deletePointOfSale(idPointOfSale: Number): Observable<any> {
        return this.http.delete(this.pointOfSaleURL + '/' + idPointOfSale);
    }
}
