import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KpiService } from '../../../services/kpi.service';
import { SupplyService } from '../../../services/supply.service';
import { Supply } from '../../../../../../datatypes/supply';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { SupplyTable } from '../../../../../../datatypes/supplyTable';

@Component({
    selector: 'app-reportes',
    templateUrl: './reportes.component.html',
    styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
    private suppliesPrice: Supply[];
    private suppliesPriceTable: Supply[];
    private supplies: SupplyTable[];
    private chart: AmChart;
    private suppliesById: Map<number, any>;
    public error:boolean;
    private errorMessage:string;

    constructor(private router: Router,
        private kpiService: KpiService,
        private supplyService: SupplyService,
        private AmCharts: AmChartsService
    ) {
    }

    compareDate(a, b) {
        if (a.price_date > b.price_date) {
            return -1;
        }
        if (a.price_date < b.price_date) {
            return 1;
        }
        return 0;
    }


    suppliesPrices(id: number): void {
        this.kpiService.get(id).subscribe(
            response => {
                if (response.result < 0) {
                    this.error = true;
                    this.errorMessage = response.message;
                    
                } else {
                    this.error = false;
                    this.suppliesPrice = response.data;
                    this.suppliesPriceTable = Object.assign([], this.suppliesPrice);
                    this.suppliesPriceTable.sort(this.compareDate);
                    

                    var chartData = [];

                    for (var i = 0; i < this.suppliesPrice.length; i++) {
                        var newDate = new Date(this.suppliesPrice[i].price_date);
                        chartData.push({
                            date: newDate,
                            visits: this.suppliesPrice[i].amount
                        });
                    }

                    this.chart = this.AmCharts.makeChart("chartdiv", {
                        "theme": "light",
                        "type": "serial",
                        "dataProvider": chartData,
                        "valueAxes": [{
                            "inside": true,
                            "axisAlpha": 0
                        }],
                        "graphs": [{
                            "id": "g1",
                            "balloonText": "<div style='margin:5px; font-size:19px;'><span style='font-size:13px;'>[[category]]</span><br>[[value]]</div>",
                            "bullet": "round",
                            "bulletBorderAlpha": 1,
                            "bulletBorderColor": "#FFFFFF",
                            "hideBulletsCount": 50,
                            "lineThickness": 2,
                            "lineColor": "#fdd400",
                            "negativeLineColor": "#67b7dc",
                            "valueField": "visits"
                        }],
                        "chartScrollbar": {
                        },
                        "chartCursor": {},
                        "categoryField": "date",
                        "categoryAxis": {
                            "parseDates": true,
                            "axisAlpha": 0,
                            "minHorizontalGap": 55
                        }
                    });
                }
            }
        );

    }

    supplyHistory(id: number): void {
        this.kpiService.get(id).subscribe(
            response => {
                this.suppliesPrice = response.data;
            }
        );
        this.suppliesPrices(id);
    }

    ngAfterViewInit() {
        /*
        this.suppliesById = new Map<number, any>();
        this.suppliesPrices();
        */
    }

    ngOnDestroy() {
        if (this.chart) {
            this.AmCharts.destroyChart(this.chart);
        }
    }


    ngOnInit() {
        /*
        
                var chart = AmCharts.makeChart("chartdiv",
                    {
                        "type": "serial",
                        "theme": "light",
                        "dataProvider": [{
                            "name": "Green Life",
                            "points": 35654,
                            "color": "#A9BE3F",
                            "bullet": "images/greenLife.png"
                        }, {
                            "name": "Citra Trip",
                            "points": 65456,
                            "color": "#FCB100",
                            "bullet": "images/citraTrip.png"
                        }, {
                            "name": "Citra Trip",
                            "points": 45724,
                            "color": "#F8FF32",
                            "bullet": "images/citraTrip.png"
                        }, {
                            "name": "Sun Kiss",
                            "points": 13654,
                            "color": "#6E2539",
                            "bullet": "images/sunKiss.png"
                        }],
                        "valueAxes": [{
                            "maximum": 80000,
                            "minimum": 0,
                            "axisAlpha": 0,
                            "dashLength": 4,
                            "position": "left"
                        }],
                        "startDuration": 1,
                        "graphs": [{
                            "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
                            "bulletOffset": 10,
                            "bulletSize": 52,
                            "colorField": "color",
                            "cornerRadiusTop": 8,
                            "customBulletField": "bullet",
                            "fillAlphas": 0.8,
                            "lineAlpha": 0,
                            "type": "column",
                            "valueField": "points"
                        }],
                        "marginTop": 0,
                        "marginRight": 0,
                        "marginLeft": 0,
                        "marginBottom": 0,
                        "autoMargins": false,
                        "categoryField": "name",
                        "categoryAxis": {
                            "axisAlpha": 0,
                            "gridAlpha": 0,
                            "inside": true,
                            "tickLength": 0
                        },
                        "export": {
                            "enabled": true
                        }
                    });
        
                
                var chartData2 = {
                    "1997": [
                        { "sector": "Green Life", "size": 6.1 },
                        { "sector": "Citra Trip", "size": 20.9 },
                        { "sector": "Paradise Dream", "size": 1.8 },
                        { "sector": "Yellow Rolling", "size": 4.2 }],
                    "1998": [
                        { "sector": "Green Life", "size": 6.2 },
                        { "sector": "Citra Trip", "size": 21.4 },
                        { "sector": "Paradise Dream", "size": 1.9 },
                        { "sector": "Yellow Rolling", "size": 4.2 }],
                    "1999": [
                        { "sector": "Green Life", "size": 5.7 },
                        { "sector": "Citra Trip", "size": 20 },
                        { "sector": "Paradise Dream", "size": 1.8 },
                        { "sector": "Yellow Rolling", "size": 4.4 }]
                };
        
                var texto = {
                    "1997": "Febrero",
                    "1998": "Marzo",
                    "1999": "Abril"
                }
        
        
        
        */
        this.supplyService.getListSupply().subscribe(
            response => {
                this.supplies = response.data;
                this.supplyHistory(response.data[0].id);
            }
        )


        /*
            
        
              var currentYear = 1997;
              var chart2 = AmCharts.makeChart("chartdiv2", {
                "type": "pie",
                "theme": "light",
                "labelText": "[[percents]]%",
                "dataProvider": [],
                "valueField": "size",
                "titleField": "sector",
                "startDuration": 0,
                "innerRadius": 60,
                "legend": {
                  "position": "bottom"
                },
                "titles": [{
                  "text": "Venta de productos"
                }],
                "allLabels": [{
                  "y": "50%",
                  "align": "center",
                  "size": 20,
                  "bold": true,
                  "text": "1995",
                  "color": "#555"
                },
                {
                  "y": "55%",
                  "align": "center",
                  "size": 20,
                  "bold": true,
                  "text": "2018",
                  "color": "#555"
                }],
                "listeners": [{
                  "event": "init",
                  "method": function (e) {
                    var chart = e.chart;
                    function getCurrentData() {
                      var data = chartData2[currentYear];
                      currentYear++;
                      if (currentYear > 1999)
                        currentYear = 1997;
                      return data;
                    }
            
                    function loop() {
                      //chart.allLabels[0].text = currentYear;
                      chart.allLabels[0].text = texto[currentYear];
                      var data = getCurrentData();
                      chart.animateData(data, {
                        duration: 1000,
                        complete: function () {
                          setTimeout(loop, 2000);
                        }
                      });
                    }
                    loop();
                  }
                }],
                "export": {
                  "enabled": true
                }
              });
        */


    }


}




/*
@Component({
  template: `<div id="chartdiv" [style.width.%]="100" [style.height.px]="500"></div>`
})
export class AppComponent {

}
*/