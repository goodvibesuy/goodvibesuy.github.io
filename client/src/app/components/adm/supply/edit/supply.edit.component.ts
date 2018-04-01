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

    constructor(
        fb: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private supplyService: SupplyService,
        private providerService: ProvidersService,
        private domSanitizer: DomSanitizer,
        private imagesService: ImagesService
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
        this.paramsSub = this.activatedRoute.params.subscribe(
            params => {
                this.providerService.getAll().subscribe(data => {
                    this.providers = data.data;
                });

                this.supplyService.getAll().subscribe(data => {
                    var supply = (<Supply[]>data).find(s => s.id == params['id']);
                    super.setModel(supply, { 'price_date': NgbDateFormatter.formatDate });
                });

                this.supplyService.getUnits().subscribe(data => {
                    this.units = <Unit[]>data;
                });
            },
            error => { }
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
            if (!!this.imageFile) {
                supply.path_image = supply.id + '_' + this.imageFile.name;
            }
            var promise = this.supplyService.update(supply);

            promise.subscribe(data => {
                if (!!this.imageFile) {
                    this.imagesService
                        .sendImage(this.category, supply.path_image, this.imageFile.size, this.imageFile.data)
                        .subscribe(
                            res => {
                                this.router.navigateByUrl('/admin/' + this.category);
                            },
                            error => {
                                console.error(error);
                            }
                        );
                } else {
                    this.router.navigateByUrl('/admin/' + this.category);
                }
            });
        }
    }

    getImage() {
        var supply = super.getModel<Supply>({ 'price_date': NgbDateFormatter.unformatDate });
        return this.imageFile
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
