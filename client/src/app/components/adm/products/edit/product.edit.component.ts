import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
// service
import { ProductsService } from '../../../../services/products.service';
import { ImagesService } from '../../../../services/images.service';
import { SupplyService } from '../../../../services/supply.service';
// datatypes
import { Product } from '../../../../../../../datatypes/product';
import { Supply } from '../../../../../../../datatypes/supply';
import { ResultCode } from '../../../../../../../datatypes/result';
// models
import { GVFile } from '../../../../models/gvfile.model';
import { Unit } from '../../../../models/unit.model';
import * as _ from 'lodash';
import { ProductSupply } from '../../../../../../../datatypes/productSupply';

@Component({
	templateUrl: './product.edit.component.html',
	styleUrls: ['./product.edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {
	paramsSub: any;

	private product: Product;
	private units: Unit[];
	private supplies: Supply[];
	private imageFile: GVFile;

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private domSanitizer: DomSanitizer,
		private productsService: ProductsService,
		private suppliesService: SupplyService,
		private imagesService: ImagesService
	) {}

	ngOnInit() {
		this.paramsSub = this.activatedRoute.params.subscribe(
			params => {
				this.loadProduct(params['id']);
			},
			err => {
				// TODO: handle error
				console.error(err);
			}
		);
		this.suppliesService.getLatestPrices().subscribe(
			s => {
				this.supplies = s;
			},
			err => {
				// TODO: handle error
				console.error(err);
			}
		);
		this.suppliesService.getUnits().subscribe(
			u => {
				this.units = u;
			},
			err => {
				// TODO: handle error
				console.error(err);
			}
		);
	}

	ngOnDestroy() {
		this.paramsSub.unsubscribe();
	}

	loadProduct(id: number): void {
		this.productsService.get(id).subscribe(res => {
			if (res.result == ResultCode.Error) {
				// TODO: handle error
			} else {
				this.product = res.data;
			}
		});
	}

	actualizar() {
		const category: string = 'productos';

		var promise = this.productsService.update(this.product);

		promise.subscribe(data => {
			if (!!this.imageFile) {
				this.imagesService
					.sendImage(category, this.product.path_image, this.imageFile.size, this.imageFile.data)
					.subscribe(
						res => {
							this.router.navigateByUrl('/admin/productos');
						},
						error => {
							console.error(error);
						}
					);
			} else {
				this.router.navigateByUrl('/admin/productos');
			}
		});
	}

	getImage() {
		return this.imageFile
			? this.domSanitizer.bypassSecurityTrustUrl(
					'data:image/' + this.imageFile.type + ';base64, ' + this.imageFile.data
			  )
			: 'images/productos/' + this.imagesService.getSmallImage(this.product.path_image);
	}

	handleSelected(file: GVFile): void {
		if (!!file) {
			this.imageFile = file;
			this.product.path_image = this.product.id + '_' + this.imageFile.name;
		}
	}

	sortSupplies(supplies: ProductSupply[]): ProductSupply[] {
		return _.chain(supplies)
			.sortBy(ps => _.find(this.supplies, s => s.id == ps.idSupply).name)
			.value();
	}

	filterSupply(idSupply: number): Supply {
		return this.supplies.find(s => s.id == idSupply);
	}

	filterUnit(idSupply: number): Unit {
		return this.units.find(u => u.id == this.filterSupply(idSupply).unit);
	}

	totalSupplyPrice(): number {
		return 0;
	}
	/*
	totalSupplyPrice(): number {
		return _.chain(this.product.supplies)
			.map(s => s.quantity * this.filterSupply(s.idSupply).amount)
			.sum()
			.value();
    }
    */

	deleteSupply(idSupply: number) {
		this.productsService.deleteSupply(this.product.id, idSupply).subscribe(
			d => {
				this.loadProduct(this.product.id);
			},
			err => {
				// error handling
				console.log(err);
			}
		);
	}
}
