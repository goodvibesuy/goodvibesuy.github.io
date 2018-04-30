// input.service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// datatypes
import { Supply } from '../../../../datatypes/supply';
import { SupplyTable } from '../../../../datatypes/supplyTable';

import { Unit } from '../models/unit.model';
import *  as _ from 'lodash';

@Injectable()
export class SupplyService {
    suppliesUrl: string = '/api/supplies';
    unitsUrl: string = '/api/units';
    headers = { 'Content-Type': 'application/json; charset=utf-8' };

    constructor(private http: HttpClient) { }

    getListSupply():Observable<any>{
        return this.http.get<SupplyTable[]>(this.suppliesUrl + "/getAll");
    }

    getAll(): Observable<Supply[]> {
        return this.http.get<Supply[]>(this.suppliesUrl)
            .pipe(
                map(r => (<any>r).data),
                map(s => {
                    for (let index = 0; index < s.length; index++) {
                        const supply = s[index];
                        if(!!supply.date){
                            supply.date= new Date(supply.date);
                        }
                        if(!!supply.price_date){
                            supply.price_date= new Date(supply.price_date);
                        }
                    }
                    return s;
                })
            );
    }

    // getAll(): Observable<Supply[]> {
    //     return this.http.get<Supply[]>(this.suppliesUrl + "/getAll")
    //         .pipe(
    //             map(r => (<any>r).data),
    //             map(s => {
    //                 s.date = s.date;
    //                 return s;
    //             })
    //         );
    // }

    getLatestPrices(): Observable<Supply[]> {
        return this.getAll().pipe(map(r => _.chain(r)
            .groupBy(s => s.id)
            .map(g =>
                _.chain(g)
                    .sortBy(s => s.date)
                    .last()
                    .value()
            )
            .sortBy(m => m.name.toLowerCase())
            .value()));

    }

    getUnits(): Observable<Unit[]> {
        return this.http.get<Unit[]>(this.unitsUrl).pipe(map(r => (<any>r).data));
    }

    agregar(supply: Supply): Observable<any> {
        return this.http.post(this.suppliesUrl, supply);
    }

    update(supply: Supply): Observable<any> {
        return this.http.put<Supply[]>(this.suppliesUrl + '/' + supply.id, supply);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(this.suppliesUrl + '/' + id);
    }

	/**
	 * Handle Http operation that failed.
	 * Let the app continue.
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        //this.messageService.add('HeroService: ' + message);
        console.log('log: ' + message);
    }
}