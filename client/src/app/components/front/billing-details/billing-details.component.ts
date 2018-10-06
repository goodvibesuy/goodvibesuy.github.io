// angular core
import 'rxjs/add/operator/switchMap';
import { Component, Input } from '@angular/core';
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
    selector: 'billing-details',
    templateUrl: './billing-details.component.html'
})
export class BillingDetailsComponent {
    
    @Input('viewing-product-types') viewingProductTypes;
    @Input('products-to-send') productsToSend;
    @Input('products') products;
    @Input('unite-price') unitePrice;

    constructor(    ) { }
    
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
        console.log("p",idProduct,p);
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

}
