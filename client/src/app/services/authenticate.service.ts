import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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

}
