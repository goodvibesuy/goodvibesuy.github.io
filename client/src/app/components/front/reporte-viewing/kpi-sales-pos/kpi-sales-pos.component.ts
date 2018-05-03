import { Component, OnInit, Input } from '@angular/core';
import { PointOfSale } from '../../../../../../../datatypes/pointOfSale';
import { ViewingView } from '../../../../../../../datatypes/views/viewingView';

@Component({
    selector: 'kpi-sales-pos',
    templateUrl: './kpi-sales-pos.component.html',
    styleUrls: ['./kpi-sales-pos.component.scss']
})
export class KpiSalesPosComponent implements OnInit {

    @Input() pointsOfSale: PointOfSale[];
    @Input() viewingView: ViewingView;
    @Input() totalSales: number;
    @Input() totalReturns: number;

    private kpiSales: { pos: string, delivery: number, returnProduct: number, totalSale: number, percentSale: number, shareSale: number }[];

    constructor() { }

    ngOnInit() {
        console.log(this.pointsOfSale);
        console.log(this.viewingView);
        console.log(this.totalSales);
        console.log(this.totalReturns);

        this.kpiSales = new Array<{ pos: string, delivery: number, returnProduct: number, totalSale: number, percentSale: number, shareSale: number }>();
        for (let i = 0; i < this.pointsOfSale.length; i++) {
            let pos: PointOfSale = this.pointsOfSale[i];
            let delivery: number = this.viewingView.getTotalTransactionByPOSByType(pos.id, "delivery");
            let returnProduct: number = this.viewingView.getTotalTransactionByPOSByType(pos.id, "return");
            let totalSale: number = this.viewingView.getTotalTransactionByPOSByType(pos.id, "delivery") - this.viewingView.getTotalTransactionByPOSByType(pos.id, "return");
            let percentSale: number = Number((((this.viewingView.getTotalTransactionByPOSByType(pos.id, "delivery") - this.viewingView.getTotalTransactionByPOSByType(pos.id, "return")) / this.viewingView.getTotalTransactionByPOSByType(pos.id, "delivery")) * 100).toFixed(2));
            let shareSale: number = Number(((this.viewingView.getTotalTransactionByPOSByType(pos.id, "delivery") - this.viewingView.getTotalTransactionByPOSByType(pos.id, "return")) / this.totalSales * 100).toFixed(2));

            this.kpiSales.push({
                pos: pos.name, delivery: delivery, returnProduct: returnProduct,
                totalSale: totalSale, percentSale: percentSale, shareSale: shareSale
            });
        }
    }

}

/*
<ng-container *ngFor="let pos of pointsOfSale">
    <!-- TODO Mejorar el filtro-->
    <tr *ngIf="viewingView.getTotalTransactionByPOSByType(pos.id,'delivery') !== 0">
        <td>{{pos.name}}</td>
        <td>{{viewingView.getTotalTransactionByPOSByType(pos.id,"delivery")}}</td>
        <td>{{viewingView.getTotalTransactionByPOSByType(pos.id,"return")}}</td>
        <td>{{viewingView.getTotalTransactionByPOSByType(pos.id,"delivery") - viewingView.getTotalTransactionByPOSByType(pos.id,"return")}}</td>
        <td>
            <span *ngIf="viewingView.getTotalTransactionByPOSByType(pos.id,'delivery') !== 0">
                {{(((viewingView.getTotalTransactionByPOSByType(pos.id,"delivery") - viewingView.getTotalTransactionByPOSByType(pos.id,"return"))
                / viewingView.getTotalTransactionByPOSByType(pos.id,"delivery") ) * 100).toFixed(2)
                }} %
            </span>
        </td>
        <td>
            {{( (viewingView.getTotalTransactionByPOSByType(pos.id,"delivery") - viewingView.getTotalTransactionByPOSByType(pos.id,"return"))
            / totalSales * 100).toFixed(2) }} %
        </td>
    </tr>
</ng-container>
*/