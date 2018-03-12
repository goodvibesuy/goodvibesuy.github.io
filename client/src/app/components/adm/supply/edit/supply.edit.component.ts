import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// service
import { SupplyService } from '../../../../services/supply.service';
// models
import { Supply } from '../../../../shared/models/supply.model';
import { Unit } from '../../../../shared/models/unit.model';

@Component({
	selector: 'app-supply-edit',
	templateUrl: './supply.edit.component.html',
	styleUrls: ['./supply.edit.component.css']
})
export class SupplyEditComponent implements OnInit, OnDestroy {
	id: number;
	paramsSub: any;

	private supply: Supply;
	private units: Unit[];

	constructor(private activatedRoute: ActivatedRoute, private router: Router, private supplyService: SupplyService) {}

	ngOnInit() {
		this.paramsSub = this.activatedRoute.params.subscribe(
			params => {
				this.supplyService.get().subscribe(data => {
					this.supply = (<Supply[]>data).find(s => s.id == params['id']);
				});

				this.supplyService.getUnits().subscribe(data => {
					this.units = <Unit[]>data;
				});
			},
			error => {}
		);
	}

	ngOnDestroy() {
		this.paramsSub.unsubscribe();
	}

	actualizar() {
		this.supplyService.update(this.supply).subscribe(data => {
			this.router.navigateByUrl('/insumos');
		});
	}
}
