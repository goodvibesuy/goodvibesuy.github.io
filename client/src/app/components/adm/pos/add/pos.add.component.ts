import { Component, ViewChild, OnInit, } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { } from '@types/googlemaps';
// datatypes
import { PointOfSale } from '../../../../../../../datatypes/pointOfSale';
import { GroupPos } from '../../../../../../../datatypes/groupPos';
// services
import { PointOfSaleService } from '../../../../services/point-of-sale.service';
import { GroupPosService } from '../../../../services/group-pos.service';
import { ImagesService } from '../../../../services/images.service';
// validation
import { ValidableForm } from '../../../../shared/ValidableForms';
// model
import { GVFile } from '../../../../models/gvfile.model';
import { ResultCode } from '../../../../../../../datatypes/result';

@Component({
    templateUrl: './pos.add.component.html',
    styleUrls: ['./pos.add.component.css']
})
export class PosAddComponent extends ValidableForm implements OnInit {

    private groupPos: GroupPos[];
    private imageFile: GVFile;
    private imagePath: string;

    private marker: google.maps.Marker;
    @ViewChild('gmapEdit') gmapElement: any;
    private map: google.maps.Map;
    private geocoder = new google.maps.Geocoder();

    constructor(
        fb: FormBuilder,
        private router: Router,
        private domSanitizer: DomSanitizer,
        private activatedRoute: ActivatedRoute,
        private pointOFSaleService: PointOfSaleService,
        private groupPosService: GroupPosService,
        private imagesService: ImagesService
    ) {
        super(fb)
        super.initForm({
            name: [null, Validators.required],
            address: [null, Validators.required],
            tel: [null, Validators.required],
            businessName: [null, Validators.required],
            contactName: [null, Validators.required],
            RUT: [null, Validators.required],
            idGroup: [null, Validators.required]
        });
    }

    ngOnInit() {
        super.setModel<PointOfSale>(<PointOfSale>{
            name: null,
            address: null,
            tel: null, 
            businessName: null,
            contactName: null, 
            RUT: null,
            idGroup: null
        });

        this.groupPosService.get().subscribe(result => {
            if(result.result == ResultCode.OK){
                this.groupPos = result.data;
            } else {
                // TODO: error handling
                console.error(result.message);
                alert(result.message);
            }
        },
        error => {
                // TODO: error handling
                console.error(error);
                alert(error);
            }
        );

        this.initMap();
    }

    initMap() {
        const defaultLat: number = -34.909664;
        const defaultLong: number = -56.163319;

        // define map center
        var mapProp = {
            center: new google.maps.LatLng(defaultLat, defaultLat),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        // initialize map
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

        // mark pos
        this.marker = new google.maps.Marker({
            map: this.map,
            draggable: true,
            position: new google.maps.LatLng(defaultLat, defaultLat)
        });
    }

    findLocation() {
        var pos = super.getModel<PointOfSale>();
        var mapEdit = this.map;
        var address = pos.address;
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
                // TODO: mostrar el mensaje un poco mejor
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    add() {
        if (super.isInvalid()) {
            super.showValidationErrors();
        } else {
            var pos = super.getModel<PointOfSale>();
            if (!!this.imageFile) {
                pos.image = pos.id + '_' + this.imageFile.name;
            }
            pos.coord = this.marker.getPosition();

            this.pointOFSaleService.addPointOfSale(pos)
                .subscribe(response => {
                    if (response.result == ResultCode.Error) {
                        // TODO: error handling
                        console.error(response.message);
                        alert(response.message);
                    } else {
                        if (!!this.imageFile) {
                            this.imagesService
                                .sendImage('locales', pos.image, this.imageFile.size, this.imageFile.data)
                                .subscribe(
                                    res => {
                                        this.router.navigateByUrl('/admin/puntos-de-venta');
                                    },
                                    error => {
                                        // TODO: error handling
                                        console.error(error);
                                        alert(error);
                                    }
                                );
                        } else {
                            this.router.navigateByUrl('/admin/puntos-de-venta');
                        }
                    }
                },
                error => {
                    // TODO: error handling
                    console.error(error);
                    alert(error);
                });
        }
    }

    getImage() {
        var pos = super.getModel<PointOfSale>();
        return this.imageFile
            ? this.domSanitizer.bypassSecurityTrustUrl(
                'data:image/' + this.imageFile.type + ';base64, ' + this.imageFile.data
            )
            : 'images/locales/' + this.imagesService.getSmallImage(pos.image);
    }

    handleSelected(file: GVFile): void {
        if (!!file) {
            this.imageFile = file;
        }
    }
}
