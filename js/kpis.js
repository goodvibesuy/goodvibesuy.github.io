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
                    if( $scope.kpis[key][j].type == "delivery" || $scope.kpis[key][j].type  == "return"){
                        entrada[$scope.kpis[key][j].type] = $scope.kpis[key][j].quantity;
                    }                    
                }
                data.push(entrada);
            });

            var chart = AmCharts.makeChart( "chartdiv", {
                "type": "serial",
                "theme": "light",
                "dataProvider": data,
                "valueAxes": [ {
                  "gridColor": "#FFFFFF",
                  "gridAlpha": 0.2,
                  "dashLength": 0
                } ],
                "gridAboveGraphs": true,
                "startDuration": 1,
                "graphs": [ {
                  "balloonText": "[[category]]: <b>[[value]]</b>",
                  "fillAlphas": 0.8,
                  "lineAlpha": 0.2,
                  "type": "column",
                  "valueField": "delivery"
                },{
                  "balloonText": "[[category]]:* <b>[[value]]</b>",
                  "fillAlphas": 0.8,
                  "lineAlpha": 0.2,
                  "type": "column",
                  "valueField": "return"
                } ],
                "chartCursor": {
                  "categoryBalloonEnabled": false,
                  "cursorAlpha": 0,
                  "zoomable": false
                },
                "categoryField": "product",
                "categoryAxis": {
                  "gridPosition": "start",
                  "gridAlpha": 0,
                  "tickPosition": "start",
                  "tickLength": 20
                },
                "export": {
                  "enabled": true
                }
              
              } );

        });
}]);
