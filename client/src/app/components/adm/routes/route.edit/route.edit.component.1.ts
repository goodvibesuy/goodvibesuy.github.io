// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

// import { RouteService } from '../../../../services/route.service';
// import { UsersService } from '../../../../services/users.service';
// import { PointOfSale } from '../../../../models/pointofsale.model';
// import { RoutePointOfSale } from '../../../../models/RoutePointOfSale.model';
// import { RouteUser } from '../../../../models/routeUser.model';

// import { TemplatesRoutesService } from '../../../../services/templates-routes.service';
// import { TemplatesRoutesComponent } from '../../templates-routes/templates-routes.component';
// import { TemplateRoute } from '../../../../models/TemplateRoute.model';

// import { User } from '../../../../../../../datatypes/user';
// import { Route } from "../../../../../../../datatypes/route";
// import { RouteTable } from "../../../../../../../datatypes/routeTable";


// @Component({
//     selector: 'app-route.edit',
//     templateUrl: './route.edit.component.html',
//     styleUrls: ['./route.edit.component.css']
// })
// export class RouteEdit implements OnInit {
//     private currentRoute: Route;

//     //public myform: FormGroup;
//     //public editForm: FormGroup;
//     firstName: FormControl;
//     lastName: FormControl;
//     email: FormControl;
//     password: FormControl;
//     language: FormControl;
//     editName: FormControl;

//     private id: number;
//     paramsSub: any;
//     //Puntos de venta para el combo
//     private pointsOfSales: PointOfSale[];
//     //Usuarios para el combo
//     private users: User[];
    
//     //Puntos de venta de la ruta
//     //private pointsOfSaleRoute: PointOfSale[];
//     private POSSelected: PointOfSale;
//     private templatesRoutes: TemplateRoute[];
//     private idTemplate: number;

//     constructor(
//         private activatedRoute: ActivatedRoute,
//         private router: Router,
//         private routeService: RouteService,
//         private userService: UsersService,
//         private templateRouteService: TemplatesRoutesService
//     ) {
//         this.currentRoute = new Route();
//     }

//     onSubmit() {
//         console.log("aa");
//     }

//     ngOnInit() {
//         this.getTemplatesRoute();
//         this.editName = new FormControl('', Validators.required);
//         this.paramsSub = this.activatedRoute.params.subscribe(
//             params => {
//                 this.routeService.get().subscribe(response => {
//                     console.log(response.data);
//                     //TO DO --> Cambiar proxima linea por <RouteTable[]>
//                     var route = (<any[]>response.data).find(s => s.id == params['id']);                    
//                     this.currentRoute.id = route.id;
//                     this.currentRoute.name = route.name;

//                     this.getPointOfSalesRoute();
//                     this.getUsers();
//                     this.getUsersRoute();
//                     //this.editForm = new FormGroup({ editName: this.editName });
//                 });
//             },
//             error => { }
//         );

//         this.routeService.getPointsOfSales().subscribe(dataPOS => {
//             this.pointsOfSales = <PointOfSale[]>dataPOS;
//             console.log(dataPOS);
//         });

//         this.createFormControls();
//         this.createForm();
//         this.createFormEditControls();
//         this.createFormEdit();
//     }

//     getTemplatesRoute() {
//         this.templateRouteService.getAll().subscribe(
//             response => {
//                 this.templatesRoutes = response.data;
//             }
//         )
//     }

//     addTemplate() {
//         this.templateRouteService.getPointsOfSalesRoute(this.idTemplate).subscribe(
//             data => {
//                 for(let i = 0; i < data.length ; i++){
//                     this.currentRoute.addPointOfSale(data[i]);
//                 }
//             }
//         )
//     }

//     createFormControls() {
//         this.firstName = new FormControl('', Validators.required);
//         this.lastName = new FormControl('', Validators.required);
//         this.email = new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]);
//         this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
//         this.language = new FormControl('', Validators.required);
//     }

//     createForm() {
// 		/*
//         this.myform = new FormGroup({
//             name: new FormGroup({
//                 firstName: this.firstName,
//                 lastName: this.lastName,
//             }),
//             email: this.email,
//             password: this.password,
//             language: this.language
//         });
//         */
//     }

//     createFormEditControls() {
//         this.editName = new FormControl('', Validators.required);
//     }

//     createFormEdit() {
// 		/*
//         this.editForm = new FormGroup({
//             editName: this.editName
//         });
//         */
//     }

//     remove(idPointOfSale) {
//         this.routeService.remove(this.currentRoute.id, idPointOfSale).subscribe(data => {
//             this.getPointOfSalesRoute();
//         });
//     }

//     removeUser(idUser) {
//         this.routeService.removeUser(this.currentRoute.id, idUser).subscribe(data => {
//             this.getUsersRoute();
//         });
//     }

//     actualizar() {
//         /*
//         this.routeService.update(this.route).subscribe(data => {
//             this.router.navigateByUrl('/recorridos');
//         });
//         */
//     }


//     compareUser(u1:User,u2:User):boolean{
//         console.log(u1,u2);
//         return u1 && u2 ? u1.id === u2.id : u1 === u2;
//     }

//     getUsersRoute() {        
//         this.routeService.getUsersRoute(this.currentRoute.id).subscribe(
//             data => {
//                 this.currentRoute.setUser(data[0]);
//             }
//         );        
//     }

//     getPointOfSalesRoute() {
//         this.routeService.getPointsOfSalesRoute(this.currentRoute.id).subscribe(
//             data => {
//                 this.currentRoute.pointsOfSale = data;                
//             }
//         );
//     }

//     getUsers() {
//         this.userService.get().subscribe(data => {
//             this.users = data;
//         });
//     }

//     agregarPuntoDeVenta() {
//         this.currentRoute.addPointOfSale(this.POSSelected);        
//     }

//     changeOrder(idpointofSale: number, position: number, newposition: number) {
//         this.routeService
//             .reorderPointOfSale(this.currentRoute.id, idpointofSale, position, newposition)
//             .subscribe(data => {
//                 this.getPointOfSalesRoute();
//             });
//     }
// }
