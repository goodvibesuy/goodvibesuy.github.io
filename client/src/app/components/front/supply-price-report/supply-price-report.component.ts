import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KpiService } from '../../../services/kpi.service';
import { SupplyService } from '../../../services/supply.service';
import { Supply } from '../../../../../../datatypes/supply';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { SupplyTable } from '../../../../../../datatypes/supplyTable';
import { UnitsConversorService } from '../../../services/units-conversor.service';

@Component({
  selector: 'app-supply-price-report',
  templateUrl: './supply-price-report.component.html',
  styleUrls: ['./supply-price-report.component.scss']
})
export class SupplyPriceReportComponent implements OnInit {
    private suppliesPrice: Supply[];
    suppliesPriceTable: Supply[];
    supplies: SupplyTable[];
    private chart: AmChart;
    private suppliesById: Map<number, any>;
    public error:boolean;
    errorMessage:string;
    

    constructor(private router: Router,
        private kpiService: KpiService,
        private supplyService: SupplyService,
        private AmCharts: AmChartsService,
        private unitsConversorService: UnitsConversorService
    ) {
    }

    compareDate(a, b) {
        if (a.purchaseDate > b.purchaseDate) {
            return -1;
        }
        if (a.purchaseDate < b.purchaseDate) {
            return 1;
        }
        return 0;
    }


    suppliesPrices(id: number): void {
        this.supplyService.getLastPricesBySupply(id).subscribe(
            responseSupply => {
                if (responseSupply.result < 0) {
                    this.error = true;
                    this.errorMessage = responseSupply.message;                    
                } else {
                    console.log(responseSupply);
                    this.error = false;
                    this.suppliesPrice = responseSupply.data;
                    this.suppliesPriceTable = Object.assign([], this.suppliesPrice);
                    this.suppliesPriceTable.sort(this.compareDate);

                    var chartData = [];

                    for (var i = 0; i < this.suppliesPrice.length; i++) {
                        var newDate = new Date(this.suppliesPrice[i].purchaseDate);
                        this.suppliesPrice[i].pricePerKG = 
                                this.unitsConversorService.pricePerKG(this.suppliesPrice[i].supplyUnit,this.suppliesPrice[i].purchaseAmount);
                        chartData.push({
                            date: newDate,
                            visits: this.suppliesPrice[i].pricePerKG
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
        this.supplyService.getLastPrices().subscribe(
            prices => {
                console.log(prices);
            }
        );

        this.supplyService.getListSupply().subscribe(
            response => {
                this.supplies = response.data;
                this.supplyHistory(response.data[0].id);
            }
        );
    }
}
