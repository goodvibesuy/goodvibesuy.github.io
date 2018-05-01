import { Component, OnInit } from '@angular/core';

import { ClientListComponent } from './list/client.list.component';
import { ClientFormComponent } from '../../forms/client-form/client-form.component';

@Component({
	templateUrl: './client.component.html'
})
export class ClientComponent implements OnInit{
    
    ngOnInit(): void {
        console.log("Method not implemented.");
    }

	constructor() {}
}
