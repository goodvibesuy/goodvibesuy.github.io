import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import * as _ from 'lodash';

// datatypes
import { Product } from '../../../../../../../datatypes/product';

import { ImagesService } from '../../../../services/images.service';
import { ProductsService } from '../../../../services/products.service';
import { ResultCode } from '../../../../../../../datatypes/result';
import { AlertService } from '../../../../modules/alert/alert.service';

@Component({
    templateUrl: './products.list.component.html',
    styleUrls: ['./products.list.component.scss']
})
export class ProductsListComponent implements OnInit {
    private products: Product[];

    constructor(
        private productsService: ProductsService,
        private router: Router,
        private imagesService: ImagesService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.loadProducts();
    }

    delete(id: number): void {
        event.stopPropagation();
        event.preventDefault();
        this.productsService.delete(id).subscribe(
            res => {
                if (res.result == ResultCode.OK) {
                    this.loadProducts();
                } else {
                    console.error(res);
                    this.alertService.error(res.message);
                }
            },
            err => {
                console.log('UNEXPECTED ERROR: ' + err);
                alert(err);
            }
        );
    }

    loadProducts(): void {
        this.productsService.getAll().subscribe(
            response => {
                this.products = _.chain(response.data)
                    .sortBy(m => m.name.toLowerCase())
                    .value();
            },
            error => {
                console.log('UNEXPECTED ERROR: ' + error);
                alert(error);
            }
        );
    }

    onProductClick(id: number): void {
        this.router.navigate(['admin', 'productos', 'editar', id]);
    }

    getSmallImage(path: string): string {
        return this.imagesService.getSmallImage(path);
    }
}
