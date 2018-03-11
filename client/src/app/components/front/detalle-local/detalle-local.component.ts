import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PointOfSaleService } from '../../../services/point-of-sale.service';
import { PointOfSale } from '../../../shared/models/pointofsale.model';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../shared/models/product.model';
import { ViewingService } from '../../../services/viewing.service';

@Component({
	selector: 'app-detalle-local',
	templateUrl: './detalle-local.component.html',
	styleUrls: ['./detalle-local.component.css']
})
export class DetalleLocalComponent implements OnInit {
	private params: any;
	private id: string;
	private pointOfSale: PointOfSale;
	private products: Product[];
	private productsToSend: any[];

	constructor(
		private route: ActivatedRoute,
		private pointOFSaleService: PointOfSaleService,
		private productService: ProductsService,
		private viewingService: ViewingService
	) {}

	ngOnInit(): void {
		this.getPointOfSale(Number(this.route.snapshot.paramMap.get('id')));
		this.getProducts();
	}

	getPointOfSale(id: Number): void {
		var pos: PointOfSale;
		this.pointOFSaleService.getPointOfSale(id).subscribe(result => {
			console.log();
			this.pointOfSale = result.data;
		});
	}

	getProducts(): void {
		this.productService.get().subscribe(response => {
			this.products = response.data;
			this.productsToSend = new Array();
			for (let p of this.products) {
				let product: any = {};
				product.id = p.id;
				product.name = p.name;
				product.path_image = p.path_image;
				product.typeTransaction = {};
				product.typeTransaction.delivery = 0;
				product.typeTransaction.return = 0;
				product.typeTransaction.empty = 0;
				this.productsToSend.push(product);
			}
			console.log(this.productsToSend);
		});
	}

	agregar(): void {
		this.viewingService.addViewing(this.pointOfSale.id, this.productsToSend).subscribe(response => {
			console.log(response);
		});
	}
}
