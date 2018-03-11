// Product.service
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Product } from '../shared/models/product.model';
import { SupplyUnit } from '../shared/models/supply-unit.model';
import { GVHttpResult } from '../shared/httpResult';

@Injectable()
export class ProductsService {
	PRODUCTS_URL: string = '/api/products';

	constructor(private http: HttpClient) {}

	get(): Observable<GVHttpResult<Product[]>> {
		return this.http.get<GVHttpResult<Product[]>>(this.PRODUCTS_URL);
	}

	update(product: Product): Observable<any> {
		return this.http.put<Product[]>(this.PRODUCTS_URL + '/' + product.id, product);
	}

	agregar(Product: Product): Observable<any> {
		return this.http.post(this.PRODUCTS_URL, Product);
	}

	delete(id: number): Observable<any> {
		return this.http.delete(this.PRODUCTS_URL + '/' + id);
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
