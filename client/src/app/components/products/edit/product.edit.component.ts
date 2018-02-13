
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// service
import { ProductsService } from '../../../services/products.service';
// models
import { Product } from '../../../shared/models/product.model';

@Component({
  templateUrl: './product.edit.component.html',
  styleUrls: ['./product.edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {

  paramsSub: any;

  private product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params
      .subscribe(params => {

        this.productsService.get()
          .subscribe(data => {
            this.product = ((<Product[]>data).find(s => s.id == params['id']))
          });
      },
      error => { }
      );
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

  actualizar() {
    this.productsService.update(this.product)
      .subscribe(data => {
        this.router.navigateByUrl('/productos');
      });
  }
}
