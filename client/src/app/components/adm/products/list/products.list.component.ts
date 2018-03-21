import { Component, OnInit, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import * as _ from 'lodash';

import { Product } from '../../../../models/product.model';
import { ImagesService } from '../../../../services/images.service';
import { ProductsService } from '../../../../services/products.service';
import { ResultCode } from '../../../../../../../datatypes/result';

@Component({
	templateUrl: './products.list.component.html',
	styleUrls: ['./products.list.component.css']
})
export class ProductsListComponent implements OnInit {
	private products: Product[];

	constructor(private productsService: ProductsService, private imagesService: ImagesService) {}

	ngOnInit() {
		this.loadProducts();
	}

	delete(id: number): void {
		this.productsService.delete(id).subscribe(
			res => {
				if (res.result == ResultCode.OK) {
					this.loadProducts();
				} else {
					console.log('ERROR: ' + res.message);
					alert('ERROR: ' + res.message);
				}
			},
			err => {
				console.log('UNEXPECTED ERROR: ' + err);
				alert(err);
			}
		);
	}

	loadProducts(): void {
		this.productsService.get().subscribe(
			response => {
				this.products = _.chain(response.data)
					.sortBy(m => m.name.toLowerCase())
					.value();
			},
			error => {}
		);
	}

	getSmallImage(path: string): string {
		return this.imagesService.getSmallImage(path);
	}
}
