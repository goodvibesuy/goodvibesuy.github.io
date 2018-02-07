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
                data: JSON.stringify({name:$scope.name,unity:$scope.unity}),
                headers: { "Content-Type": "application/json; charset=utf-8" }
            }).then(function(response) {
                console.log(response);                
            });
        };

        $scope.update = function(id,name,address,tel){
            $scope.idUpdate =id;
            $scope.nameUpdate = name;
            $scope.addressUpdate = address;
            $scope.telUpdate = tel;
            $http({
                method: 'PUT',
                url: "http://localhost:3000/unity",
                data: JSON.stringify({id:$scope.id,name:$scope.name,address:$scope.address,tel:$scope.tel}),
                headers: { "Content-Type": "application/json; charset=utf-8" }
            }).then(function(response) {
                console.log(response);
            });
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
