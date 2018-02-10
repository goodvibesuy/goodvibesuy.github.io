var app = angular.module('googApp', []);

var map = {};
var controllerBack = "riesgoNuevo";

app.controller('pointOfSailController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {        
        $http({
            method: 'GET',
            url: "http://localhost:3000/products",
            data: JSON.stringify({"a":"b"}),
            headers: { "Content-Type": "application/json; charset=utf-8" }
        }).then(function(response) {
            $scope.products = response.data.data;            
        });          
        
        $scope.newProduct = function(){
            $http({
                method: 'POST',
                url: "http://localhost:3000/products",
                data: JSON.stringify({name:$scope.name,image:$scope.image}),
                headers: { "Content-Type": "application/json; charset=utf-8" }
            }).then(function(response) {
                console.log(response);
                $http({
                    method: 'GET',
                    url: "http://localhost:3000/products",
                    data: JSON.stringify({"a":"b"}),
                    headers: { "Content-Type": "application/json; charset=utf-8" }
                }).then(function(response) {
                    $scope.products = response.data.data;            
                });
            });
        };

        $scope.update = function(id,name,image){
            $scope.idUpdate =id;
            $scope.nameUpdate = name;
            $scope.imageUpdate = image;
            $http({
                method: 'PUT',
                url: "http://localhost:3000/unity",
                data: JSON.stringify({id:$scope.id,name:$scope.name,address:$scope.address,tel:$scope.tel}),
                headers: { "Content-Type": "application/json; charset=utf-8" }
            }).then(function(response) {
                console.log(response);
            });
        };

        $scope.editProduct = function(){
            $http({
                method: 'PUT',
                url: "http://localhost:3000/unity",
                data: JSON.stringify({id:$scope.idUpdate,name:$scope.nameUpdate,
                                    image:$scope.imageUpdate}),
                headers: { "Content-Type": "application/json; charset=utf-8" }
            }).then(function(response) {
                console.log(response);
            });
        };
      
        $scope.delete = function(id){
            $http({
                method: 'DELETE',
                url: "http://localhost:3000/unity",
                data: JSON.stringify({id:id}),
                headers: { "Content-Type": "application/json; charset=utf-8" }
            }).then(function(response) {
                console.log(response);                
            });
        }

}]);
