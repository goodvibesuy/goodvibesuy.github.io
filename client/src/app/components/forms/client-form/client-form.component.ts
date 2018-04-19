import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Client } from '../../../../../../datatypes/Client';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidableForm } from '../../../shared/ValidableForms';
import { Router } from '@angular/router';
import { ClientService } from '../../../services/client.service';

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
    private clients: Array<Client>;

    @Input() titleForm: string;
    constructor(fb: FormBuilder,
        private router: Router,
        private clientService: ClientService
    ) {        
        super(fb);

        console.log(this.titleForm);
        super.initForm({
            names: [null, Validators.required],
            address: [null, Validators.required],
            lastnames: [null, Validators.required],
            phone: [null, null]
        });
        this.clients = new Array<Client>();
    }

    ngOnInit() {
        this.initMap({ x: -34.909664, y: -56.163319 });        
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
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    initMap(coord) {        
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

    add() {
        if (super.isInvalid()) {
            super.showValidationErrors();
        } else {
            var cli = super.getModel<Client>();
            cli.coord = this.marker.getPosition();
            this.clientService.addClient(cli)
                .subscribe(response => {
                    if(response.result > 0){
                        alert("El cliente se agrego correctamente");
                    }else{
                        alert(response.message);
                    }                    
                });
        }
    }
}
