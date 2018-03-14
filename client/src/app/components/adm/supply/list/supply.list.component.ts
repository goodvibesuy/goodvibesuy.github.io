import { Component, OnInit, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import * as _ from 'lodash';

import { SupplyService } from '../../../../services/supply.service';
import { Supply } from '../../../../shared/models/supply.model';
import { Unit } from '../../../../shared/models/unit.model';
import { ResultCode } from '../../../../../../../datatypes/result';

@Component({
	selector: 'app-supply-list',
	templateUrl: './supply.list.component.html',
	styleUrls: ['./supply.list.component.scss']
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
        this.supplyService
            .delete(id)
            .subscribe(
                res => {
                    if ( res.result == ResultCode.OK){
                        this.loadSupplies()
                    } else {
                        console.error("ERROR: " + res.message);
                        alert("ERROR: " + res.message);
                    }
                },
                err => {
                    console.error("UNEXPECTED ERROR: " + err);
                    alert(err);
                }
            );
	}

	private loadSupplies(): void {
		this.supplyService.get().subscribe(
			data => {
                this.supplies = _
                        .chain(data)
                        .groupBy(s => s.id)
                        .map(g => _.chain(g).sortBy(s => s.date).last().value())
                        .sortBy( m => m.name)
                        .value();
            },
			error => {
                // TODO: mostrar error
                console.error(error);
                alert(error);
			}
		);

		this.supplyService.getUnits().subscribe(
			data => (this.units = data),
			error => {
				// TODO: mostrar error
                console.error(error);
                alert(error);
			}
		);
	}
}
