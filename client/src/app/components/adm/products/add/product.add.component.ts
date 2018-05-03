import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
// service
import { ProductsService } from '../../../../services/products.service';
import { ImagesService } from '../../../../services/images.service';
// datatypes
import { Product } from '../../../../../../../datatypes/product';
// models
import { GVFile } from '../../../../models/gvfile.model';
import { AlertService } from '../../../../modules/alert/alert.service';
import { ResultCode } from '../../../../../../../datatypes/result';

@Component({
    templateUrl: './product.add.component.html',
    styleUrls: ['./product.add.component.css']
})
export class ProductAddComponent {
    private product: Product;
    private imageFile: GVFile;

    constructor(
        private router: Router,
        private domSanitizer: DomSanitizer,
        private productsService: ProductsService,
        private imagesService: ImagesService,
        private alertService: AlertService
    ) {
        this.product = <Product>{ id: -1, name: '', path_image: null };
    }

    agregar() {
        const category: string = 'productos';

        var promise = this.productsService.agregar(this.product);

        promise.subscribe(response => {
            if (response.result == ResultCode.Error) {
                console.error(response.message);
                this.alertService.error(response.message);
            } else {
                if (!!this.imageFile) {
                    this.imagesService
                        .sendImage(category, this.product.path_image, this.imageFile.size, this.imageFile.data)
                        .subscribe(
                            res => {
                                const keepAfterRouteChange = true;
                                this.alertService.success('Producto creado correctamente!', keepAfterRouteChange);
                                this.router.navigateByUrl('/admin/productos');
                            },
                            error => {
                                console.error(error);
                                this.alertService.error('Error al actualizar la imagen del producto.');
                            }
                        );
                } else {
                    const keepAfterRouteChange = true;
                    this.alertService.success('Producto creado correctamente!', keepAfterRouteChange);
                    this.router.navigateByUrl('/admin/productos');
                }
            }
        },
            error => {
                console.error(error);
                this.alertService.error('Error al actualizar el producto.');
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
            this.product.path_image = this.imageFile.name;
        }
    }
}
