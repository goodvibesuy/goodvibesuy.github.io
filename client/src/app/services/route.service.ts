import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { RoutePointOfSale } from '../models/routePointOfSale.model';
import { RouteUser } from '../models/routeUser.model';

import { RouteTable } from '../../../../datatypes/routeTable';
import { User } from '../../../../datatypes/user';
import { Route } from '../../../../datatypes/route';
import { PointOfSale } from '../../../../datatypes/pointOfSale';

@Injectable()
export class RouteService {
	routeUrl: string = '/api/route';
	pointOfSaleUrl: string = '/api/pointOfSail';
	constructor(private http: HttpClient) {}

	get(): Observable<any> {
		return this.http.get<RouteTable[]>(this.routeUrl);
    }
    
    getRouteById(id:number): Observable<any> {
		return this.http.get<Route>(this.routeUrl + "/" + id);
    }

	agregar(route: Route): Observable<any> {
		return this.http.post(this.routeUrl, { route });
	}

	update(route: Route): Observable<any> {
		return this.http.put<Route>(this.routeUrl, {route} );
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

    
	getUsersRoute(idRoute: number): Observable<User[]> {
		return this.http.get<User[]>(this.routeUrl + '/users/' + idRoute).pipe(map(r => (<any>r).data));
	}

    getRoutesByUser(user: string): Observable<User[]> {
        console.log(user);
		return this.http.get<User[]>(this.routeUrl + '/routesByUser/' + user).pipe(map(r => (<any>r).data));
	}

    getRoutesByUserId(idUser: number): Observable<User[]> {
		return this.http.get<User[]>(this.routeUrl + '/routes/' + idUser).pipe(map(r => (<any>r).data));
	}
    

	getPointsOfSalesRoute(idRoute: number): Observable<PointOfSale[]> {
		return this.http.get<PointOfSale[]>(this.routeUrl + '/pointofsales/' + idRoute).pipe(map(r => (<any>r).data));
	}

    getStockRoute(idRoute: number): Observable<any[]> {
		return this.http.get<any[]>(this.routeUrl + '/stock/' + idRoute).pipe(map(r => (<any>r).data));
	}

	addPointOfSale(rPOS: RoutePointOfSale): Observable<any> {
		return this.http.post(this.routeUrl + '/addPointOfSale', {
			idRoute: rPOS.idRoute,
			idPointOfSale: rPOS.idPointOfSale
		});
	}

	addUser(rUser: RouteUser): Observable<any> {
		return this.http.post(this.routeUrl + '/addUser', {
			idRoute: rUser.idRoute,
			idUser: rUser.idUser,
			date: rUser.date
		});
	}

	remove(idRoute: number, idPointOfSale: number): Observable<any> {
		return this.http.delete(this.routeUrl + '/removePointOfSale/' + idRoute + '/' + idPointOfSale);
	}

	removeUser(idRoute: number, idUser: number): Observable<any> {
		return this.http.delete(this.routeUrl + '/removeUser/' + idRoute + '/' + idUser);
	}

	delete(id: number): Observable<any> {
		return this.http.delete(this.routeUrl + '/' + id);
	}
}
