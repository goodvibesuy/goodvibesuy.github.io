import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {URLSearchParams} from '@angular/http';
import { LineViewingView } from '../../../../datatypes/views/lineViewingView';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

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

    viewingsBetween(sourceDate:NgbDateStruct,lastDate:NgbDateStruct):Observable<any>{
        let stringSource = sourceDate.year + "/" + sourceDate.month + "/" + sourceDate.day;
        let stringLast = lastDate.year + "/" + lastDate.month + "/" + lastDate.day;
        return this.http.get(this.viewingsURL + "/viewingsBetween/"+ stringSource + "/" + stringLast );
    }

    getViewingsByRoute(idRoute: Number): Observable<any> {
		return this.http.get(this.viewingsURL + "/viewingsByRoute/" +  idRoute );
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
