import { Component, OnInit } from '@angular/core';
import { Provider } from '../../../../../../datatypes/provider';
import { ProvidersService } from '../../../services/providers.service';
import { AlertService } from '../../../modules/alert/alert.service';
import { ResultCode } from '../../../../../../datatypes/result';

@Component({
    selector: 'app-provider',
    templateUrl: './provider.component.html',
    styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {

    private providers: Provider[];
    private providerName: string;
    constructor(private providerService: ProvidersService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.getAllProviders();
    }

    getAllProviders(): void {
        this.providerService.getAll().subscribe(
            response => {
                if (response.result == ResultCode.Error) {
                    console.error(response.message);
                    this.alertService.error('Error obteniendo los proveedores. ' + response.message);
                } else {
                    console.log(response);
                    if (response.result > 0) {
                        this.providers = response.data;
                    }
                }
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo los proveedores.');
            }
        )
    }

    newProvider(): void {
        this.providerService.add(this.providerName).subscribe(
            response => {
                this.getAllProviders();
            },
            error => {
                console.error(error);
                this.alertService.error('Error agregando el proveedor.');
            }
        )
    }
}
