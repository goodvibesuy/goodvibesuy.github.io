import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteService } from '../../../services/route.service';
import { UsersService } from '../../../services/users.service';
import { Route as RouteModel } from '../../../shared/models/route.model'
import { PointOfSale } from '../../../shared/models/pointofsale.model';
import { RoutePointOfSale } from '../../../shared/models/RoutePointOfSale.model';
import { RouteUser } from '../../../shared/models/routeUser.model';
import { User } from '../../../shared/models/user.model';

//import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';



@Component({
  selector: 'app-route.edit',
  templateUrl: './route.edit.component.html',
  styleUrls: ['./route.edit.component.css']
})

export class RouteEdit implements OnInit {
  public myform: FormGroup;
  public editForm: FormGroup;

  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  editName: FormControl;





  public usuario;
  private id: number;
  paramsSub: any;
  private route: RouteModel;
  //Puntos de venta para el combo
  private pointsOfSales: PointOfSale[];
  //Usuarios para el combo
  private users: User[];
  private usersRoute: User[];
  //Interfaz que mapea ruta y punto de venta
  private rPOS: RoutePointOfSale;
  //Interfaz que mapea ruta y usuario
  private rUser: RouteUser;
  //Puntos de venta de la ruta
  private pointsOfSaleRoute: PointOfSale[];

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private routeService: RouteService,
    private userService: UsersService
  ) {
    this.rPOS = <RoutePointOfSale>{};
    this.rUser = <RouteUser>{};

    this.usuario = {
      "nombre": "",
      "apellidos": "",
      "email": "",
      "password": ""
    };
  }

  onSubmit() {
    // Mostramos el objeto usuario
    console.log(this.usuario);
  }

  ngOnInit() {
    this.editName = new FormControl('', Validators.required);

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
            this.getUsersRoute();


            //this.editForm = new FormGroup({ editName: this.editName });
          });
      },
        error => { }
      );

    this.routeService.getPointsOfSales()
      .subscribe(dataPOS => {
        this.pointsOfSales = <PointOfSale[]>dataPOS;
        console.log(dataPOS);
      });

    this.createFormControls();
    this.createForm();

    this.createFormEditControls();
    this.createFormEdit();
  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('', Validators.required);
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }

  createFormEditControls() {
    this.editName = new FormControl('', Validators.required);
  }

  createFormEdit() {
    this.editForm = new FormGroup({
      editName: this.editName
    });
  }

  remove(idPointOfSale) {
    this.routeService.remove(this.route.idroute, idPointOfSale).subscribe(data => {
      this.getPointOfSalesRoute();
    });
  }

  removeUser(idUser) {
    this.routeService.removeUser(this.route.idroute, idUser).subscribe(data => {
      this.getUsersRoute();
    });
  }

  actualizar() {
    this.routeService.update(this.route)
      .subscribe(data => {
        this.router.navigateByUrl('/recorridos');
      });
  }

  getUsersRoute() {
    this.routeService.getUsersRoute(this.route.idroute).subscribe(data => {
      this.usersRoute = data;
    });
  }

  getPointOfSalesRoute() {
    this.routeService.getPointsOfSalesRoute(this.route.idroute).subscribe(data => {
      this.pointsOfSaleRoute = data;
    });
  }

  getUsers() {
    this.userService.get().subscribe(data => {
      this.users = data;
    });
  }

  agregarPuntoDeVenta() {
    this.routeService.addPointOfSale(this.rPOS).subscribe(data => {
      this.getPointOfSalesRoute();
    });
  }

  agregarUsuario() {
    this.routeService.addUser(this.rUser).subscribe(data => {
      this.getUsersRoute();
    });
  }

  changeOrder(idpointofSale: number, position: number, newposition: number) {
    this.routeService.reorderPointOfSale(this.route.idroute, idpointofSale, position, newposition).subscribe(data => {
      this.getPointOfSalesRoute();
    });
  }

}