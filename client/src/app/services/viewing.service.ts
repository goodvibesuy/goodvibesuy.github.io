import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class ViewingService {
	private viewingsURL: string = '/api/viewings';
	constructor(private http: HttpClient) {}

	addViewing(idPointOfSale: Number, data: any,annotation:string): Observable<any> {
		return this.http.post(this.viewingsURL, { idPointOfSale: idPointOfSale, data: data,annotation });
	}
}
