import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Provider } from '../../../../../../../datatypes/provider';
import { ProvidersService } from '../../../../services/providers.service';
import { ResultCode } from '../../../../../../../datatypes/result';
import { AlertService } from '../../../../modules/alert/alert.service';

@Component({
    templateUrl: './provider-list.component.html',
    styleUrls: ['./provider-list.component.scss']
})
export class ProviderListComponent implements OnInit {

    public providers: Array<Provider>;

    constructor(private router: Router,
        private providersService: ProvidersService,
        private alertService: AlertService) {
        this.providers = new Array<Provider>();
    }

    ngOnInit() {
        this.loadProviders();
    }

    loadProviders(): void {
        this.providersService.getAll().subscribe(
            response => {
                if (response.result == ResultCode.Error) {
                    console.error(response.message);
                    this.alertService.error('Error obteniendo los proveedores. ' + response.message);
                } else {
                    this.providers = response.data;
                }
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo los proveedores.');
            }
        )
    }

    delete(id: number): void {
        this.providersService.delete(id).subscribe(
            response => {
                if (response.result == ResultCode.Error) {
                    console.error(response.message);
                    this.alertService.error('Error eliminando el proveedor. ' + response.message);
                } else {
                    this.loadProviders();
                    this.alertService.success('Proveedor eliminado correctamente.');
                }
            },
            error => {
                console.error(error);
                this.alertService.error('Error eliminando el proveedor.');
            }
        );
    }
}