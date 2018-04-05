import { Component, ViewChild, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { PointOfSaleService } from '../../../../services/point-of-sale.service';
import { } from '@types/googlemaps';
import { DomSanitizer } from '@angular/platform-browser';
import { GVFile } from '../../../../models/gvfile.model';
import { ImagesService } from '../../../../services/images.service';
import { PointOfSale } from '../../../../../../../datatypes/pointOfSale';

@Component({
    templateUrl: './pos.list.component.html',
    styleUrls: ['./pos.list.component.css']
})
export class PosListComponent implements OnInit {

    private imageFile: GVFile;
    private imagePath: string;

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
        private imagesService: ImagesService
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
        var mapEdit = this.mapEdit;
        var address = this.POSEditAddress;
        var thisPrincipal = this;
        this.geocoder.geocode({ address: address }, function (results, status) {
            if (status.toString() === 'OK') {
                mapEdit.setCenter(results[0].geometry.location);
                if (thisPrincipal.POSEditMarker === null || thisPrincipal.POSEditMarker === undefined) {
                    thisPrincipal.POSEditMarker = new google.maps.Marker({
                        map: mapEdit,
                        draggable: true,
                        position: results[0].geometry.location
                    });
                } else {
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
                if (thisPrincipal.POSMarker !== undefined) {
                    thisPrincipal.POSMarker.setMap(null);
                }
                resultsMap.setCenter(results[0].geometry.location);
                thisPrincipal.POSMarker = new google.maps.Marker({
                    map: resultsMap,
                    draggable: true,
                    position: results[0].geometry.location
                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
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
}
