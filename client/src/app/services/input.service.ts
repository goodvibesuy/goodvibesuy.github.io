// input.service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Input } from '../shared/models/input.model'
import { SupplyUnit } from '../shared/models/supply-unit.model'

@Injectable()
export class InputService {

    inputsUrl: string = '/api/inputs';
    supplyUnitsUrl: string = '/api/unity';
    headers = { "Content-Type": "application/json; charset=utf-8" };

    constructor(
        private http: HttpClient
    ) { }

    get(): Observable<Input[]> {
        return this.http.get<Input[]>(this.inputsUrl)
            .pipe(
            tap(heroes => this.log(`fetched input`)),
            map(r => (<any>r).data)
            )
    }

    getUnits(): Observable<SupplyUnit[]> {
        return this.http.get<SupplyUnit[]>(this.supplyUnitsUrl)
            .pipe(
            tap(heroes => this.log(`fetched SupplyUnit`)),
            map(r => (<any>r).data)
            )
    }

    update(id: number, name: string, supplyUnit: number): Observable<any> {
        return this.http
            .put<Input[]>(
            this.inputsUrl, // + '/' + id,
            { 'id': id, 'name': name, 'unity': supplyUnit, 'price': 123 }
            );
    }

    // delete(id: number): Observable<any> {
    //     return this.http
    //         .delete<Input[]>(
    //         this.inputsUrl, //+ '/' + id,
    //         { 'name': name, 'unity': supplyUnit, 'price': 123 }
    //         );
    // }

    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        //this.messageService.add('HeroService: ' + message);
        console.log('log: ' + message);
    }
}





/*var app = angular.module('googApp', []);

var map = {};
var controllerBack = "riesgoNuevo";

app.controller('pointOfSailController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {        

        $http({
            method: 'GET',
            url: "http://localhost:3000/unity",
            data: JSON.stringify({"a":"b"}),
            headers: { "Content-Type": "application/json; charset=utf-8" }
        }).then(function(response) {
            $scope.units = response.data.data;
            console.log($scope.units);
        });



        $http({
            method: 'GET',
            url: "http://localhost:3000/inputs",
            data: JSON.stringify({"a":"b"}),
            headers: { "Content-Type": "application/json; charset=utf-8" }
        }).then(function(response) {
            $scope.inputs = response.data.data;
        });
        
        $scope.newInput = function(){
            $http({
                method: 'POST',
                url: "http://localhost:3000/inputs",
                data: JSON.stringify({name:$scope.name,unity:$scope.unity,price:$scope.price}),
                headers: { "Content-Type": "application/json; charset=utf-8" }
            }).then(function(response) {
                console.log(response);      
                $http({
                    method: 'GET',
                    url: "http://localhost:3000/inputs",
                    data: JSON.stringify({"a":"b"}),
                    headers: { "Content-Type": "application/json; charset=utf-8" }
                }).then(function(response) {
                    $scope.inputs = response.data.data;            
                });          
            });
        };

        $scope.editInput = function(){
            $http({
                method: 'PUT',
                url: "http://localhost:3000/inputs",
                data: JSON.stringify({name:$scope.nameUpdate,unity:$scope.unityUpdate,price:$scope.priceUpdate,id:$scope.idUpdate}),
                headers: { "Content-Type": "application/json; charset=utf-8" }
            }).then(function(response) {
                console.log(response);                
            });
        };
        

        $scope.update = function(id,name,unity,amount){
            $scope.idUpdate =id;
            $scope.nameUpdate = name;
            $scope.unityUpdate = unity;
            $scope.priceUpdate = amount;
        };

        $scope.editPointOfSale = function(){
            $http({
                method: 'PUT',
                url: "http://localhost:3000/unity",
                data: JSON.stringify({id:$scope.idUpdate,name:$scope.nameUpdate,
                                    address:$scope.addressUpdate,tel:$scope.telUpdate}),
                headers: { "Content-Type": "application/json; charset=utf-8" }
            }).then(function(response) {
                console.log(response);
            });
        };
      
        $scope.delete = function(id){
            $http({
                method: 'DELETE',
                url: "http://localhost:3000/inputs",
                data: JSON.stringify({id:id}),
                headers: { "Content-Type": "application/json; charset=utf-8" }
            }).then(function(response) {
                console.log(response);                
            });
        }

}]);
*/