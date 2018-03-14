import { Component, ViewChild, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { PointOfSaleService } from '../../../services/point-of-sale.service';
import { PointOfSale } from '../../../shared/models/pointofsale.model';
import { } from '@types/googlemaps';

@Component({
    selector: 'app-pos',
    templateUrl: './pos.component.html',
    styleUrls: ['./pos.component.css']
})
export class PosComponent implements OnInit {
    private pointsOfSale: PointOfSale[];
    private POSEdit: PointOfSale;
    private POSEditName: string;
    private POSEditAddress: string;
    private POSEditTel: string;
    private POSEditCoord:google.maps.LatLng;
    private POSName: string;
    private POSAddress: string;
    private POSTel: string;
    //TODO cambiar por un enum
    private typeOfView: Number;
    private POSMarker:google.maps.Marker;
    private POSEditMarker:google.maps.Marker;

    @ViewChild('gmap') gmapElement: any;
    @ViewChild('gmapEdit') gmapEditElement: any;

    private map: google.maps.Map;
    private mapEdit:google.maps.Map;
    private geocoder = new google.maps.Geocoder();

    constructor(private router: Router, private pointOFSaleService: PointOfSaleService) { }

    ngOnInit() {
        this.loadPointsOfSale();
        this.typeOfView = 1;   
        var mapProp = {
            center: new google.maps.LatLng(-34.909664, -56.163319),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    }

    marcar() {
        this.geocodeAddress(this.geocoder, this.map);
    }

    setEditMarker(editMarker : google.maps.Marker){
        this.POSEditMarker = editMarker;
        console.log(this.POSEditMarker);
    }

    locationEdit(){
        var mapEdit = this.mapEdit;
        var address = this.POSEditAddress;
        var thisPrincipal = this;
        this.geocoder.geocode({ address: address }, function (results, status) {
            if (status.toString() === 'OK') {
                mapEdit.setCenter(results[0].geometry.location);
                if(thisPrincipal.POSEditMarker === null || thisPrincipal.POSEditMarker === undefined){
                    thisPrincipal.POSEditMarker = new google.maps.Marker({
                        map: mapEdit,
                        draggable:true,
                        position: results[0].geometry.location
                    });
                }else{
                    thisPrincipal.POSEditMarker.setPosition(results[0].geometry.location);
                }
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    geocodeAddress(geocoder, resultsMap) {
        var address = this.POSAddress;
        var thisPrincipal = this;
        geocoder.geocode({ address: address }, function (results, status) {
            if (status === 'OK') {
                resultsMap.setCenter(results[0].geometry.location);
                thisPrincipal.POSMarker = new google.maps.Marker({
                    map: resultsMap,
                    position: results[0].geometry.location
                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    formEdit(idPointOfSale): void {
        this.typeOfView = 2;
        this.POSEdit = this.pointsOfSale.filter(function (pos) {
            return idPointOfSale == pos.id;
        })[0];
        this.POSEditName = this.POSEdit.name;
        this.POSEditAddress = this.POSEdit.address;
        this.POSEditTel = this.POSEdit.tel;
        this.POSEditCoord = this.POSEdit.coord;


        if(this.POSEditCoord !== null && this.POSEditCoord !== undefined){
            var mapProp = {
                center: new google.maps.LatLng(this.POSEditCoord.lat(), this.POSEditCoord.lng()),
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
        }else{
            var mapProp = {
                center: new google.maps.LatLng(-34.909664, -56.163319),
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
        }

        this.mapEdit = new google.maps.Map(this.gmapEditElement.nativeElement, mapProp);

        if(this.POSEditCoord !== null && this.POSEditCoord !== undefined){
            this.POSEditMarker = new google.maps.Marker({
                map: this.mapEdit,
                draggable:true,
                position: new google.maps.LatLng(this.POSEditCoord.lat(), this.POSEditCoord.lng())
            });
        }
    }

    addForm() {
        this.typeOfView = 3;
    }

    cancelEdit() {
        this.typeOfView = 1;
    }

    cancelAdd() {
        this.typeOfView = 1;
    }

    add() {
        this.pointOFSaleService.addPointOfSale(this.POSName, this.POSAddress, this.POSTel,this.POSMarker.getPosition()).subscribe(response => {
            console.log(response);
            this.loadPointsOfSale();
        });
    }

    actualizar() {
        this.pointOFSaleService
            .updatePointOfSale(this.POSEdit.id, this.POSEditName, this.POSEditAddress, this.POSEditTel,this.POSEditMarker.getPosition())
            .subscribe(response => {
                this.typeOfView = 1;
                this.loadPointsOfSale();
            });
    }

    loadPointsOfSale(): void {
        this.pointOFSaleService.get().subscribe(
            response => {
                this.typeOfView = 1;
                if (response.result === -1) {
                    this.router.navigate(['']);
                } else {
                    this.pointsOfSale = [];
              
                    for (let i of response.data) {
                        i.coord = new google.maps.LatLng(i.coord.x,i.coord.y);
                        this.pointsOfSale.push(i);
                     }
                    //this.POSEditCoord = new google.maps.LatLng(POSEdit.coord.x,POSEdit.coord.y);
                }
            },
            error => { }
        );
    }

    delete(idPOS): void {
        this.pointOFSaleService.deletePointOfSale(idPOS).subscribe(response => {
            if (response.result === -1) {
                alert(response.message);
            } else {
                this.loadPointsOfSale();
            }
        });
    }
}
