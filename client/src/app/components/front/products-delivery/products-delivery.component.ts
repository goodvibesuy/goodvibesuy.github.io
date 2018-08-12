// angular core
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
// service
import { PointOfSaleService } from '../../../services/point-of-sale.service';
import { CustomerService } from '../../../services/customer.service';
import { ProductsService } from '../../../services/products.service';
import { ViewingService } from '../../../services/viewing.service';
// datatypes
import { Product } from '../../../../../../datatypes/product';
import { PointOfSale } from '../../../../../../datatypes/pointOfSale';
import { Customer, CustomerType } from '../../../../../../datatypes/customer';
import { AlertService } from '../../../modules/alert/alert.service';

@Component({
    templateUrl: './products-delivery.component.html'
})
export class ProductsDeliveryComponent implements OnInit {

    private params: any;
    private id: number;
    private pointOfSale: PointOfSale;
    public customer: Customer;
    public products: Product[];
    public productsToSend: any[];
    public annotation: string = '';
    public unitePrice: number = 64;
    public submittedSuccessfully: boolean = false;
    public wasVisited: boolean = false;
    public currentRoute: number = -1;
    public viewingProductTypes: any[];
    public idViewing: number;

    constructor(
        private route: ActivatedRoute,
        private pointOfSaleService: PointOfSaleService,
        private customerService: CustomerService,
        private productService: ProductsService,
        private viewingService: ViewingService,
        private alertService: AlertService
    ) { }

    saveData(): void {
        localStorage.setItem("productsToSend", JSON.stringify(this.productsToSend));
    }

    ngOnInit(): void {

        var idCustomer: number = parseInt(this.route.snapshot.paramMap.get('id'));
        var idRoute: number = parseInt(this.route.snapshot.paramMap.get('idRoute'));

        this.currentRoute = idRoute;

        this.viewingService.getViewingProductTypes().subscribe(
            response => {
                if (response.result > 0) {                    
                    this.viewingProductTypes = response.data;
                    this.loadCustomer(idCustomer);
                    this.loadUnitPrice(idCustomer);
                    this.getProducts();
                    this.viewingService.wasVisited(this.currentRoute, idCustomer).subscribe(
                        response => {
                            if (response.result === 1) {
                                this.wasVisited = !!response.data && response.data.length > 0 &&
                                                response.data[0].idViewing !== null;
                                if (this.wasVisited) {
                                    console.warn(response.data);
                                    this.idViewing = response.data[0].idViewing;
                                }
                            }
                        },
                        error => {
                            console.error(error);
                            this.alertService.error('Error cargando datos del servidor.');
                        }
                    );
                }
            }
        )
    }

    private quantity(typeTransaction: string): number {
        let sum = 0;
        if (this.productsToSend !== undefined) {
            for (let i = 0; i < this.productsToSend.length; i++) {
                sum += this.productsToSend[i].typeTransaction[typeTransaction]
            }
        }
        return sum;
    }

    private loadCustomer(id: number): void {
        var c: Customer;
        this.customerService.get(id).subscribe(
            result => {
                this.customer = result.data;
            },
            error => {
                console.error(error);
                this.alertService.error('Error cargando datos del servidor.');
            }
        );
    }

    private loadUnitPrice(idCustomer: number) {
        /////////////
        //
        // TODO: OJO !! CON EL 2 
        //
        ////////////
        const DOS: number = 2;
        this.productService.getPriceByProductByPOS(DOS, idCustomer).subscribe(response => {
            console.log(response);
            if (response.result > 0) {
                this.unitePrice = response.data[0].amount;
            }
        }, error => {
            console.error(error);
            this.alertService.error('Error cargando datos del servidor.');
        });
    }

    private getProducts(): void {
        this.productService.getAll().subscribe(
            response => {
                this.products = response.data;

                if (typeof (Storage) !== "undefined") {
                    console.log(localStorage.getItem("productsToSend"));
                    if (JSON.parse(localStorage.getItem("productsToSend")) === undefined || JSON.parse(localStorage.getItem("productsToSend")) === null) {

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
                        localStorage.setItem("productsToSend", JSON.stringify(this.productsToSend));

                    } else {
                        this.productsToSend = JSON.parse(localStorage.getItem("productsToSend"));
                    }

                } else {
                    alert("Su navegador no soporta almacenamiento local");
                }
            },
            error => {
                console.error(error);
                this.alertService.error('Error cargando datos del servidor.');
            }
        );
    }

    private agregar(): void {
        this.viewingService.addViewing(this.customer.id, this.productsToSend, this.annotation, this.customer.id, this.currentRoute).subscribe(
            response => {
                if (response.result > 0) {
                    this.submittedSuccessfully = true;
                    localStorage.setItem("productsToSend", JSON.stringify(null));
                }
            },
            error => {
                console.error(error);
                this.alertService.error('Error cargando datos del servidor.');
            }
        );
    }
}
