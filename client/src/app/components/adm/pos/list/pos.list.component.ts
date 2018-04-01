import { Component, ViewChild, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { PointOfSaleService } from '../../../../services/point-of-sale.service';
import { PointOfSale } from '../../../../models/pointofsale.model';
import { } from '@types/googlemaps';
import { DomSanitizer } from '@angular/platform-browser';
import { GVFile } from '../../../../models/gvfile.model';
import { ImagesService } from '../../../../services/images.service';

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

    formEdit(idPointOfSale): void {
        this.typeOfView = 2;
        this.POSEdit = this.pointsOfSale.filter(function (pos) {
            return idPointOfSale == pos.id;
        })[0];
        this.imagePath = this.POSEdit.image;
        this.POSEditName = this.POSEdit.name;
        this.POSEditAddress = this.POSEdit.address;
        this.POSEditTel = this.POSEdit.tel;
        this.POSEditCoord = this.POSEdit.coord;
        this.POSEditBusinessName = this.POSEdit.businessName;
        this.POSEditContactName = this.POSEdit.contactName;
        this.POSEditRUT = this.POSEdit.RUT;


        if (this.POSEditCoord !== null && this.POSEditCoord !== undefined) {
            var mapProp = {
                center: new google.maps.LatLng(this.POSEditCoord.lat(), this.POSEditCoord.lng()),
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
        } else {
            var mapProp = {
                center: new google.maps.LatLng(-34.909664, -56.163319),
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
        }

        this.mapEdit = new google.maps.Map(this.gmapEditElement.nativeElement, mapProp);

        if (this.POSEditCoord !== null && this.POSEditCoord !== undefined) {
            this.POSEditMarker = new google.maps.Marker({
                map: this.mapEdit,
                draggable: true,
                position: new google.maps.LatLng(this.POSEditCoord.lat(), this.POSEditCoord.lng())
            });
        }
    }

    addForm() {
        this.typeOfView = 3;
        // clean properties

        this.POSName = '';
        this.POSAddress = '';
        this.POSTel = '';
        this.imagePath = '';
        if (this.POSMarker !== undefined) {
            this.POSMarker.setMap(null);
        }
    }

    cancelEdit() {
        this.typeOfView = 1;
    }

    cancelAdd() {
        this.typeOfView = 1;
    }

    add() {
        this.pointOFSaleService
            .addPointOfSale(this.POSName, this.POSBusinessName, this.POSContactName, this.POSRUT, this.POSGroup,
                this.POSAddress, this.POSTel, this.imagePath, this.POSMarker.getPosition())
            .subscribe(response => {
                if (!!this.imageFile) {
                    this.imagesService
                        .sendImage('locales', this.imagePath, this.imageFile.size, this.imageFile.data)
                        .subscribe(
                            res => {
                                this.imageFile = null;
                                this.typeOfView = 1;
                                this.loadPointsOfSale();
                            },
                            error => {
                                console.error(error);
                            }
                        );
                } else {
                    this.imageFile = null;
                    this.typeOfView = 1;
                    this.loadPointsOfSale();
                }
            });
    }

    actualizar() {
        this.pointOFSaleService
            .updatePointOfSale(
                {
                    id: this.POSEdit.id,
                    name: this.POSEditName,
                    businessName: this.POSEditBusinessName,
                    contactName: this.POSEditContactName,
                    RUT: this.POSEditRUT,
                    address: this.POSEditAddress,
                    tel: this.POSEditTel,
                    image: this.imagePath,
                    coord: this.POSEditMarker.getPosition()
                }
            )
            .subscribe(response => {
                if (!!this.imageFile) {
                    this.imagesService
                        .sendImage('locales', this.imagePath, this.imageFile.size, this.imageFile.data)
                        .subscribe(
                            res => {
                                this.imageFile = null;
                                this.typeOfView = 1;
                                this.POSEditMarker.setMap(null);
                                this.loadPointsOfSale();
                            },
                            error => {
                                console.error(error);
                            }
                        );
                } else {
                    this.imageFile = null;
                    this.typeOfView = 1;
                    this.loadPointsOfSale();
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
