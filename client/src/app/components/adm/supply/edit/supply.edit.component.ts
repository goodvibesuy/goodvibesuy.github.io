import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// service
import { SupplyService } from '../../../../services/supply.service';
// models
import { Supply } from '../../../../shared/models/supply.model';
import { Unit } from '../../../../shared/models/unit.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ImagesService } from '../../../../services/images.service';
import { GVFile } from '../../../../shared/models/gvfile.model';

@Component({
	selector: 'app-supply-edit',
	templateUrl: './supply.edit.component.html',
	styleUrls: ['./supply.edit.component.css']
})
export class SupplyEditComponent implements OnInit, OnDestroy {
	private id: number;
	private paramsSub: any;

	private supply: Supply;
	private units: Unit[];
	private imageFile: GVFile;
	private category: string = 'insumos';

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private supplyService: SupplyService,
		private domSanitizer: DomSanitizer,
		private imagesService: ImagesService
	) {}

	ngOnInit() {
		this.paramsSub = this.activatedRoute.params.subscribe(
			params => {
				this.supplyService.get().subscribe(data => {
					this.supply = (<Supply[]>data).find(s => s.id == params['id']);
				});

				this.supplyService.getUnits().subscribe(data => {
					this.units = <Unit[]>data;
				});
			},
			error => {}
		);
	}

	ngOnDestroy() {
		this.paramsSub.unsubscribe();
	}

	actualizar() {
		var promise = this.supplyService.update(this.supply);

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
			this.supply.path_image = this.supply.id + '_' + this.imageFile.name;
		}
	}
}
