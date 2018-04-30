// Product.service
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Provider } from '../../../../datatypes/provider';
import { Result, ResultWithData, ResultCode } from '../../../../datatypes/result';

@Injectable()
export class ProvidersService {
	PROVIDERS_URL: string = '/api/providers';

	constructor(private http: HttpClient) {}

	getAll(): Observable<ResultWithData<Provider[]>> {
		return this.http.get<ResultWithData<Provider[]>>(this.PROVIDERS_URL + '/getAll');
	}

    add(name:string): Observable<ResultWithData<Provider[]>> {
		return this.http.post<ResultWithData<Provider[]>>(this.PROVIDERS_URL ,{name});
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
