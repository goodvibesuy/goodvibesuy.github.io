import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { RouteService } from '../../../../services/route.service';
import { UsersService } from '../../../../services/users.service';
import { RoutePointOfSale } from '../../../../models/routePointOfSale.model';
import { RouteUser } from '../../../../models/routeUser.model';

import { TemplatesRoutesService } from '../../../../services/templates-routes.service';
import { TemplatesRoutesComponent } from '../../templates-routes/templates-routes.component';
import { TemplateRoute } from '../../../../models/TemplateRoute.model';

import { PointOfSale } from '../../../../../../../datatypes/pointOfSale';
import { User } from '../../../../../../../datatypes/user';
import { Route } from "../../../../../../../datatypes/route";
import { RouteTable } from "../../../../../../../datatypes/routeTable";
import { ValidableForm } from '../../../../shared/ValidableForms';
import { NgbDateFormatter } from '../../../../shared/DateParserFormatter';
import { Product } from '../../../../../../../datatypes/product';
import { ProductsService } from '../../../../services/products.service';
import { ResultCode } from '../../../../../../../datatypes/result';
import { AlertService } from '../../../../modules/alert/alert.service';


@Component({
    selector: 'app-route.edit',
    templateUrl: './route.edit.component.html',
    styleUrls: ['./route.edit.component.css']
})
export class RouteEdit extends ValidableForm implements OnInit {
    private currentRoute: Route;
    private id: number;
    paramsSub: any;
    //Puntos de venta para el combo
    private pointsOfSales: PointOfSale[];
    //Usuarios para el combo
    private users: User[];

    //Puntos de venta de la ruta
    //private pointsOfSaleRoute: PointOfSale[];
    private POSSelected: PointOfSale;
    private templatesRoutes: TemplateRoute[];
    private products: Product[];
    private templateSelected: TemplateRoute;
    private errorNoPOS: boolean = false;

    constructor(
        fb: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private routeService: RouteService,
        private userService: UsersService,
        private templateRouteService: TemplatesRoutesService,
        private productService: ProductsService,
        private alertService: AlertService
    ) {
        super(fb);
        this.currentRoute = new Route();
        super.initForm({
            name: [null, Validators.required],
            date: [null, Validators.required],
            user: [null, Validators.required],

        });
    };

    onSubmit() {
        console.log("aa");
    }

    ngOnInit() {
        this.getTemplatesRoute();
        this.productService.getAll().subscribe(
            response => {
                if (response.result == ResultCode.Error) {
                    console.error('Error al cargar datos del servidor.');
                    this.alertService.error('Error al cargar datos del servidor.');
                } else {
                    this.products = response.data;
                }
            },
            error => {
                console.error(error);
                this.alertService.error('Error al cargar datos del servidor.');
            }
        )
        this.paramsSub = this.activatedRoute.params.subscribe(
            params => {
                this.routeService.get().subscribe(response => {
                    // TO DO:
                    //     Cambiar proxima linea por <RouteTable[]>
                    //      Emprolijar el código siguiente
                    var route = (<any[]>response.data).find(s => s.id == params['id']);
                    console.log(route);
                    this.currentRoute.id = route.id;
                    this.currentRoute.name = route.name;
                    this.currentRoute.date = new Date(route.date);
                    super.setModel(this.currentRoute, { 'date': NgbDateFormatter.formatDate });

                    this.getPointOfSalesRoute();
                    this.getUsers();
                    this.getUsersRoute();
                    this.getStockRoute();
                });
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo datos del servidor.');
            }
        );

        this.routeService.getPointsOfSales().subscribe(
            dataPOS => {
                this.pointsOfSales = <PointOfSale[]>dataPOS;
                this.POSSelected = this.pointsOfSales[0];
            }, error => {
                console.error(error);
                this.alertService.error('Error obteniendo datos del servidor.');
            });
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
        )
    }

    addTemplate() {
        this.templateRouteService.getPointsOfSalesRoute(this.templateSelected.id).subscribe(
            data => {
                for (let i = 0; i < data.length; i++) {
                    this.currentRoute.addPointOfSale(data[i]);
                }
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo datos del servidor.');
            }
        )
    }

    remove(idPointOfSale) {
        this.currentRoute.removePointOfSale(idPointOfSale);
    }

    actualizar() {
        if (super.isInvalid()) {
            super.showValidationErrors();
        } else {
            var route = super.getModel<Route>({ 'date': NgbDateFormatter.unformatDate });
            route.pointsOfSale = this.currentRoute.getPointsOfSale();
            route.stock = this.currentRoute.getStock();
            console.log(route.pointsOfSale);

            if (route.pointsOfSale.length === 0) {
                this.errorNoPOS = true;
            } else {
                this.errorNoPOS = false;
                this.routeService.update(route).subscribe(
                    response => {
                        if (response.result == ResultCode.Error) {
                            console.error(response.message);
                            this.alertService.error('Error actualizando el recorrido. ' + response.message);
                        } else {
                            const keepAfterRouteChange = true;
                            this.alertService.success('Recorrido actualizado correctamente!', keepAfterRouteChange);
                            this.router.navigateByUrl('/recorridos');
                        }
                    },
                    error => {
                        console.error(error);
                        this.alertService.error('Error actualizando el recorrido.');
                    }
                );
            }
        }
    }


    compareUser(u1: User, u2: User): boolean {
        return u1 && u2 ? u1.id === u2.id : u1 === u2;
    }

    getUsersRoute() {
        this.routeService.getUsersRoute(this.currentRoute.id).subscribe(
            data => {
                this.currentRoute.setUser(data[0]);
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo datos del servidor.');
            }
        );
    }

    getPointOfSalesRoute() {
        this.routeService.getPointsOfSalesRoute(this.currentRoute.id).subscribe(
            data => {
                this.currentRoute.pointsOfSale = data;
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo datos del servidor.');
            }
        );
    }

    getStockRoute() {
        this.routeService.getStockRoute(this.currentRoute.id).subscribe(
            response => {
                this.currentRoute.stock = response;
                console.log(response);
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo datos del servidor.');
            }
        );
    }

    getUsers() {
        this.userService.get().subscribe(
            data => {
                this.users = data;
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo datos del servidor.');
            });
    }

    agregarPuntoDeVenta() {
        this.currentRoute.addPointOfSale(this.POSSelected);
    }

    changeOrder(idpointofSale: number, position: number, newposition: number) {
        this.currentRoute.reorderPointOfSale(position, newposition);
    }
}
