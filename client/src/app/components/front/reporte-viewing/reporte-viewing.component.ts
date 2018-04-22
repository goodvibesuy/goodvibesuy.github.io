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

@Component({
    selector: 'app-reporte-viewing',
    templateUrl: './reporte-viewing.component.html',
    styleUrls: ['./reporte-viewing.component.scss']
})
export class ReporteViewingComponent implements OnInit {

    @ViewChild('instancePOS') instancePOS: NgbTypeahead;
    focus$ = new Subject<string>();
    click$ = new Subject<string>();

    private viewings: any[];
    private products: Product[];
    private pointsOfSale: PointOfSale[];
    private viewingView: ViewingView;
    private sourceDate: NgbDateStruct;
    private lastDate: NgbDateStruct;
    private posId:number = 0;
    private idProduct:number = 0;
    constructor(private viewingsService: ViewingService,
        private posService:PointOfSaleService,
        private productsService: ProductsService
    ) {
        
        
    }

    search() {
        this.viewingsService.viewingsBetween(this.sourceDate, this.lastDate, this.posId, this.idProduct).subscribe(
            response => {
                this.viewingView = new ViewingView();
                this.viewings = response.data;
                for (let i = 0; i < response.data.length; i++) {
                    let line: LineViewingView = new LineViewingView(response.data[i].date, null, 0);
                    line.setProducts(response.data[i].products);
                    line.setPointOfSale(response.data[i].pos);
                    this.viewingView.addLine(line);
                }
            }
        );
    }

    ngOnInit() {
        this.pointsOfSale = new Array<PointOfSale>();
        let now = new Date();
        this.sourceDate = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
        this.lastDate = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() + 1 };

        this.posService.get().subscribe(
            response => {
                console.log(response);
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

    totalSales():number{
        let total = 0;        
        for(let i = 0 ; i < this.products.length ; i++){
            let idProduct = this.products[i].id;
            total += this.viewingView.getTotalTransactionByProductByType(idProduct,"delivery") - 
                    this.viewingView.getTotalTransactionByProductByType(idProduct,"return");
        }
        return total;
    }

    totalReturns():number{
        let total = 0;        
        for(let i = 0 ; i < this.products.length ; i++){
            let idProduct = this.products[i].id;
            total += this.viewingView.getTotalTransactionByProductByType(idProduct,"return");
        }
        return total;
    }

    

    
    searchPOS = (text$: Observable<string>) =>
    {
        console.log("--" , text$);
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.pointsOfSale.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
      } 

}
