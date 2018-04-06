import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ResultWithData, ResultCode } from '../../../../datatypes/result';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { GroupPos } from '../../../../datatypes/groupPos';

@Injectable()
export class GroupPosService {

    private groupPointOfSaleURL: string = '/api/groupPos';

    constructor(private http: HttpClient) { }

    get(): Observable<ResultWithData<GroupPos[]>> {
        return this.http.get<ResultWithData<GroupPos[]>>(this.groupPointOfSaleURL);
    }
}