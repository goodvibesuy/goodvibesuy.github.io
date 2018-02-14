import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteService } from '../../../services/route.service';
import { UsersService } from '../../../services/users.service';
import { Route as RouteModel } from '../../../shared/models/route.model'
import { PointOfSale } from '../../../shared/models/pointofsale.model';
import { RoutePointOfSale } from '../../../shared/models/RoutePointOfSale.model';

@Component({
  selector: 'app-route.edit',
  templateUrl: './route.edit.component.html',
  styleUrls: ['./route.edit.component.css']
})
export class RouteEdit implements OnInit {
  private id: number;
  paramsSub: any;
  private route:RouteModel;
  private pointsOfSales:PointOfSale[];
  private rPOS:RoutePointOfSale;
  private pointsOfSaleRoute: PointOfSale[];

  
  constructor(    private activatedRoute: ActivatedRoute,
    private router: Router,
    private routeService: RouteService) { 
      this.rPOS = <RoutePointOfSale>{};
    }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params
    .subscribe(params => {
      this.routeService.get()
        .subscribe(data => {
          console.log(data);
          this.route = ((<RouteModel[]>data).find(s => s.idroute == params['id']));
          this.id = (<number>params['id']);
          this.rPOS.idRoute = this.route.idroute;
          this.getPointOfSalesRoute();
        });
    },
    error => { }
    );

    this.routeService.getPointsOfSales()
        .subscribe(dataPOS => {
          this.pointsOfSales = <PointOfSale[]>dataPOS;
          console.log(dataPOS);
        });         
  }

  remove(idPointOfSale){
    this.routeService.remove(this.route.idroute,idPointOfSale).subscribe(data => {
      this.getPointOfSalesRoute();
    });
  }

  actualizar() {
    this.routeService.update(this.route)
      .subscribe(data => {
        this.router.navigateByUrl('/inputs');
      });
  }

  getPointOfSalesRoute(){
    this.routeService.getPointsOfSalesRoute(this.route.idroute).subscribe(data => {
      this.pointsOfSaleRoute = data;
    });
  }

  agregarPuntoDeVenta(){
    this.routeService.addPointOfSale(this.rPOS).subscribe(data => {
      this.getPointOfSalesRoute();
    });
  }
}