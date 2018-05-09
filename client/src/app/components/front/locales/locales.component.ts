import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PointOfSaleService } from '../../../services/point-of-sale.service';
import { ProductsService } from '../../../services/products.service';
import { PointOfSale } from '../../../../../../datatypes/pointOfSale';
import { AuthenticateService } from '../../../services/authenticate.service';

@Component({
	selector: 'app-locales',
	templateUrl: './locales.component.html',
	styleUrls: ['./locales.component.css']
})
export class LocalesComponent implements OnInit {
	public pointsOfSale: PointOfSale[];
	public filter: string;

	constructor(
		private router: Router,
		private pointOFSaleService: PointOfSaleService,
        private productService: ProductsService,
        private authenticateService:AuthenticateService
	) {

    }

	ngOnInit() {
        this.authenticateService.verifyToken().subscribe(
            response => {
			if (!response.result) {
				alert("Su sesion ha expirado o no tiene privilegios para esta operacion.");
			}else{
                this.loadPointsOfSale();
            }
		});
	}

	loadPointsOfSale(): void {
		this.pointOFSaleService.get().subscribe(
			data => {
				if (data.result === -1) {
					this.router.navigate(['']);
				} else {
					this.pointsOfSale = data.data;
				}
			},
			error => {}
		);
	}

	filterPOS(): void {
		if (this.filter !== '') {
			this.pointOFSaleService.getFilteredByName(this.filter).subscribe(data => {
				if (data.result === -1) {
					this.router.navigate(['']);
				} else {
					this.pointsOfSale = data.data;
				}
			});
		} else {
			this.loadPointsOfSale();
		}
	}
}
