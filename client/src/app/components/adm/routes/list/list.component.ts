import { Component, OnInit } from '@angular/core';

import { RouteService } from '../../../../services/route.service';
import { Route as RouteModel } from '../../../../models/route.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	private token: string;
	private userSaved: string;
	private accountId: Number;

	private routes: RouteModel[];

	constructor(private router: Router, private routeServices: RouteService) {}

	ngOnInit() {
		this.loadSupplies();
	}

	delete(id: number): void {
		this.routeServices.delete(id).subscribe(data => this.loadSupplies());
	}

	loadSupplies(): void {
		this.routeServices.get().subscribe(
			data => {
				console.log(data);
				if (data.result === -1) {
					console.log(data);
					this.router.navigate(['']);
				} else {
					this.routes = data.data;
				}
			},
			error => {}
		);
	}
}
