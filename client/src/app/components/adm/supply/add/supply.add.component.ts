import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
// service
import { SupplyService } from '../../../../services/supply.service';
import { ImagesService } from '../../../../services/images.service';
import { ProvidersService } from '../../../../services/providers.service';
// datatypes
import { Supply } from '../../../../../../../datatypes/supply';
import { Provider } from '../../../../../../../datatypes/provider';

import { Unit } from '../../../../models/unit.model';
import { GVFile } from '../../../../models/gvfile.model';
import { ValidableForm } from '../../../../shared/ValidableForms';
import { NgbDateFormatter } from '../../../../shared/DateParserFormatter';
import { UnitsConversorService, UnitsConvertion, Units } from '../../../../services/units-conversor.service';
import { AlertService } from '../../../../modules/alert/alert.service';
import { ResultCode } from '../../../../../../../datatypes/result';

@Component({
    templateUrl: './supply.add.component.html',
    styleUrls: ['./supply.add.component.css']
})
export class SupplyAddComponent extends ValidableForm implements OnInit {

    private providers: Provider[];
    private units: Unit[];
    private imageFile: GVFile;
    private category: string = 'insumos';
    private convertibleUnits: UnitsConvertion[];

    constructor(
        fb: FormBuilder,
        private router: Router,
        private domSanitizer: DomSanitizer,
        private supplyService: SupplyService,
        private providerService: ProvidersService,
        private imagesService: ImagesService,
        private unitsConversorService: UnitsConversorService,
        private alertService: AlertService
    ) {
        super(fb);

        let formGroup = {
            name: [null, Validators.required],
            unit: [null, Validators.required],
            idProvider: [null, Validators.required],
            amount: [null, Validators.required],
            price_date: [NgbDateFormatter.formatDate(new Date), Validators.required]
        };
        super.initForm(formGroup);
    }

    ngOnInit() {
        this.supplyService.getUnits().subscribe(
            data => {
                this.units = <Unit[]>data;
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo datos del servidor.');
            });
        this.providerService.getAll().subscribe(
            data => {
                this.providers = data.data;
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo datos del servidor.');
            });
        this.convertibleUnits = this.unitsConversorService.getConvertibleUnits();
    }

    agregar(): void {
        if (super.isInvalid()) {
            super.showValidationErrors();
        } else {
            var supply = super.getModel<Supply>({ 'price_date': NgbDateFormatter.unformatDate });

            // Convertir el precio de la unidad X a Kg
            supply.amount = this.unitsConversorService.convertTo(supply.unit, supply.amount, Units.Kg);
            supply.unit = Units.Kg;

            var promise = this.supplyService.agregar(supply);

            promise.subscribe(
                response => {
                    if (response.result == ResultCode.Error) {
                        console.error(response.message);
                        this.alertService.error('Error agregando el insumo. ' + response.message);
                    } else {
                        if (!!this.imageFile) {
                            this.imagesService
                                .sendImage(this.category, this.imageFile.name, this.imageFile.size, this.imageFile.data)
                                .subscribe(
                                    res => {
                                        const keepAfterRouteChange = true;
                                        this.alertService.success('Insumo creado correctamente!', keepAfterRouteChange);
                                        this.router.navigateByUrl('/admin/' + this.category);
                                    },
                                    error => {
                                        console.error(error);
                                        this.alertService.error('Error creando el insumo.');
                                    }
                                );
                        } else {
                            const keepAfterRouteChange = true;
                            this.alertService.success('Insumo creado correctamente!', keepAfterRouteChange);
                            this.router.navigateByUrl('/admin/' + this.category);
                        }
                    }
                },
                error => {
                    console.error(error);
                    this.alertService.error('Error creando el insumo.');
                }
            );
        }
    }

    getImage() {
        var supply = super.getModel<Supply>({ 'price_date': NgbDateFormatter.unformatDate });

        return !!this.imageFile
            ? this.domSanitizer.bypassSecurityTrustUrl(
                'data:image/' + this.imageFile.type + ';base64, ' + this.imageFile.data
            )
            : 'images/' + this.category + '/' + this.imagesService.getSmallImage(supply.path_image);
    }

    handleSelected(file: GVFile): void {
        if (!!file) {
            this.imageFile = file;
        }
    }
}