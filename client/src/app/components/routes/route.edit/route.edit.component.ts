import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteService } from '../../../services/route.service';
import { UsersService } from '../../../services/users.service';
import { Route as RouteModel } from '../../../shared/models/route.model'
import { PointOfSale } from '../../../shared/models/pointofsale.model';
import { RoutePointOfSale } from '../../../shared/models/RoutePointOfSale.model';
import { RouteUser } from '../../../shared/models/routeUser.model';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-route.edit',
  templateUrl: './route.edit.component.html',
  styleUrls: ['./route.edit.component.css']
})
export class RouteEdit implements OnInit {
  private id: number;
  paramsSub: any;
  private route:RouteModel;
  //Puntos de venta para el combo
  private pointsOfSales:PointOfSale[];
  //Usuarios para el combo
  private users:User[];
  //Interfaz que mapea ruta y punto de venta
  private rPOS:RoutePointOfSale;
  //Interfaz que mapea ruta y usuario
  private rUser:RouteUser;
  //Puntos de venta de la ruta
  private pointsOfSaleRoute: PointOfSale[];
  
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private routeService: RouteService,
    private userService: UsersService
  ) { 
      this.rPOS = <RoutePointOfSale>{};
      this.rUser = <RouteUser>{};
    }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params
    .subscribe(params => {
      this.routeService.get()
        .subscribe(data => {
          console.log(data);
          this.route = ((<RouteModel[]>data).find(s => s.idroute == params['id']));          
          this.rPOS.idRoute = this.route.idroute;
          this.rUser.idRoute = this.route.idroute;
          this.getPointOfSalesRoute();
          this.getUsers();
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

  getUsers(){
    this.userService.get().subscribe(data => {
      this.users = data;
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

  agregarUsuario(){
    this.routeService.addUser(this.rUser).subscribe(data => {
      this.getPointOfSalesRoute();
    });
  }
}