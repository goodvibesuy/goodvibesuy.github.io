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
                if (res.result == ResultCode.Error) {
                    console.error(res);
                    this.alertService.error(res.message);
                } else {
                    this.alertService.success('Producto eliminado correctamente!');
                    this.loadProducts();
                }
            },
            err => {
                console.error(err);
                this.alertService.error('Error eliminando el producto');
            }
        );
    }

    loadProducts(): void {
        this.productsService.getAll().subscribe(
            response => {
                if (response.result == ResultCode.Error) {
                    console.error(response.message);
                    this.alertService.error(response.message);
                } else {
                    this.products = _.chain(response.data)
                        .sortBy(m => m.name.toLowerCase())
                        .value();
                }
            },
            error => {
                console.error(error);
                this.alertService.error('Error cargando los productos');
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
