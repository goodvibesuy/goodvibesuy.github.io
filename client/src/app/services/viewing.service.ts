import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LineViewingView } from '../../../../datatypes/views/lineViewingView';

@Injectable()
export class ViewingService {
	private viewingsURL: string = '/api/viewings';
	constructor(private http: HttpClient) {}

	addViewing(idPointOfSale: Number, data: any,annotation:string,idPOS:number,idRoute): Observable<any> {
		return this.http.post(this.viewingsURL, { idPointOfSale: idPointOfSale, data: data,annotation ,idPOS,idRoute});
    }

    
    
    getViewing(idViewing: Number): Observable<any> {
		return this.http.get(this.viewingsURL + "/" +  idViewing );
    }

    lastViewings(cantViews: Number): Observable<any> {
		return this.http.get(this.viewingsURL + "/last/" +  cantViews );
    }

    wasVisited(idRoute: number,idPointOfSale:number): Observable<any> {
		return this.http.get(this.viewingsURL + "/wasVisited/" +  idRoute + "/" +idPointOfSale );
    }    

    /*
    lastViewings(cantViews: Number): Observable<LineViewingView[]> {
		return this.http.get<LineViewingView[]>(this.viewingsURL + "/last/" +  cantViews );
    }
    */
}
