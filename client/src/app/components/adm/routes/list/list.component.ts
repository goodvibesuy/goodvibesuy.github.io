import { Component, OnInit } from '@angular/core';

import { RouteService } from '../../../../services/route.service';

import { RouteTable } from '../../../../../../../datatypes/routeTable';

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

    private routes: RouteTable[];

    constructor(private router: Router, private routeServices: RouteService) { }

    ngOnInit() {
        this.loadRoutes();
    }

    delete(id: number): void {
        var r = confirm("Esta seguro que quiere borrar el recorrido?");
        if (r == true) {
            this.routeServices.delete(id).subscribe(
                data => {
                    if (data.result < 0) {
                        alert(data.message);
                    } else {
                        this.loadRoutes();
                    }
                }
            );
        }        
    }

    loadRoutes(): void {
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
            error => { }
        );
    }
}
