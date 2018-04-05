import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { TemplateRoute } from '../models/TemplateRoute.model';
import { PointOfSale } from '../../../../datatypes/pointOfSale';

@Injectable()
export class TemplatesRoutesService {
    routeUrl: string = '/api/templateRoute';
    pointOfSaleUrl: string = '/api/pointOfSail';
    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        return this.http.get<any[]>(this.routeUrl);
    }

    add(name:string): Observable<any> {
        return this.http.post(this.routeUrl, { name});
    }    

    delete(id: number): Observable<any> {
        return this.http.delete(this.routeUrl + '/' + id);
    }

    /*
    agregar(route: Route): Observable<any> {
        return this.http.post(this.routeUrl, { idroute: route.idroute, name: route.name });
    }
    */

    update(route: TemplateRoute): Observable<any> {
        return this.http.put<TemplateRoute[]>(this.routeUrl, route);
    }
    

    reorderPointOfSale(idRoute: number, idPointOfSale: number, position: number, newPosition: number): Observable<any> {
        return this.http.put<any[]>(this.routeUrl + '/reorderPointOfSale', {
            idRoute: idRoute,
            idPointOfSale: idPointOfSale,
            position: position,
            newPosition: newPosition
        });
    }
    

    getPointsOfSales(): Observable<PointOfSale[]> {
        return this.http.get<PointOfSale[]>(this.pointOfSaleUrl).pipe(map(r => (<any>r).data));
    }

    getPointsOfSalesRoute(idRoute: number): Observable<PointOfSale[]> {
        return this.http.get<PointOfSale[]>(this.routeUrl + '/pointofsales/' + idRoute).pipe(map(r => (<any>r).data));
    }

    
	addPointOfSale(idTemplateRoute:number,idPointOfSale:number): Observable<any> {
		return this.http.post(this.routeUrl + '/addPointOfSale', {
			idTemplateRoute:idTemplateRoute,
			idPointOfSale:idPointOfSale
		});
	}


    remove(idRoute: number, idPointOfSale: number): Observable<any> {
        return this.http.delete(this.routeUrl + '/removePointOfSale/' + idRoute + '/' + idPointOfSale);
    }    
}
