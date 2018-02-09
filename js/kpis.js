var app = angular.module('googApp', []);

var map = {};
var controllerBack = "riesgoNuevo";

app.controller('pointOfSailController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {        

        $http({
            method: 'GET',
            url: "http://localhost:3000/kpis",
            data: JSON.stringify({"a":"b"}),
            headers: { "Content-Type": "application/json; charset=utf-8" }
        }).then(function(response) {
            $scope.kpis = {};
            
            for(var i = 0; i < response.data.data.length; i++){
                if($scope.kpis[response.data.data[i].name] === undefined){
                    $scope.kpis[response.data.data[i].name] = [];
                }
                $scope.kpis[response.data.data[i].name].push(response.data.data[i]);
            }

            var data = [];
            Object.keys($scope.kpis).forEach(function (key, index) {
                var entrada = {};
                entrada.product = key;
                for(var j = 0; j < $scope.kpis[key].length; j++){
                    entrada[$scope.kpis[key][j].type] = $scope.kpis[key][j].quantity;
                }
                data.push(entrada);
            });
            
            var chart = AmCharts.makeChart("chartdiv", {
                "theme": "light",
                "type": "serial",
                "dataProvider": data,
                "valueAxes": [{
                    "stackType": "3d",
                    "unit": "%",
                    "position": "left",
                    "title": "GDP growth rate",
                }],
                "startDuration": 1,
                "graphs": [
                    {
                        "balloonText": "Vacios: <b>[[value]]</b>",
                        "fillAlphas": 0.9,
                        "lineAlpha": 0.2,
                        "title": "Vacios",
                        "type": "column",
                        "valueField": "empty"
                    }, {
                        "balloonText": "Devueltos: <b>[[value]]</b>",
                        "fillAlphas": 0.9,
                        "lineAlpha": 0.2,
                        "title": "Devueltos",
                        "type": "column",
                        "valueField": "return"
                    },
                    {
                    "balloonText": "Entregados: <b>[[value]]</b>",
                    "fillAlphas": 0.9,
                    "lineAlpha": 0.2,
                    "title": "Entregados",
                    "type": "column",
                    "valueField": "delivery"
                }],
                "plotAreaFillAlphas": 0.1,
                "depth3D": 90,
                "angle": 75,
                "categoryField": "product",
                "categoryAxis": {
                    "gridPosition": "start"
                },
                "export": {
                    "enabled": true
                 }
            });


        });
}]);
