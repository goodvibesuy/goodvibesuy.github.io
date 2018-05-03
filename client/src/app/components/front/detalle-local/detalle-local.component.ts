import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { PointOfSaleService } from '../../../services/point-of-sale.service';
import { ProductsService } from '../../../services/products.service';
import { ViewingService } from '../../../services/viewing.service';
import { Product } from '../../../../../../datatypes/product';
import { PointOfSale } from '../../../../../../datatypes/pointOfSale';
import { ViewingView } from '../../../../../../datatypes/views/viewingView';
import { LineViewingView } from '../../../../../../datatypes/views/lineViewingView';


@Component({
    selector: 'app-detalle-local',
    templateUrl: './detalle-local.component.html',
    styleUrls: ['./detalle-local.component.css']
})
export class DetalleLocalComponent implements OnInit {
    private params: any;
    private id: number;
    private pointOfSale: PointOfSale;
    private products: Product[];
    private productsToSend: any[];
    private annotation: string = '';
    private unitePrice: number = 64;
    private submittedSuccessfully: boolean = false;
    private wasVisited: boolean = false;
    private currentRoute: number = -1;
    private viewingVisited: ViewingView;

    constructor(
        private route: ActivatedRoute,
        private pointOFSaleService: PointOfSaleService,
        private productService: ProductsService,
        private viewingService: ViewingService
    ) { }

    saveData():void{        
        localStorage.setItem("productsToSend",JSON.stringify(this.productsToSend));
    }

    ngOnInit(): void {

        console.log(JSON.parse( localStorage.getItem("productsToSend")));

        this.viewingVisited = new ViewingView();
        this.getPointOfSale(Number(this.route.snapshot.paramMap.get('id'))); 

        /////////////
        //
        // TODO: OJO !! CON EL 2 
        //
        ////////////
        const DOS: number = 2;
        this.productService.getPriceByProductByPOS(DOS, Number(this.route.snapshot.paramMap.get('id'))).subscribe(
            response => {
                console.log(response);
                if(response.result > 0){
                    this.unitePrice = response.data[0].amount;
                }
            }
        );

        this.currentRoute = Number(this.route.snapshot.paramMap.get('idRoute'));
        this.getProducts();

        this.viewingService.wasVisited(this.currentRoute, Number(this.route.snapshot.paramMap.get('id'))).subscribe(
            response => {
                if (response.result === 1) {
                    this.wasVisited = !!response.data && response.data.length > 0 &&
                                      response.data[0].idViewing !== null;
                }

                if (this.wasVisited) {
                    this.viewingService.getViewing(response.data[0].idViewing).subscribe(
                        response => {
                            this.viewingVisited.setDate(response.data[0].date);
                            let line: LineViewingView = new LineViewingView(response.data[0].date, null, 0);                            
                            line.setProducts(response.data[0].products);
                            line.setPointOfSale(response.data[0].pos);
                            this.viewingVisited.addLine(line);
                            console.log(this.viewingVisited);
                        }
                    )
                }
            }
        )
    }

    quantity(typeTransaction: string): number {
        let sum = 0;
        if (this.productsToSend !== undefined) {
            for (let i = 0; i < this.productsToSend.length; i++) {                
                sum += this.productsToSend[i].typeTransaction[typeTransaction]
            }
        }
        return sum;
    }

    getProductQuantityById(idProduct:number):any{
        let p = this.productsToSend.filter(input => input.id === idProduct)[0];
        return p.typeTransaction.delivery - p.typeTransaction.return;
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

            if (typeof(Storage) !== "undefined") {            
                console.log(localStorage.getItem("productsToSend"));
                if(JSON.parse(localStorage.getItem("productsToSend")) === undefined || JSON.parse(localStorage.getItem("productsToSend")) === null){                
                
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
                        localStorage.setItem("productsToSend",JSON.stringify(this.productsToSend));
                                
                }else{                
                    this.productsToSend = JSON.parse(localStorage.getItem("productsToSend"));
                }   
                    
            } else {
                alert("Su navegador no soporta almacenamiento local");
            }
        }); 
    }

    agregar(): void {
        this.viewingService.addViewing(this.pointOfSale.id, this.productsToSend, this.annotation, this.pointOfSale.id, this.currentRoute).subscribe(response => {
            if (response.result > 0) {
                this.submittedSuccessfully = true;
                localStorage.setItem("productsToSend",JSON.stringify(null));
            }
        });
    }
}
