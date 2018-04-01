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

@Component({
    templateUrl: './supply.add.component.html',
    styleUrls: ['./supply.add.component.css']
})
export class SupplyAddComponent extends ValidableForm implements OnInit {
    private supply: Supply;
    private providers: Provider[];
    private units: Unit[];
    private imageFile: GVFile;
    private category: string = 'insumos';

    constructor(
        fb: FormBuilder,
        private router: Router,
        private domSanitizer: DomSanitizer,
        private supplyService: SupplyService,
        private providerService: ProvidersService,
        private imagesService: ImagesService
    ) {
        super(fb, {
            name: [null, Validators.required],
            unit: [null, Validators.required],
            idProvider: [null, Validators.required],
            amount: [null, Validators.required],
            price_date: [NgbDateFormatter.formatDate(new Date), Validators.required]
        })

    }

    ngOnInit() {
        this.supplyService.getUnits().subscribe(data => {
            this.units = <Unit[]>data;
        });
        this.providerService.getAll().subscribe(data => {
            this.providers = data.data;
        });
    }

    agregar(): void {
        if (super.isValid()) {
            var promise = this.supplyService.agregar(this.prepareSaveSupply());

            promise.subscribe(data => {
                if (!!this.imageFile) {
                    this.imagesService
                        .sendImage(this.category, this.supply.path_image, this.imageFile.size, this.imageFile.data)
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
        } else {
            super.showValidationErrors();
        }
    }

    getImage() {
        return this.imageFile
            ? this.domSanitizer.bypassSecurityTrustUrl(
                'data:image/' + this.imageFile.type + ';base64, ' + this.imageFile.data
            )
            : 'images/' + this.category + '/' + this.imagesService.getSmallImage(this.supply.path_image);
    }

    handleSelected(file: GVFile): void {
        if (!!file) {
            this.imageFile = file;
            this.supply.path_image = this.imageFile.name;
        }
    }

    prepareSaveSupply(): Supply {
        const formModel = super.getModel();

        const saveSupply: Supply = Object.assign({}, this.supply);
        saveSupply.name = formModel.name;
        return saveSupply;
    }
}
