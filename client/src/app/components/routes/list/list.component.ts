import { Component, OnInit } from '@angular/core';

import { RouteService } from '../../../services/route.service';
import { Route as RouteModel } from '../../../shared/models/route.model'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  private routes: RouteModel[];

  constructor(
    private routeServices: RouteService
  ) { 

  }

  ngOnInit() {
    this.loadInputs();
  }

  delete(id: number): void{
    this.routeServices
      .delete(id)
      .subscribe(data=> this.loadInputs());
  }

  loadInputs():void{
    this.routeServices.get().subscribe(data => this.routes = data,
      error => {}
    );
  }

}
