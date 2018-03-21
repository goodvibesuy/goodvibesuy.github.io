import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteService } from '../../../../services/route.service';
import { Route as RouteModel } from '../../../../models/route.model'

@Component({
  selector: 'app-route.add',
  templateUrl: './route.add.component.html',
  styleUrls: ['./route.add.component.css']
})
export class RouteAdd implements OnInit {

  private route: RouteModel;

  constructor(private routeService: RouteService,
  private router: Router) { 
    this.route = <RouteModel>{};
  }

  ngOnInit() {

  }

  agregar() : void{
    this.routeService.agregar(this.route)
      .subscribe(data => {
        this.router.navigateByUrl('/recorridos');
      });
  }
}