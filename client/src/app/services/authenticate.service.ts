import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticateService {
    AUTHENTICATE_URL: string = "/api/authenticate";

    constructor(
        private http: HttpClient
    ) { }

    login(user:String,pass:String):Observable<any>{
        return this.http
          .post(
            this.AUTHENTICATE_URL + "/login",
            { user,pass}
          );
      }


      verifyToken(tokenId:string, user:string, accountId:Number): Observable<any> {
        let headers = new HttpHeaders({'tokenId': tokenId, 'user': user, 'accountId': accountId.toString()});    
        return this.http.get(this.AUTHENTICATE_URL + "/verifyToken" ,{headers:headers});
      }

      closeSession(tokenId:string, user:string, accountId:Number): Observable<any> {
        let headers = new HttpHeaders({'tokenId': tokenId, 'user': user, 'accountId': accountId.toString()});    
        return this.http.get(this.AUTHENTICATE_URL + "/closeSession" ,{headers:headers});
      }
      

}
