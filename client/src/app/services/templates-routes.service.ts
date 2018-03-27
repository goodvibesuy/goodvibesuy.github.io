import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PointOfSale } from '../models/pointofsale.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TemplatesRoutesService {


    routeUrl: string = '/api/route';
    pointOfSaleUrl: string = '/api/pointOfSail';
    constructor(private http: HttpClient) { }

    /*
    get(): Observable<any> {
        return this.http.get<Route[]>(this.routeUrl);
    }

    agregar(route: Route): Observable<any> {
        return this.http.post(this.routeUrl, { idroute: route.idroute, name: route.name });
    }

    update(route: Route): Observable<any> {
        return this.http.put<Route[]>(this.routeUrl, route);
    }

    reorderPointOfSale(idRoute: number, idPointOfSale: number, position: number, newPosition: number): Observable<any> {
        return this.http.put<Route[]>(this.routeUrl + '/reorderPointOfSale', {
            idRoute: idRoute,
            idPointOfSale: idPointOfSale,
            position: position,
            newPosition: newPosition
        });
    }
    */

    getPointsOfSales(): Observable<PointOfSale[]> {
        return this.http.get<PointOfSale[]>(this.pointOfSaleUrl).pipe(map(r => (<any>r).data));
    }

    getPointsOfSalesRoute(idRoute: number): Observable<PointOfSale[]> {
        return this.http.get<PointOfSale[]>(this.routeUrl + '/pointofsales/' + idRoute).pipe(map(r => (<any>r).data));
    }

    /*
	addPointOfSale(rPOS: RoutePointOfSale): Observable<any> {
		return this.http.post(this.routeUrl + '/addPointOfSale', {
			idRoute: rPOS.idRoute,
			idPointOfSale: rPOS.idPointOfSale
		});
	}
*/

    remove(idRoute: number, idPointOfSale: number): Observable<any> {
        return this.http.delete(this.routeUrl + '/removePointOfSale/' + idRoute + '/' + idPointOfSale);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(this.routeUrl + '/' + id);
    }
}
