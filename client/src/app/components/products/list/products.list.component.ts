import { Component, OnInit, Input } from "@angular/core";
import { AsyncPipe } from "@angular/common";

import { ProductsService } from "../../../services/products.service";
import { Product } from "../../../shared/models/product.model";

@Component({
  templateUrl: "./products.list.component.html",
  styleUrls: ["./products.list.component.css"]
})
export class ProductsListComponent implements OnInit {
  private products: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.loadProducts();
  }

  delete(id: number): void {
    this.productsService.delete(id).subscribe(data => this.loadProducts());
  }

  loadProducts(): void {
    this.productsService
      .get()
      .subscribe(data => (this.products = data), error => {});
  }
}
