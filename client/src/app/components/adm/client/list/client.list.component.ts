import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../../../../../../datatypes/client';
import { ClientService } from '../../../../services/client.service';
import { ResultCode } from '../../../../../../../datatypes/result';
import { AlertService } from '../../../../modules/alert/alert.service';

@Component({
    templateUrl: './client.list.component.html',
    styleUrls: ['./client.list.component.scss']
})
export class ClientListComponent implements OnInit {
    private clients: Array<Client>;

    constructor(private router: Router,
        private clientService: ClientService,
        private alertService: AlertService) {
        this.clients = new Array<Client>();
    }

    ngOnInit() {
        this.loadClients();
    }

    loadClients(): void {
        this.clientService.getAlls().subscribe(
            response => {
                if (response.result == ResultCode.Error) {
                    console.error(response.message);
                    this.alertService.error('Error cargando los clientes del servidor. ' + response.message);
                } else {
                    this.clients = response.data;
                }
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo los clientes.');
            }
        )
    }

    delete(id: number): void {
        this.clientService.delete(id).subscribe(
            response => {
                if (response.result == ResultCode.Error) {
                    console.error(response.message);
                    this.alertService.error('Error eliminando el cliente. ' + response.message);
                } else {
                    this.loadClients();
                    this.alertService.success('Cliente eliminado correctamente.');
                }
            },
            error => {
                console.error(error);
                this.alertService.error('Error eliminando el cliente.');
            }
        );
    }
}