import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable()
export class AuthenticateService {
	AUTHENTICATE_URL: string = '/api/authenticate';

	constructor(private http: HttpClient, private tokenService: TokenService) {}

	login(user: String, pass: String): Observable<any> {
		return this.http.post(this.AUTHENTICATE_URL + '/login', { user, pass });
	}

	verifyToken(): Observable<any> {
		return this.http.get(this.AUTHENTICATE_URL + '/verifyToken');
	}

	closeSession(): Observable<any> {
		return this.http.get(this.AUTHENTICATE_URL + '/closeSession');
	}
}
