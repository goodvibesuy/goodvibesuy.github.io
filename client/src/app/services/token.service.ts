import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TokenService {
	constructor() {}

	public setToken(tokenId: string, user: string, accountId: string) {
		localStorage.setItem('token', tokenId);
		localStorage.setItem('user', user);
		localStorage.setItem('accountId', accountId);
	}

	public removeToken() {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		localStorage.removeItem('accountId');
	}

	public generateHeaderToken(): HttpHeaders {
		let token = localStorage.getItem('token');
		let userSaved = localStorage.getItem('user');
		let accountId = Number(localStorage.getItem('accountId'));

		return this.generateHeaderTokenFromValues(token, userSaved, accountId);
	}

	public generateHeaderTokenFromValues(token: string, userSaved: string, accountId: number): HttpHeaders {
		let headers = null;

		if (!!token && !!userSaved && !!accountId) {
			headers = new HttpHeaders({
				tokenId: token,
				user: userSaved,
				accountId: accountId.toString()
			});
		}

		return headers;
	}
}
