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
    this.routeServices.get().subscribe(data => this.routes = data,
      error => {}
    )
  }

}
