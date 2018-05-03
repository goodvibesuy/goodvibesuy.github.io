import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Client } from '../../../../../../datatypes/Client';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidableForm } from '../../../shared/ValidableForms';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import { ClientComponent } from '../../adm/client/client.component';
import { Subscription } from 'rxjs';
import { ResultCode } from '../../../../../../datatypes/result';
import { GroupPosService } from '../../../services/group-pos.service';
import { GroupPos } from '../../../../../../datatypes/groupPos';
import { AlertService } from '../../../modules/alert/alert.service';

@Component({
    selector: 'app-client-form',
    templateUrl: './client-form.component.html',
    styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent extends ValidableForm implements OnInit {

    private marker: google.maps.Marker;
    @ViewChild('gmapClient') gmapEditElement: any;
    private map: google.maps.Map;
    private geocoder = new google.maps.Geocoder();

    private client: Client;
    private groupPos: GroupPos[];
    private isAdding: boolean;

    @Input() titleForm: string;

    private paramsSub: Subscription;

    constructor(fb: FormBuilder,
        private router: Router,
        private clientService: ClientService,
        private activatedRoute: ActivatedRoute,
        private groupPosService: GroupPosService,
        private alertService: AlertService
    ) {
        super(fb);
        super.initForm({
            name: [null, Validators.required],
            lastName: [null, Validators.required],
            address: [null, Validators.required],
            tel: [null, null],
            idGroup: [null, Validators.required]
        });
    }

    ngOnInit() {
        this.isAdding = true;
        this.paramsSub = this.activatedRoute.params.subscribe(
            params => {
                var id = params['id']
                if (id) {
                    this.isAdding = !id;
                    // load client 
                    this.clientService.get(id).subscribe(
                        result => {
                            if (result.result == ResultCode.Error) {
                                console.error(result.message);
                                this.alertService.error('Error obteniendo datos del servidor. ' + result.message);
                            } else {
                                super.setModel(result.data);
                            }
                        },
                        error => {
                            console.error(error);
                            this.alertService.error('Error obteniendo datos del servidor.');
                        }
                    );
                }

                this.titleForm = !!id ? 'Actualizar ' : 'Agregar ';
            }
        );

        this.groupPosService.get().subscribe(
            result => {
                if (result.result == ResultCode.Error) {
                    console.error(result.message);
                    this.alertService.error('Error obteniendo datos del servidor.');
                } else {
                    this.groupPos = result.data;
                }
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo datos del servidor.');
            }
        );
        this.initMap({ x: -34.909664, y: -56.163319 });
    }

    addOrUpdate() {
        if (super.isInvalid()) {
            super.showValidationErrors();
        } else {
            var cli = super.getModel<Client>();
            cli.coord = this.marker.getPosition();

            let fn = (this.isAdding ? this.clientService.add : this.clientService.update).bind(this.clientService);

            fn(cli).subscribe(
                response => {
                    if (response.result == ResultCode.Error) {
                        console.error(response.message);
                        this.alertService.error('Error ' + (this.isAdding ? 'creando' : 'actualizando') + ' el cliente.');
                    } else {
                        const keepAfterRouteChange = true;
                        this.alertService.success('Cliente ' + (this.isAdding ? 'creado' : 'actualizado') + ' correctamente!', keepAfterRouteChange);
                        this.router.navigateByUrl('/admin/clientes');
                    }
                },
                error => {
                    console.error(error);
                    this.alertService.error('Error obteniendo datos del servidor.');
                }
            );
        }
    }

    findLocation() {
        var cli = super.getModel<Client>();

        var mapEdit = this.map;
        var address = cli.address;
        var thisPrincipal = this;
        this.geocoder.geocode({ address: address }, function (results, status) {
            if (status.toString() === 'OK') {
                mapEdit.setCenter(results[0].geometry.location);
                if (thisPrincipal.marker === null || thisPrincipal.marker === undefined) {
                    thisPrincipal.marker = new google.maps.Marker({
                        map: mapEdit,
                        draggable: true,
                        position: results[0].geometry.location
                    });
                } else {
                    thisPrincipal.marker.setPosition(results[0].geometry.location);
                }
            } else {
                console.warn('Geocode was not successful for the following reason: ' + status);
                this.alertService.warn('El servicio de localización de google no pudo encontrar la dirección ingresada.');
            }
        });
    }

    private initMap(coord) {
        const defaultLat: number = -34.909664;
        const defaultLong: number = -56.163319;

        // define map center
        var mapProp = {
            center: new google.maps.LatLng(!!coord ? coord.x : defaultLat, !!coord ? coord.y : defaultLat),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        // initialize map
        this.map = new google.maps.Map(this.gmapEditElement.nativeElement, mapProp);

        // mark pos
        if (!!coord) {
            this.marker = new google.maps.Marker({
                map: this.map,
                draggable: true,
                position: new google.maps.LatLng(coord.x, coord.y)
            });
        }
    }
}
