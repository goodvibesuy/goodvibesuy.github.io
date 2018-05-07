import { Component, ViewChild, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { PointOfSaleService } from '../../../../services/point-of-sale.service';
import { } from '@types/googlemaps';
import { DomSanitizer } from '@angular/platform-browser';
import { GVFile } from '../../../../models/gvfile.model';
import { ImagesService } from '../../../../services/images.service';
import { PointOfSale } from '../../../../../../../datatypes/pointOfSale';
import { AlertService } from '../../../../modules/alert/alert.service';

@Component({
    templateUrl: './pos.list.component.html',
    styleUrls: ['./pos.list.component.css']
})
export class PosListComponent implements OnInit {

    private imageFile: GVFile;
    private imagePath: string;
    private filter: string;

    private pointsOfSale: PointOfSale[];
    private POSEdit: PointOfSale;
    private POSEditName: string;
    private POSGroup: number = 1;
    private POSEditAddress: string;
    private POSEditTel: string;
    private POSEditCoord: google.maps.LatLng;
    private POSEditContactName: string;
    private POSEditRUT: string;
    private POSEditBusinessName: string;

    private POSName: string;
    private POSAddress: string;
    private POSTel: string;
    //TODO cambiar por un enum
    private typeOfView: Number;
    private POSMarker: google.maps.Marker;
    private POSEditMarker: google.maps.Marker;
    private POSContactName: string;
    private POSRUT: string;
    private POSBusinessName: string;

    @ViewChild('gmap') gmapElement: any;
    @ViewChild('gmapEdit') gmapEditElement: any;

    private map: google.maps.Map;
    private mapEdit: google.maps.Map;
    private geocoder = new google.maps.Geocoder();

    constructor(
        private router: Router,
        private pointOFSaleService: PointOfSaleService,
        private domSanitizer: DomSanitizer,
        private imagesService: ImagesService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        if (this.POSMarker !== undefined) {
            this.POSMarker.setMap(null);
        }
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

    setEditMarker(editMarker: google.maps.Marker) {
        this.POSEditMarker = editMarker;
        console.log(this.POSEditMarker);
    }

    locationEdit() {
        this.geocoder.geocode({ address: this.POSEditAddress }, (results, status) => {
            if (status.toString() === 'OK') {
                this.mapEdit.setCenter(results[0].geometry.location);
                if (!this.POSEditMarker) {
                    this.POSEditMarker = new google.maps.Marker({
                        map: this.mapEdit,
                        draggable: true,
                        position: results[0].geometry.location
                    });
                } else {
                    this.POSEditMarker.setPosition(results[0].geometry.location);
                }
            } else {
                console.warn('Geocode was not successful for the following reason: ' + status);
                this.alertService.warn('El servicio de localización de google no pudo encontrar la dirección ingresada.');
            }
        });
    }

    geocodeAddress(geocoder, resultsMap) {
        geocoder.geocode({ address: this.POSAddress }, (results, status) => {
            if (status === 'OK') {
                if (this.POSMarker !== undefined) {
                    this.POSMarker.setMap(null);
                }
                resultsMap.setCenter(results[0].geometry.location);
                this.POSMarker = new google.maps.Marker({
                    map: resultsMap,
                    draggable: true,
                    position: results[0].geometry.location
                });
            } else {
                console.warn('Geocode was not successful for the following reason: ' + status);
                this.alertService.warn('El servicio de localización de google no pudo encontrar la dirección ingresada.');
            }
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
                        if (!!i.coord) {
                            i.coord = new google.maps.LatLng(i.coord.x, i.coord.y);
                        }
                        this.pointsOfSale.push(i);
                    }
                }
            },
            error => {
                console.error(error);
                this.alertService.error('Error cargando los puntos de venta.');
            }
        );
    }

    delete(idPOS): void {
        this.pointOFSaleService.deletePointOfSale(idPOS).subscribe(
            response => {
                if (response.result === -1) {
                    console.error(response.message);
                    this.alertService.error(response.message);
                } else {
                    this.loadPointsOfSale();
                }
            },
            error => {
                console.error(error);
                this.alertService.error('Error eliminando el punto de venta.');
            }
        );
    }

    getImage() {
        return this.imageFile
            ? this.domSanitizer.bypassSecurityTrustUrl(
                'data:image/' + this.imageFile.type + ';base64, ' + this.imageFile.data
            )
            : 'images/locales/' + this.imagesService.getSmallImage(this.POSEdit.image);
    }

    handleSelected(file: GVFile): void {
        if (!!file) {
            this.imageFile = file;
            this.imagePath = (this.POSEdit ? this.POSEdit.id + '_' : '') + this.imageFile.name;
        }
    }

    filterPOS(): void {
        if (this.filter !== '') {
            this.pointOFSaleService.getFilteredByName(this.filter).subscribe(data => {
                if (data.result === -1) {
                    this.router.navigate(['']);
                } else {
                    this.pointsOfSale = data.data;
                }
            });
        } else {
            this.loadPointsOfSale();
        }
    }
}
