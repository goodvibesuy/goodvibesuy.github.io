import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RouteService } from '../../../../services/route.service';
import { UsersService } from '../../../../services/users.service';
import { TemplatesRoutesService } from '../../../../services/templates-routes.service';

import { RouteTable as RouteModel } from '../../../../../../../datatypes/routeTable'
import { Route } from '../../../../../../../datatypes/route';
import { User } from '../../../../../../../datatypes/user';
import { TemplateRoute } from '../../../../models/TemplateRoute.model';
import { PointOfSale } from '../../../../../../../datatypes/pointOfSale';

@Component({
    selector: 'app-route.add',
    templateUrl: './route.add.component.html',
    styleUrls: ['./route.add.component.css']
})
export class RouteAdd implements OnInit {
    private newRoute: Route;
    private route: RouteModel;
    private users:User[];
    private templatesRoutes:TemplateRoute[];  
    private pointsOfSales:PointOfSale[];
    private templateSelected:TemplateRoute;
    private POSSelected: PointOfSale;

    constructor(
        private routeService: RouteService,
        private router: Router,        
        private userService: UsersService,
        private templateRouteService: TemplatesRoutesService
    ) {
            this.newRoute = new Route();
        this.route = <RouteModel>{};
    }


    ngOnInit() {
        this.getUsers();
        this.getTemplatesRoute();
        this.routeService.getPointsOfSales().subscribe(dataPOS => {            
            this.pointsOfSales = <PointOfSale[]>dataPOS;
            this.POSSelected = this.pointsOfSales[0];
        });
    }

    getUsers() {
        this.userService.get().subscribe(data => {
            this.users = data;
        });
    }

    getTemplatesRoute() {
        this.templateRouteService.getAll().subscribe(
            response => {
                this.templatesRoutes = response.data;
                this.templateSelected = this.templatesRoutes[0];
            }
        )
    }

    agregarPuntoDeVenta() {
        this.newRoute.addPointOfSale(this.POSSelected);        
    }

    changeOrder(idpointofSale: number, position: number, newposition: number) {
        this.newRoute.reorderPointOfSale(position,newposition);
    }

    agregar(): void {
        this.routeService.agregar(this.newRoute)
            .subscribe(data => {
                this.router.navigateByUrl('/recorridos');
            });
    }
}