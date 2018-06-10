import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewingService } from '../../../services/viewing.service';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../../../../datatypes/product';
import { LineViewingView } from '../../../../../../datatypes/views/lineViewingView';
import { ViewingView } from '../../../../../../datatypes/views/viewingView';
import { NgbDateStruct, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { PointOfSaleService } from '../../../services/point-of-sale.service';
import { PointOfSale } from '../../../../../../datatypes/pointOfSale';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { GroupPosService } from '../../../services/group-pos.service';
import { KpiSalesPosComponent } from './kpi-sales-pos/kpi-sales-pos.component';
import { KpiSaleReturnsGroupPosComponent } from './kpi-sale-returns-group-pos/kpi-sale-returns-group-pos.component';
import { debounceTime, distinctUntilChanged, merge, map, filter } from 'rxjs/operators';

@Component({
    selector: 'app-reporte-viewing',
    templateUrl: './reporte-viewing.component.html',
    styleUrls: ['./reporte-viewing.component.scss']
})
export class ReporteViewingComponent implements OnInit {
    @ViewChild('instancePOS') instancePOS: NgbTypeahead;
    focus$ = new Subject<string>();
    click$ = new Subject<string>();
    @ViewChild(KpiSalesPosComponent) kpiSalesPOS: KpiSalesPosComponent;
    @ViewChild(KpiSaleReturnsGroupPosComponent) kpiSalesReturnGroupPOS: KpiSaleReturnsGroupPosComponent;
    

    public viewings: any[];
    private products: Product[];
    public pointsOfSale: PointOfSale[];
    public viewingView: ViewingView;
    sourceDate: NgbDateStruct;
    lastDate: NgbDateStruct;
    posId: number = 0;    
    idProduct: number = 0;
    public useDates: boolean = true;
    private shareSales: any[];
    public ocultarDetalles: boolean;
    public groupPOS: any[];

    currentView:number = 0

    constructor(private viewingsService: ViewingService,
        private posService: PointOfSaleService,
        private productsService: ProductsService,
        private groupPOSService: GroupPosService
    ) {
        this.ocultarDetalles = window.innerWidth < 400;
    }

    searchPOS = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      merge(this.focus$),
      merge(this.click$.pipe(filter(() => !this.instancePOS.isPopupOpen()))),
      map(term => (term === '' ? this.pointsOfSale
        : this.pointsOfSale.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );

    formatter = (x: PointOfSale) => x.name;
    
    selectedPOS(x):void{      
        this.posId = x.item.id;
    }

    /*
    searchPOS = (text$: Observable<string>) => {
        text$
            .debounceTime(200)
            .distinctUntilChanged()
            .map(term => term.length < 2 ? []
                : this.pointsOfSale.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
    }
    */


    changeTab(index:number):void{
        this.currentView = index;
        console.log(index);
    }

    search() {
        let sourceDate: NgbDateStruct = this.sourceDate;
        let lastDate: NgbDateStruct = this.lastDate;
        if (!this.useDates) {
            sourceDate = null;
            lastDate = null;
        }

        this.viewingsService.viewingsBetween(sourceDate, lastDate, this.posId, this.idProduct).subscribe(
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
                this.kpiSalesPOS.updateData();
                this.kpiSalesReturnGroupPOS.updateData();
            }
        );
    }

    ngOnInit() {
        this.groupPOSService.get().subscribe(
            groupsResponse => {
                if (groupsResponse.result > 0) {
                    this.groupPOS = groupsResponse.data;
                }
            }
        )

        this.pointsOfSale = new Array<PointOfSale>();
        let now = new Date();
        this.sourceDate = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
        this.lastDate = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() + 1 };

        this.posService.get().subscribe(
            response => {
                this.pointsOfSale = response.data;
            }
        );

        this.productsService.getAll().subscribe(
            responseProducts => {
                this.products = responseProducts.data;
                this.search();
            }
        );
    }

    totalSales(): number {
        let total = 0;
        if (this.products !== undefined && this.viewingView !== undefined) {
            for (let i = 0; i < this.products.length; i++) {
                let idProduct = this.products[i].id;
                total += this.viewingView.getTotalTransactionByProductByType(idProduct, "delivery") -
                    this.viewingView.getTotalTransactionByProductByType(idProduct, "return");
            }
        }
        return total;
    }

    totalReturns(): number {
        let total = 0;
        if (this.products !== undefined && this.viewingView !== undefined) {
            for (let i = 0; i < this.products.length; i++) {
                let idProduct = this.products[i].id;
                total += this.viewingView.getTotalTransactionByProductByType(idProduct, "return");
            }
        }
        return total;
    }

    

}
