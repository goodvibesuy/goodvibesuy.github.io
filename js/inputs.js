var app = angular.module('googApp', []);

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
