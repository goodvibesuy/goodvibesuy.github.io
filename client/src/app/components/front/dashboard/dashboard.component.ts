import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../../services/authenticate.service';
import { Router } from '@angular/router';
import { HeaderService } from '../../../services/header.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    userSaved:string = "repartidor@goodvibes.uy";
	constructor(
		private router: Router,
		private authenticateService: AuthenticateService,
		private headerService: HeaderService
	) {}

	ngOnInit() {
        this.userSaved = localStorage.getItem('user');
		this.authenticateService.verifyToken().subscribe(data => {			
			this.headerService.setVisibility(true);
			if (!data.result) {
				this.router.navigate(['']);
			}
		});
	}
}
