import { Component, OnInit } from '@angular/core';

import { RouteService } from '../../../../services/route.service';

import { RouteTable } from '../../../../../../../datatypes/routeTable';

import { Router } from '@angular/router';
import { AlertService } from '../../../../modules/alert/alert.service';
import { ResultCode } from '../../../../../../../datatypes/result';

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

    constructor(private router: Router,
        private routeServices: RouteService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.loadRoutes();
    }

    delete(id: number): void {
        var r = confirm("Esta seguro que quiere borrar el recorrido?");
        if (r == true) {
            this.routeServices.delete(id).subscribe(
                response => {
                    if (response.result == ResultCode.Error) {
                        console.error(response);
                        this.alertService.error('Error eliminando el recorrido. ' + response.message);
                    } else {
                        this.loadRoutes();
                    }
                },
                error => {
                    console.error(error);
                    this.alertService.error('Error eliminando el recorrido.');
                }
            );
        }
    }

    loadRoutes(): void {
        this.routeServices.get().subscribe(
            response => {
                if (response.result === ResultCode.Error) {
                    console.error(response.message);
                    this.alertService.error('Error obteniendo datos del servidor. ' + response.message);

                } else {
                    this.routes = response.data;
                }
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo datos del servidor.');
            }
        );
    }
}
