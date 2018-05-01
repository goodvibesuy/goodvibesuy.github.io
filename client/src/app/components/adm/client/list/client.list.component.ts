import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../../../../../../datatypes/client';
import { ClientService } from '../../../../services/client.service';
import { ResultCode } from '../../../../../../../datatypes/result';

@Component({
    templateUrl: './client.list.component.html',
    styleUrls: ['./client.list.component.scss']
})
export class ClientListComponent implements OnInit {
    private clients: Array<Client>;

    constructor(private router: Router,
        private clientService: ClientService) {
        this.clients = new Array<Client>();
    }

    ngOnInit() {
        this.getAlls();
    }

    getAlls(): void {
        this.clientService.getAlls().subscribe(
            response => {
                this.clients = response.data;
                console.log(response);
            },
            error => {
                // TODO: error handling
                console.error(error);
                alert(error);
            }
        )
    }

    delete(id: number): void {
        this.clientService.delete(id).subscribe(
            response => {
                if (response.result == ResultCode.Error) {
                    // TODO: error handling
                    console.error(response.message);
                    alert(response.message);
                } else {
                    this.getAlls();
                }
            },
            error => {
                // TODO: error handling
                console.error(error);
                alert(error);
            }
        );
    }
}