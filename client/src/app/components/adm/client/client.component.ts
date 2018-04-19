import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../../../../../datatypes/Client';
import { ClientService } from '../../../services/client.service';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
    private clients:Array<Client>;
    constructor(private router: Router,private clientService: ClientService) {
        this.clients = new Array<Client>();
    }

    ngOnInit() {        
        this.getClients();
    }

    getClients():void{
        this.clientService.getClients().subscribe(
            response => {
                this.clients = response.data;
                console.log(response);
            }
        )
    }

    delete(id:number):void{
        this.clientService.delete(id).subscribe(
            response => {
                console.log(response);
            }
        )
    }    
}