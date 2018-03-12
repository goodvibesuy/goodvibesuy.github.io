import { Component } from '@angular/core';

import { SupplyListComponent } from './list/supply.list.component';
import { SupplyEditComponent } from './edit/supply.edit.component';
import { SupplyAddComponent } from './add/supply.add.component';

@Component({
	templateUrl: './supply.component.html',
	styleUrls: ['./supply.component.css']
})
export class SupplyComponent {
	constructor() {}
}
