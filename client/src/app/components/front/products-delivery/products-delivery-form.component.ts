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
import { ViewingView } from '../../../../../../datatypes/views/viewingView';
import { LineViewingView } from '../../../../../../datatypes/views/lineViewingView';
import { Customer, CustomerType } from '../../../../../../datatypes/customer';
import { AlertService } from '../../../modules/alert/alert.service';


@Component({
    templateUrl: './products-delivery-form.component.html',
    styleUrls: ['./products-delivery-form.component.css']
})
export class ProductsDeliveryFormComponent implements OnInit {
    
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
    public viewingVisited: ViewingView;
    public viewingProductTypes: any[];

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

        this.viewingService.getViewingProductTypes().subscribe(
            response => {
                if (response.result > 0) {
                    this.viewingProductTypes = response.data;
                    console.log(JSON.parse(localStorage.getItem("productsToSend")));
                    this.viewingVisited = new ViewingView();
                    this.loadCustomer(Number(this.route.snapshot.paramMap.get('id')));

                    /////////////
                    //
                    // TODO: OJO !! CON EL 2 
                    //
                    ////////////
                    const DOS: number = 2;
                    this.productService.getPriceByProductByPOS(DOS, Number(this.route.snapshot.paramMap.get('id'))).subscribe(
                        response => {
                            console.log(response);
                            if (response.result > 0) {
                                this.unitePrice = response.data[0].amount;
                            }
                        },
                        error => {
                            console.error(error);
                            this.alertService.error('Error cargando datos del servidor.');
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
                        },
                        error => {
                            console.error(error);
                            this.alertService.error('Error cargando datos del servidor.');
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

    getProductQuantityById(idProduct: number): any {
        let p = this.productsToSend.filter(input => input.id === idProduct)[0];
        return p.typeTransaction.delivery - p.typeTransaction.return;
    }
    
    subtotal():number{
        let subTotalInvoice = 0;
        for(let i = 0 ; i < this.viewingProductTypes.length; i++ ){
            subTotalInvoice += this.quantity(this.viewingProductTypes[i].name) * this.viewingProductTypes[i].score;
        }
        return subTotalInvoice * this.unitePrice;
    }
    
    iva():number{
        let IVA = 0.22;
        let ivaInvoice = 0;
        for(let i = 0 ; i < this.viewingProductTypes.length; i++ ){
            ivaInvoice += this.quantity(this.viewingProductTypes[i].name) * this.viewingProductTypes[i].score;
        }
        return ivaInvoice * this.unitePrice * IVA;
    }

    total():number{
        let IVA = 1.22;
        let totalInvoice = 0;
        for(let i = 0 ; i < this.viewingProductTypes.length; i++ ){
            totalInvoice += this.quantity(this.viewingProductTypes[i].name) * this.viewingProductTypes[i].score;
        }
        return totalInvoice * this.unitePrice * IVA;
    }

    loadCustomer(id: number): void {
        var c: Customer;
        this.customerService.get(id).subscribe(
            result => {
                this.customer = result.data;
                // if (this.customer.type == CustomerType.PointOfSale) {
                //     this.loadPointOfSale(id);
                // }
            },
            error => {
                console.error(error);
                this.alertService.error('Error cargando datos del servidor.');
            }
        );
    }

    getProducts(): void {
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

    agregar(): void {
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
