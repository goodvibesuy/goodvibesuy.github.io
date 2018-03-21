import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {
	private userUrl: string = '/api/users/';

	constructor(private http: HttpClient) {}

	get(): Observable<User[]> {
		return this.http.get<User[]>(this.userUrl).pipe(map(r => (<any>r).data));
	}
}
