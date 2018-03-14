import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
// service
import { ProductsService } from '../../../../services/products.service';
import { ImagesService } from '../../../../services/images.service';
// models
import { Product } from '../../../../shared/models/product.model';
import { GVFile } from '../../../../shared/models/gvfile.model'

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
		private imagesService: ImagesService) {
		this.product = <Product>{ id: -1, name: '', path_image: null };
	}

	agregar() {
        const category: string = 'productos';        
        
        var promise = this.productsService.agregar(this.product);

        promise.subscribe(data => {
            if (!!this.imageFile ) {

                this.imagesService
                    .sendImage(category, this.product.path_image, this.imageFile.size, this.imageFile.data)
                    .subscribe(res => {
                        this.router.navigateByUrl('/admin/productos');
                    },
                    error => {
                        console.error(error);
                    });
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
        if(!!file) {
            this.imageFile = file;
            this.product.path_image = this.imageFile.name;
        }
	}
}
