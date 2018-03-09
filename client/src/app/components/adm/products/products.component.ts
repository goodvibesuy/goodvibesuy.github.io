
import { Component } from '@angular/core';

import { ProductsListComponent } from './list/products.list.component';
import { ProductEditComponent } from './edit/product.edit.component';
import { ProductAddComponent } from './add/product.add.component';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent   {
  constructor() { }
}
 