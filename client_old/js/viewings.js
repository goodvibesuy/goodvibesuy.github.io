var app = angular.module('googApp', []);

var map = {};
var controllerBack = "riesgoNuevo";

app.controller('pointOfSailController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {      
        $scope.productsToSend = [];
        
        $http({
            method: 'GET',
            url: "http://localhost:3000/products",
            data: JSON.stringify({"a":"b"}),
            headers: { "Content-Type": "application/json; charset=utf-8" }
        }).then(function(response) {            
            $scope.products = response.data.data;
            angular.forEach($scope.products, function(value, key) {
                var product = {};
                product.id = value.id;
                product.name = value.name;
                product.path_image = value.path_image;
                product.typeTransaction = {};
                product.typeTransaction.delivery = 0;
                product.typeTransaction.return = 0;
                product.typeTransaction.empty = 0;
                $scope.productsToSend.push(product);
            });
        });        

        $scope.send = function(){
            $http({
                method: 'POST',
                url: "http://localhost:3000/viewings",
                data: JSON.stringify({data:$scope.productsToSend}),
                headers: { "Content-Type": "application/json; charset=utf-8" }
            }).then(function(response) {

                if(response.data.result == 1){
                    alert("Se han guardado los datos correctamente");
                }               
                console.log(response);                
            });
        }
               
        $scope.newViewing = function(){
            $http({
                method: 'POST',
                url: "http://localhost:3000/viewings",
                data: JSON.stringify({name:$scope.name,address:$scope.address,tel:$scope.tel}),
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
                url: "http://localhost:3000/products",
                data: JSON.stringify({id:$scope.id,name:$scope.name,address:$scope.address,tel:$scope.tel}),
                headers: { "Content-Type": "application/json; charset=utf-8" }
            }).then(function(response) {
                console.log(response);
            });
        };

        $scope.editPointOfSale = function(){
            $http({
                method: 'PUT',
                url: "http://localhost:3000/products",
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
                url: "http://localhost:3000/products",
                data: JSON.stringify({id:id}),
                headers: { "Content-Type": "application/json; charset=utf-8" }
            }).then(function(response) {
                console.log(response);                
            });
        }

}]);
