import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
// service
import { ProductsService } from "../../../services/products.service";
// models
import { Product } from "../../../shared/models/product.model";

@Component({
  templateUrl: "./product.add.component.html",
  styleUrls: ["./product.add.component.css"]
})
export class ProductAddComponent implements OnInit {
  private product: Product;

  constructor(
    private productsService: ProductsService,
    private router: Router) {
    this.product = <Product>{ id: -1, name: "", path_image: "" };
  }

  ngOnInit() {}

  agregar(): void {
    this.productsService.agregar(this.product).subscribe(data => {
      this.router.navigateByUrl("/productos");
    });
  }
}
