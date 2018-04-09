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
import { ProductsService } from '../../../../services/products.service';
import { Product } from '../../../../../../../datatypes/product';

@Component({
    selector: 'app-route.add',
    templateUrl: './route.add.component.html',
    styleUrls: ['./route.add.component.css']
})
export class RouteAdd implements OnInit {
    private newRoute: Route;
    private route: RouteModel;
    private users: User[];
    private templatesRoutes: TemplateRoute[];
    private pointsOfSales: PointOfSale[];
    private products: Product[];
    private templateSelected: TemplateRoute;
    private POSSelected: PointOfSale;

    constructor(
        private routeService: RouteService,
        private router: Router,
        private userService: UsersService,
        private templateRouteService: TemplatesRoutesService,
        private productService: ProductsService
    ) {
        this.newRoute = new Route();
        this.route = <RouteModel>{};
    }


    ngOnInit() {
        this.getUsers();
        this.getTemplatesRoute();
        this.productService.getAll().subscribe(
            response => {
                console.log(response);
                if (response.result === 1) {
                    this.products = response.data;
                    for(let i = 0 ; i < this.products.length; i++){                        
                        this.newRoute.addProductStock({product:this.products[i],quantity:0});
                    }
                    this.routeService.getPointsOfSales().subscribe(dataPOS => {
                        this.pointsOfSales = <PointOfSale[]>dataPOS;
                        this.POSSelected = this.pointsOfSales[0];
                    });
                } else {
                    alert("Error al cargar los productos.");
                }
            }
        )
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

    addTemplate() {
        this.templateRouteService.getPointsOfSalesRoute(this.templateSelected.id).subscribe(
            data => {
                for (let i = 0; i < data.length; i++) {
                    this.newRoute.addPointOfSale(data[i]);
                }
            }
        )
    }


    agregarPuntoDeVenta() {
        this.newRoute.addPointOfSale(this.POSSelected);
    }

    changeOrder(idpointofSale: number, position: number, newposition: number) {
        this.newRoute.reorderPointOfSale(position, newposition);
    }

    agregar(): void {
        this.routeService.agregar(this.newRoute)
            .subscribe(data => {
                this.router.navigateByUrl('/recorridos');
            });
    }
}