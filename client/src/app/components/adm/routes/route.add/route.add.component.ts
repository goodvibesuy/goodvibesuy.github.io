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
import { AlertService } from '../../../../modules/alert/alert.service';
import { ResultCode } from '../../../../../../../datatypes/result';

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
        private productService: ProductsService,
        private alertService: AlertService
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
                if (response.result === ResultCode.Error) {
                    console.error("Error al cargar los productos. " + response.message)
                    this.alertService.error("Error al cargar los productos.");
                } else {
                    this.products = response.data;
                    for (let i = 0; i < this.products.length; i++) {
                        this.newRoute.addProductStock({ product: this.products[i], quantity: 0 });
                    }
                    this.routeService.getPointsOfSales().subscribe(dataPOS => {
                        this.pointsOfSales = <PointOfSale[]>dataPOS;
                        this.POSSelected = this.pointsOfSales[0];
                    });
                }
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo los productos.');
            }
        )
    }

    getUsers() {
        this.userService.get().subscribe(
            data => {
                this.users = data;
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo datos del servidor.');
            }
        );
    }

    getTemplatesRoute() {
        this.templateRouteService.getAll().subscribe(
            response => {
                this.templatesRoutes = response.data;
                this.templateSelected = this.templatesRoutes[0];
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo datos del servidor.');
            }
        );
    }

    addTemplate() {
        this.templateRouteService.getPointsOfSalesRoute(this.templateSelected.id).subscribe(
            data => {
                for (let i = 0; i < data.length; i++) {
                    this.newRoute.addPointOfSale(data[i]);
                }
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo datos del servidor.');
            }
        );
    }


    agregarPuntoDeVenta() {
        this.newRoute.addPointOfSale(this.POSSelected);
    }

    changeOrder(idpointofSale: number, position: number, newposition: number) {
        this.newRoute.reorderPointOfSale(position, newposition);
    }

    agregar(): void {
        this.routeService.agregar(this.newRoute).subscribe(
            response => {
                if (response.result == ResultCode.Error) {
                    console.error(response.message);
                    this.alertService.error('Error agregando la ruta al recorrido. ' + response.message);
                } else {
                    const keepAfterRouteChange = true;
                    this.alertService.success('Recorrido agregado correctamente!', keepAfterRouteChange);
                    this.router.navigateByUrl('/recorridos');
                }
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo datos del servidor.');
            }
        );
    }
}
