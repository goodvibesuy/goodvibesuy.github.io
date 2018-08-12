import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Result, ResultWithData } from '../../../../datatypes/result';

@Injectable()
export class ViewingService {
	private VIEWINGS_URL: string = '/api/viewings';
	constructor(private http: HttpClient) {}

	addViewing(idPointOfSale: Number, data: any,annotation:string,idPOS:number,idRoute): Observable<any> {
		return this.http.post(this.VIEWINGS_URL, { idPointOfSale: idPointOfSale, data: data,annotation ,idPOS,idRoute});
    }

    countDeliveryProductsInViewings(idsViewings:number[]):Observable<ResultWithData<any[]>>{
        return this.http.post<ResultWithData<any[]>>(this.VIEWINGS_URL + "/countDeliveryProductsInViewings",{idsViewings});
    }

    getViewingProductTypes():Observable<ResultWithData<any[]>>{
        return this.http.get<ResultWithData<any[]>>(this.VIEWINGS_URL + "/viewingProductTypes");
    }
    
    
    getViewing(idViewing: Number): Observable<any> {
		return this.http.get(this.VIEWINGS_URL + "/getViewingbyId/" +  idViewing );
    }

    lastViewings(cantViews: Number): Observable<any> {
		return this.http.get(this.VIEWINGS_URL + "/last/" +  cantViews );
    }

    viewingsBetween(sourceDate:NgbDateStruct,lastDate:NgbDateStruct,idPos:number,idProduct:number):Observable<any>{
        let stringSource:string;
        let stringLast:string;        
        if(sourceDate === null){
            stringSource = "0/0/0";
        }else{
            stringSource = sourceDate.year + "/" + sourceDate.month + "/" + sourceDate.day;
        }
        if(sourceDate === null){
            stringLast = "0/0/0";
        }else{
            stringLast = lastDate.year + "/" + lastDate.month + "/" + lastDate.day;
        }        
        return this.http.get(this.VIEWINGS_URL + "/viewingsBetween/"+ stringSource + "/" + stringLast + "/" + idPos + "/" + idProduct );
    }

    getViewingsByRoute(idRoute: Number): Observable<any> {
		return this.http.get(this.VIEWINGS_URL + "/viewingsByRoute/" +  idRoute );
    }

    getRouteDelivery(idRoute: Number): Observable<any> {
		return this.http.get(this.VIEWINGS_URL + "/getRouteDelivery/" +  idRoute );
    }

    wasVisited(idRoute: number,idPointOfSale:number): Observable<any> {
		return this.http.get(this.VIEWINGS_URL + "/wasVisited/" +  idRoute + "/" +idPointOfSale );
    }

    delete(idViewing: number): Observable<Result> {
        return this.http.delete<Result>(this.VIEWINGS_URL + '/' + idViewing);
    }
}
