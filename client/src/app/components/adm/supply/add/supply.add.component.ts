import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
// service
import { SupplyService } from '../../../../services/supply.service';
import { ImagesService } from '../../../../services/images.service';
// models
import { Supply } from '../../../../models/supply.model';
import { Unit } from '../../../../models/unit.model';
import { GVFile } from '../../../../models/gvfile.model';

@Component({
	selector: 'app-input-add',
	templateUrl: './supply.add.component.html',
	styleUrls: ['./supply.add.component.css']
})
export class SupplyAddComponent implements OnInit {
	private supply: Supply;
	private units: Unit[];
	private imageFile: GVFile;
	private category: string = 'insumos';

	constructor(
		private supplyService: SupplyService,
		private router: Router,
		private domSanitizer: DomSanitizer,
		private imagesService: ImagesService
	) {
		this.supply = <Supply>{ id: -1, name: '', unit: 1, amount: 0 };
	}

	ngOnInit() {
		this.supplyService.getUnits().subscribe(data => {
			this.units = <Unit[]>data;
		});
	}

	agregar(): void {
		var promise = this.supplyService.agregar(this.supply);

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
			this.supply.path_image = this.imageFile.name;
		}
	}
}
