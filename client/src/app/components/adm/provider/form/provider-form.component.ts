import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { Provider } from '../../../../../../../datatypes/provider';
import { ProvidersService } from '../../../../services/providers.service';
import { AlertService } from '../../../../modules/alert/alert.service';
import { ResultCode } from '../../../../../../../datatypes/result';
import { ValidableForm } from '../../../../shared/ValidableForms';

@Component({
    templateUrl: './provider-form.component.html'
})
export class ProviderFormComponent extends ValidableForm implements OnInit {

    private provider: Provider;
    private isAdding: boolean;

    private paramsSub: Subscription;

    constructor(fb: FormBuilder,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private providersService: ProvidersService,
        private alertService: AlertService
    ) {
        super(fb)
        super.initForm({
            name: [null, Validators.required]
        });
    }

    ngOnInit() {
        this.isAdding = true;
        this.paramsSub = this.activatedRoute.params.subscribe(
            params => {
                var id = params['id']
                this.isAdding = !id;
                if (!this.isAdding) {
                    this.providersService.get(id).subscribe(
                        result => {
                            if (result.result == ResultCode.Error) {
                                console.error(result.message);
                                this.alertService.error('Error obteniendo datos del servidor. ' + result.message);
                            } else {
                                super.setModel(result.data);
                            }
                        },
                        error => {
                            console.error(error);
                            this.alertService.error('Error obteniendo datos del servidor.');
                        }
                    );
                }
            }
        );
    }

    addOrUpdate() {
        if (super.isInvalid()) {
            super.showValidationErrors();
        } else {
            var cli = super.getModel<Provider>();

            let fn = (this.isAdding ? this.providersService.add : this.providersService.update).bind(this.providersService);

            fn(cli).subscribe(
                response => {
                    if (response.result == ResultCode.Error) {
                        console.error(response.message);
                        this.alertService.error('Error ' + (this.isAdding ? 'creando' : 'actualizando') + ' el proveedor.');
                    } else {
                        const keepAfterRouteChange = true;
                        this.alertService.success('Proveedor ' + (this.isAdding ? 'creado' : 'actualizado') + ' correctamente!', keepAfterRouteChange);
                        this.router.navigateByUrl('/admin/proveedores');
                    }
                },
                error => {
                    console.error(error);
                    this.alertService.error('Error ' + (this.isAdding ? 'creando' : 'actualizando') + ' datos en el servidor.');
                }
            );
        }
    }
}