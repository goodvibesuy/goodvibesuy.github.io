import { Component, OnInit, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { SupplyService } from '../../../../services/supply.service';
import { Supply } from '../../../../shared/models/supply.model';
import { Unit } from '../../../../shared/models/unit.model';

@Component({
	selector: 'app-supply-list',
	templateUrl: './supply.list.component.html',
	styleUrls: ['./supply.list.component.css']
})
export class SupplyListComponent implements OnInit {
	protected supplies: Supply[];
	protected units: Unit[];

	constructor(private supplyService: SupplyService) {}

	ngOnInit() {
		this.loadSupplies();
	}

	getUnit(unitId: number): string {
		return !!this.units ? this.units.find(u => u.id == unitId).name : null;
	}

	delete(id: number): void {
		this.supplyService.delete(id).subscribe(data => this.loadSupplies());
	}

	loadSupplies(): void {
		this.supplyService.get().subscribe(
			data => (this.supplies = data),
			error => {
				// TODO: mostrar error
			}
		);

		this.supplyService.getUnits().subscribe(
			data => (this.units = data),
			error => {
				// TODO: mostrar error
			}
		);
	}
}
