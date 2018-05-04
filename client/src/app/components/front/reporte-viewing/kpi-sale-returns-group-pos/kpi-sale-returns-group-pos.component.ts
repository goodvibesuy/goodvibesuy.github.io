import { Component, OnInit, Input } from '@angular/core';
import { ViewingView } from '../../../../../../../datatypes/views/viewingView';
import { GroupPos } from '../../../../../../../datatypes/groupPos';

@Component({
  selector: 'kpi-sale-returns-group-pos',
  templateUrl: './kpi-sale-returns-group-pos.component.html',
  styleUrls: ['./kpi-sale-returns-group-pos.component.scss']
})
export class KpiSaleReturnsGroupPosComponent implements OnInit {
    @Input() groupPOS: GroupPos[];
    @Input() viewingView: ViewingView;
    @Input() totalSales: number;
    @Input() totalReturns: number;

    private kpiSales: { pos: GroupPos, delivery: number, returnProduct: number, totalSale: number, percentSale: number, shareSale: number }[];
    private kpiReturns: { pos: GroupPos, delivery: number, returnProduct: number, percentReturn: number, shareReturn: number }[];

    constructor() { }

    ngOnInit() {
    }

    updateData(): void {
        setTimeout(() => {
            if (this.viewingView !== undefined && this.groupPOS !== undefined) {
                this.kpiSales = new Array<{ pos: GroupPos, delivery: number, returnProduct: number, totalSale: number, percentSale: number, shareSale: number }>();
                this.kpiReturns = new Array<{ pos: GroupPos, delivery: number, returnProduct: number, percentReturn: number, shareReturn: number }>();
                for (let i = 0; i < this.groupPOS.length; i++) {
                    let gpos: GroupPos = this.groupPOS[i];
                    if (this.viewingView.getTotalTransactionByGroupPOSByType(gpos.id,"delivery") > 0) {
                        let delivery: number = this.viewingView.getTotalTransactionByGroupPOSByType(gpos.id,"delivery");
                        let returnProduct: number = this.viewingView.getTotalTransactionByGroupPOSByType(gpos.id,"return");
                        let totalSale: number = delivery - returnProduct;
                        let percentSale: number = Number( (totalSale / delivery * 100).toFixed(2));
                        let shareSale: number = Number(((delivery - returnProduct) / this.totalSales * 100).toFixed(2));
                        let percentReturn: number = Number(((returnProduct / delivery) * 100).toFixed(2));
                        let shareReturn: number = Number((returnProduct / this.totalReturns * 100).toFixed(2));

                        this.kpiSales.push({
                            pos: gpos, delivery: delivery, returnProduct: returnProduct,
                            totalSale: totalSale, percentSale: percentSale, shareSale: shareSale
                        });
                        this.kpiReturns.push({
                            pos: gpos, delivery: delivery, returnProduct: returnProduct,
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
