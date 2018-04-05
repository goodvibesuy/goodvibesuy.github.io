import { Component, OnInit } from '@angular/core';
import { ViewingService } from '../../../services/viewing.service';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../../../../datatypes/product';
import { LineViewingView } from '../../../../../../datatypes/views/lineViewingView';


@Component({
    selector: 'app-reporte-viewing',
    templateUrl: './reporte-viewing.component.html',
    styleUrls: ['./reporte-viewing.component.scss']
})
export class ReporteViewingComponent implements OnInit {
    private viewings: any[];
    private products: any[];
    private lines: LineViewingView[];
    //private products: Map<number,Product>;
    constructor(private viewingsService: ViewingService,
        private productsService: ProductsService
    ) {
        this.lines = new Array<LineViewingView>();
        //this.products = new Map<number,Product>();
    }

    ngOnInit() {
        this.productsService.getAll().subscribe(
            responseProducts => {
                this.products = responseProducts.data;                
                this.viewingsService.lastViewings(10).subscribe(
                    response => {
                        this.viewings = response.data;

                        for (let i = 0; i < response.data.length; i++) {
                            let line: LineViewingView = new LineViewingView(response.data[i].date, null, 0);
                            line.setProducts(response.data[i].products);
                            this.lines.push(line);
                        }
                        console.log(this.lines);
                    }
                )
            }
        );
    }
}
