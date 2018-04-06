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


@Component({
    selector: 'app-route.edit',
    templateUrl: './route.edit.component.html',
    styleUrls: ['./route.edit.component.css']
})
export class RouteEdit  extends ValidableForm implements OnInit {
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
    private templateSelected: TemplateRoute;
    private errorNoPOS: boolean = false;

    constructor(
        fb: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private routeService: RouteService,
        private userService: UsersService,
        private templateRouteService: TemplatesRoutesService
    ) {
        super(fb);
        this.currentRoute = new Route();
        super.initForm({
            name: [null, Validators.required],
            date: [null, Validators.required],
            user: [null, Validators.required]
        });
    }

    onSubmit() {
        console.log("aa");
    }

    ngOnInit() {
        this.getTemplatesRoute();
        this.paramsSub = this.activatedRoute.params.subscribe(
            params => {
                this.routeService.get().subscribe(response => {
                    console.log(response.data);
                    //TO DO --> Cambiar proxima linea por <RouteTable[]>
                    var route = (<any[]>response.data).find(s => s.id == params['id']);  
                    console.log(route);                  
                    this.currentRoute.id = route.id;
                    this.currentRoute.name = route.name;
                    this.currentRoute.date = new Date (route.date);
                    //super.setModel(route, { 'date': NgbDateFormatter.formatDate });
                    super.setModel(this.currentRoute, { 'date': NgbDateFormatter.formatDate });
                    //super.setModel(this.currentRoute);

                    this.getPointOfSalesRoute();
                    this.getUsers();
                    this.getUsersRoute();
                });
            },
            error => { }
        );

        this.routeService.getPointsOfSales().subscribe(dataPOS => {            
            this.pointsOfSales = <PointOfSale[]>dataPOS;
            this.POSSelected = this.pointsOfSales[0];
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
                for(let i = 0; i < data.length ; i++){
                    this.currentRoute.addPointOfSale(data[i]);
                }
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
            console.log(route.pointsOfSale);

            if(route.pointsOfSale.length === 0){
                this.errorNoPOS = true;
            }else{
                this.errorNoPOS = false;
                this.routeService.update(route).subscribe(data => {
                    this.router.navigateByUrl('/recorridos');
                });
            }
        }                
    }


    compareUser(u1:User,u2:User):boolean{
        return u1 && u2 ? u1.id === u2.id : u1 === u2;
    }

    getUsersRoute() {        
        this.routeService.getUsersRoute(this.currentRoute.id).subscribe(
            data => {
                this.currentRoute.setUser(data[0]);
            }
        );        
    }

    getPointOfSalesRoute() {
        this.routeService.getPointsOfSalesRoute(this.currentRoute.id).subscribe(
            data => {
                this.currentRoute.pointsOfSale = data;                
            }
        );
    }

    getUsers() {
        this.userService.get().subscribe(data => {
            this.users = data;
        });
    }

    agregarPuntoDeVenta() {
        this.currentRoute.addPointOfSale(this.POSSelected);        
    }

    changeOrder(idpointofSale: number, position: number, newposition: number) {
        this.currentRoute.reorderPointOfSale(position,newposition);
    }
}
