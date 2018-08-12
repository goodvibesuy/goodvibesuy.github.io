// angular core
import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, SimpleChange } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
// service
import { PointOfSaleService } from '../../../../services/point-of-sale.service';
import { CustomerService } from '../../../../services/customer.service';
import { ProductsService } from '../../../../services/products.service';
import { ViewingService } from '../../../../services/viewing.service';
// datatypes
import { Customer, CustomerType } from '../../../../../../../datatypes/customer';
import { AlertService } from '../../../../modules/alert/alert.service';

@Component({
    selector: 'products-delivery-form',
    templateUrl: './products-delivery-form.component.html'
})
export class ProductsDeliveryFormComponent implements OnInit, OnChanges {

    @Input() customer: Customer
    @Input('viewingProductTypes') viewingProductTypes;
    @Input() products;
    @Input('products-to-send') productsToSend;
    @Input('unite-price') unitePrice;

    @Input() annotation;
    @Output() annotationChange = new EventEmitter();

    @Input('id-route') currentRoute;

    @Output('saveData') saveData = new EventEmitter();
    @Output('agregar') agregar = new EventEmitter();

    constructor(
        private route: ActivatedRoute,
        private pointOfSaleService: PointOfSaleService,
        private customerService: CustomerService,
        private productService: ProductsService,
        private viewingService: ViewingService,
        private alertService: AlertService
    ) { }

    ngOnInit(): void {

    }

    isArray(viewingProductTypes): boolean {
        return Array.isArray(viewingProductTypes)
    }

    ngOnChanges(changes: SimpleChanges) {
        const productsToSend: SimpleChange = changes.productsToSend;
        if(productsToSend){
            this.productsToSend = productsToSend.currentValue;
        }
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

    public saveProductData() {
        this.saveData.emit();
    }

    public actualizar(): void {
        this.annotationChange.emit(this.annotation);
        this.agregar.emit();
    }
}
