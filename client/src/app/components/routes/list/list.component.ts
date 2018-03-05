import { Component, OnInit } from '@angular/core';

import { RouteService } from '../../../services/route.service';
import { Route as RouteModel } from '../../../shared/models/route.model'

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

    constructor(
        private routeServices: RouteService
    ) {
    }
    
    ngOnInit() {
        this.token = localStorage.getItem("token");
        this.userSaved = localStorage.getItem("user");
        this.accountId = Number(localStorage.getItem("accountId"));
        this.loadInputs();
    }

    delete(id: number): void {
        this.routeServices
            .delete(id)
            .subscribe(data => this.loadInputs());
    }

    loadInputs(): void {
        this.routeServices.get(this.token,this.userSaved,this.accountId).subscribe(
            data => this.routes = data,
            error => { }
        );
    }

}
