import { Component, OnInit, Input } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { ViewingService } from '../../../services/viewing.service';
import { PointOfSaleService } from '../../../services/point-of-sale.service';
import { ProductsService } from '../../../services/products.service';
import { ViewingView } from '../../../../../../datatypes/views/viewingView';
import { Product } from '../../../../../../datatypes/product';
import { LineViewingView } from '../../../../../../datatypes/views/lineViewingView';

@Component({
    selector: 'pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
    private chart: AmChart;

    @Input() title: string;
    @Input() valueField: string;
    //@Input() dataGraph:any[];

    private viewings: any[];
    private products: Product[];
    private viewingView: ViewingView;
    private shareSales: any[];


    constructor(private AmCharts: AmChartsService,
        private viewingsService: ViewingService,
        private posService: PointOfSaleService,
        private productsService: ProductsService) { }

    ngOnInit() {

        this.productsService.getAll().subscribe(
            responseProducts => {
                this.products = responseProducts.data;
                this.search();                
            }
        );

    }

    search(): void {
        this.viewingsService.viewingsBetween(null, null, 0, 0).subscribe(
            response => {
                this.shareSales = new Array();
                this.viewingView = new ViewingView();
                this.viewings = response.data;
                for (let i = 0; i < response.data.length; i++) {
                    let line: LineViewingView = new LineViewingView(response.data[i].date, null, 0);
                    line.setProducts(response.data[i].products);
                    line.setPointOfSale(response.data[i].pos);
                    this.viewingView.addLine(line);
                }

                for (let i = 0; i < this.products.length; i++) {
                    this.shareSales.push({
                        "productName": this.products[i].name, "sales":
                            this.viewingView.getTotalTransactionByProductByType(this.products[i].id, "delivery") -
                            this.viewingView.getTotalTransactionByProductByType(this.products[i].id, "return")
                    });
                }
                console.log(this.shareSales);

                this.chart = this.AmCharts.makeChart("pieChartdiv", {
                    "type": "pie",
                    "theme": "light",
                    "labelsEnabled": false,
                    "legend": {
                        "position": "bottom",
                        "autoMargins": false
                    },
                    "dataProvider": this.shareSales,
                    "valueField": this.valueField,
                    "titleField": this.title,
                    "balloon": {
                        "fixedPosition": true
                    },
                    "export": {
                        "enabled": true
                    }
                });


            }
        );


    }
}



