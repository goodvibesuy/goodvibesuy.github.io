import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { PointOfSaleService } from '../../../services/point-of-sale.service';
import { ProductsService } from '../../../services/products.service';
import { ViewingService } from '../../../services/viewing.service';
import { Product } from '../../../../../../datatypes/product';
import { PointOfSale } from '../../../../../../datatypes/pointOfSale';

@Component({
    selector: 'app-detalle-local',
    templateUrl: './detalle-local.component.html',
    styleUrls: ['./detalle-local.component.css']
})
export class DetalleLocalComponent implements OnInit {
    private params: any;
    private id: string;
    private pointOfSale: PointOfSale;
    private products: Product[];
    private productsToSend: any[];
    private annotation:string='';
    private unitePrice:number = 69;

    constructor(
        private route: ActivatedRoute,
        private pointOFSaleService: PointOfSaleService,
        private productService: ProductsService,
        private viewingService: ViewingService
    ) { }

    ngOnInit(): void {
        this.getPointOfSale(Number(this.route.snapshot.paramMap.get('id')));
        this.getProducts();
    }

    quantity(typeTransaction: string): number {
        let sum = 0;
        if(this.productsToSend !== undefined){
            for(let i = 0 ; i < this.productsToSend.length ; i++){
                sum  += this.productsToSend[i].typeTransaction[typeTransaction]
            }
        }        
        return sum;
    }

    getPointOfSale(id: Number): void {
        var pos: PointOfSale;
        this.pointOFSaleService.getPointOfSale(id).subscribe(result => {
            console.log(result.data, "data");
            this.pointOfSale = result.data;
        });
    }

    getProducts(): void {
        this.productService.getAll().subscribe(response => {
            this.products = response.data;
            this.productsToSend = new Array();
            for (let p of this.products) {
                let product: any = {};
                product.id = p.id;
                product.name = p.name;
                product.path_image = p.path_image;
                product.typeTransaction = {};
                product.typeTransaction.delivery = 0;
                product.typeTransaction.return = 0;
                product.typeTransaction.empty = 0;
                this.productsToSend.push(product);
            }
            console.log(this.productsToSend);
        });
    }

    agregar(): void {        
        this.viewingService.addViewing(this.pointOfSale.id, this.productsToSend,this.annotation).subscribe(response => {
            if(response.result > 0){
                alert("Los datos se guardaron correctamente");
            }
        });
    }
}
