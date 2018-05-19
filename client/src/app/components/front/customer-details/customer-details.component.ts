// angular core
import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
// service
import { PointOfSaleService } from '../../../services/point-of-sale.service';
import { CustomerService } from '../../../services/customer.service';
import { ClientService } from '../../../services/client.service';
import { AlertService } from '../../../modules/alert/alert.service';
// datatypes
import { Client } from '../../../../../../datatypes/client';
import { PointOfSale } from '../../../../../../datatypes/pointOfSale';
import { Customer, CustomerType } from '../../../../../../datatypes/customer';

@Component({
    selector: 'customer-details',
    templateUrl: './customer-details.component.html'
})
export class CustomerDetailsComponent implements OnInit {

    @Input() customer: Customer;

    public pointOfSale: PointOfSale;
    public client: Client;

    constructor(
        private route: ActivatedRoute,
        private pointOfSaleService: PointOfSaleService,
        private clientService: ClientService,
        private alertService: AlertService
    ) { }

    public IsClientCustomer: boolean;

    ngOnInit(): void {
        if (this.customer.type == CustomerType.Client) {
            this.loadClient();
        } else {
            this.loadPointOfSale();
        }
        this.IsClientCustomer = this.customer.type == CustomerType.Client;
    }

    loadPointOfSale(): void {
        this.pointOfSaleService.getPointOfSale(this.customer.id).subscribe(
            result => {
                this.pointOfSale = result.data;
            },
            error => {
                console.error(error);
                this.alertService.error('Error cargando datos del servidor.');
            }
        );
    }

    loadClient(): void {

        this.clientService.get(this.customer.id).subscribe(
            result => {
                this.client = result.data;
            },
            error => {
                console.error(error);
                this.alertService.error('Error cargando datos del servidor.');
            }
        );
    }
}
