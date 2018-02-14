import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Route } from '../shared/models/route.model'

@Injectable()
export class RouteService {
  routeUrl: string = '/api/route';
  constructor(private http: HttpClient) {

  }

  get(): Observable<Route[]> {
    return this.http.get<Route[]>(this.routeUrl)
      .pipe(
      map(r => (<any>r).data)
      )
  }

  agregar(route: Route): Observable<any> {
    return this.http
      .post(
      this.routeUrl,
      {idroute:route.idroute, name : route.name}
      );
  }


  update(route: Route): Observable<any> {
    return this.http
        .put<Route[]>(
            this.routeUrl,
            route
        );
}

  delete(id: number): Observable<any> {
    return this.http
        .delete(this.routeUrl + '/' + id );
  }

}
