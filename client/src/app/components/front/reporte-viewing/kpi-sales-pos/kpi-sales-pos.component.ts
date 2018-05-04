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

    private kpiSales: { pos: PointOfSale, delivery: number, returnProduct: number, totalSale: number, percentSale: number, shareSale: number }[];
    private kpiReturns: { pos: PointOfSale, delivery: number, returnProduct: number, percentReturn: number, shareReturn: number }[];

    constructor() { }

    ngOnInit() {
    }

    updateData(): void {
        setTimeout(() => {
            if (this.viewingView !== undefined && this.pointsOfSale !== undefined) {
                this.kpiSales = new Array<{ pos: PointOfSale, delivery: number, returnProduct: number, totalSale: number, percentSale: number, shareSale: number }>();
                this.kpiReturns = new Array<{ pos: PointOfSale, delivery: number, returnProduct: number, percentReturn: number, shareReturn: number }>();
                for (let i = 0; i < this.pointsOfSale.length; i++) {
                    let pos: PointOfSale = this.pointsOfSale[i];
                    if (this.viewingView.getTotalTransactionByPOSByType(pos.id, "delivery") > 0) {
                        let delivery: number = this.viewingView.getTotalTransactionByPOSByType(pos.id, "delivery");
                        let returnProduct: number = this.viewingView.getTotalTransactionByPOSByType(pos.id, "return");
                        let totalSale: number = this.viewingView.getTotalTransactionByPOSByType(pos.id, "delivery") - this.viewingView.getTotalTransactionByPOSByType(pos.id, "return");
                        let percentSale: number = Number((((this.viewingView.getTotalTransactionByPOSByType(pos.id, "delivery") - this.viewingView.getTotalTransactionByPOSByType(pos.id, "return")) / this.viewingView.getTotalTransactionByPOSByType(pos.id, "delivery")) * 100).toFixed(2));
                        let shareSale: number = Number(((this.viewingView.getTotalTransactionByPOSByType(pos.id, "delivery") - this.viewingView.getTotalTransactionByPOSByType(pos.id, "return")) / this.totalSales * 100).toFixed(2));

                        let percentReturn: number = Number(((this.viewingView.getTotalTransactionByPOSByType(pos.id, "return") /
                            this.viewingView.getTotalTransactionByPOSByType(pos.id, "delivery")) * 100).toFixed(2));

                        let shareReturn: number = Number((this.viewingView.getTotalTransactionByPOSByType(pos.id, "return") / this.totalReturns * 100).toFixed(2));

                        this.kpiSales.push({
                            pos: pos, delivery: delivery, returnProduct: returnProduct,
                            totalSale: totalSale, percentSale: percentSale, shareSale: shareSale
                        });

                        this.kpiReturns.push({
                            pos: pos, delivery: delivery, returnProduct: returnProduct,
                            percentReturn: percentReturn, shareReturn: shareReturn
                        });

                    }
                }
                this.kpiSales.sort(this.compareShareSales);
                this.kpiReturns.sort(this.compareShareReturns);
            }
        }, 100);
    }


    orderBySale(): void {
        this.kpiSales.sort(this.compareSales);
    }

    orderByShareSale(): void {
        this.kpiSales.sort(this.compareShareSales);
    }

    orderByReturn(): void {
        this.kpiReturns.sort(this.compareReturns);
    }

    orderByShareReturns(): void {
        this.kpiReturns.sort(this.compareShareReturns);
    }


    compareSales(a, b) {
        if (a.percentSale > b.percentSale) {
            return -1;
        }
        if (a.percentSale < b.percentSale) {
            return 1;
        }
        return 0;
    }

    compareShareSales(a, b) {
        if (a.shareSale > b.shareSale) {
            return -1;
        }
        if (a.shareSale < b.shareSale) {
            return 1;
        }
        return 0;
    }

    compareReturns(a, b) {
        if (a.percentReturn > b.percentReturn) {
            return -1;
        }
        if (a.percentReturn < b.percentReturn) {
            return 1;
        }
        return 0;
    }

    compareShareReturns(a, b) {
        if (a.shareReturn > b.shareReturn) {
            return -1;
        }
        if (a.shareReturn < b.shareReturn) {
            return 1;
        }
        return 0;
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