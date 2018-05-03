import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// service
import { SupplyService } from '../../../../services/supply.service';
// datatypes
import { Supply } from '../../../../../../../datatypes/supply';
// models
import { Unit } from '../../../../models/unit.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ImagesService } from '../../../../services/images.service';
import { GVFile } from '../../../../models/gvfile.model';
import { ProvidersService } from '../../../../services/providers.service';
import { Provider } from '../../../../../../../datatypes/provider';
import { ValidableForm } from '../../../../shared/ValidableForms';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbDateFormatter } from '../../../../shared/DateParserFormatter';
import { Subscription } from 'rxjs';
import { UnitsConversorService, UnitsConvertion, Units } from '../../../../services/units-conversor.service';
import { AlertService } from '../../../../modules/alert/alert.service';
import { ResultCode } from '../../../../../../../datatypes/result';

@Component({
    templateUrl: './supply.edit.component.html',
    styleUrls: ['./supply.edit.component.css']
})
export class SupplyEditComponent extends ValidableForm implements OnInit, OnDestroy {
    private paramsSub: Subscription;

    private providers: Provider[];
    private units: Unit[];
    private imageFile: GVFile;
    private category: string = 'insumos';
    private convertibleUnits: UnitsConvertion[];

    constructor(
        fb: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private supplyService: SupplyService,
        private providerService: ProvidersService,
        private domSanitizer: DomSanitizer,
        private imagesService: ImagesService,
        private unitsConversorService: UnitsConversorService,
        private alertService: AlertService
    ) {
        super(fb)
        super.initForm({
            name: [null, Validators.required],
            unit: [null, Validators.required],
            idProvider: [null, Validators.required],
            amount: [null, Validators.required],
            price_date: [null, Validators.required]
        });
    }

    ngOnInit() {
        this.convertibleUnits = this.unitsConversorService.getConvertibleUnits();

        this.paramsSub = this.activatedRoute.params.subscribe(
            params => {
                this.providerService.getAll().subscribe(
                    data => {
                        this.providers = data.data;
                    },
                    error => {
                        console.error(error);
                        this.alertService.error('Error obteniendo datos del servidor.');
                    }
                );

                this.supplyService.getAll().subscribe(
                    data => {
                        var supply = (<Supply[]>data).find(s => s.id == params['id']);
                        super.setModel(supply, { 'price_date': NgbDateFormatter.formatDate });
                    },
                    error => {
                        console.error(error);
                        this.alertService.error('Error obteniendo datos del servidor.');
                    });

                this.supplyService.getUnits().subscribe(
                    data => {
                        this.units = <Unit[]>data;
                    },
                    error => {
                        console.error(error);
                        this.alertService.error('Error obteniendo datos del servidor.');
                    }
                );
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo datos del servidor.');
            }
        );
    }

    ngOnDestroy() {
        this.paramsSub.unsubscribe();
    }

    actualizar() {
        if (super.isInvalid()) {
            super.showValidationErrors();
        } else {
            var supply = super.getModel<Supply>({ 'price_date': NgbDateFormatter.unformatDate });

            // Convertir el precio de la unidad X a Kg
            supply.amount = this.unitsConversorService.convertTo(supply.unit, supply.amount, Units.Kg);
            supply.unit = Units.Kg;

            if (!!this.imageFile) {
                supply.path_image = supply.id + '_' + this.imageFile.name;
            }
            var promise = this.supplyService.update(supply);

            promise.subscribe(
                response => {
                    if (response.result == ResultCode.Error) {
                        console.error(response.message);
                        this.alertService.error('Error actualizando el insumo. ' + response.message);
                    } else {
                        if (!!this.imageFile) {
                            this.imagesService
                                .sendImage(this.category, supply.path_image, this.imageFile.size, this.imageFile.data)
                                .subscribe(
                                    res => {
                                        const keepAfterRouteChange = true;
                                        this.alertService.success('Insumo actualizado correctamente!', keepAfterRouteChange);
                                        this.router.navigateByUrl('/admin/' + this.category);
                                    },
                                    error => {
                                        console.error(error);
                                        this.alertService.error('Error actualizando el insumo.');
                                    }
                                );
                        } else {
                            const keepAfterRouteChange = true;
                            this.alertService.success('Insumo actualizado correctamente!', keepAfterRouteChange);
                            this.router.navigateByUrl('/admin/' + this.category);
                        }
                    }
                },
                error => {
                    console.error(error);
                    this.alertService.error('Error obteniendo datos del servidor.');
                }
            );
        }
    }

    protected existUnitsConversions(idUnit: number): boolean {
        let exists: boolean = false;

        var unitsLoaded = !!this.units && (!!this.units.find(u => u.id == idUnit) || !!this.convertibleUnits.find(cu => cu.idUnit == idUnit));
        if (unitsLoaded) {
            var idUnit = this.units.find(u => u.id == idUnit) ? this.units.find(u => u.id == idUnit).id : null ||
                this.convertibleUnits.find(cu => cu.idUnit == idUnit) ? this.convertibleUnits.find(cu => cu.idUnit == idUnit).idUnit : null;

            exists = this.unitsConversorService.existUnitsConversions(idUnit);
        }
        return exists;
    }

    protected calculateUnitsConversions(idUnit: number, value: number): UnitsConvertion[] {
        let conversions: UnitsConvertion[] = [];

        if (this.existUnitsConversions(idUnit)) {
            var idUnit = this.units.find(u => u.id == idUnit) ? this.units.find(u => u.id == idUnit).id : null ||
                this.convertibleUnits.find(cu => cu.idUnit == idUnit) ? this.convertibleUnits.find(cu => cu.idUnit == idUnit).idUnit : null;

            conversions = this.unitsConversorService.calculateUnitsConversions(idUnit, value);
        }
        return conversions;
    }

    protected getImage() {
        var supply = super.getModel<Supply>({ 'price_date': NgbDateFormatter.unformatDate });
        return !!this.imageFile
            ? this.domSanitizer.bypassSecurityTrustUrl(
                'data:image/' + this.imageFile.type + ';base64, ' + this.imageFile.data
            )
            : 'images/' + this.category + '/' + this.imagesService.getSmallImage(supply.path_image);
    }

    protected handleSelected(file: GVFile): void {
        if (!!file) {
            this.imageFile = file;
        }
    }
}
