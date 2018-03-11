import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PointOfSaleService } from '../../../services/point-of-sale.service';
import { PointOfSale } from '../../../shared/models/pointofsale.model';
import {} from '@types/googlemaps';

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
	private POSName: string;
	private POSAddress: string;
	private POSTel: string;
	//TODO cambiar por un enum
	private typeOfView: Number;

	@ViewChild('gmap') gmapElement: any;
	private map: google.maps.Map;
	private geocoder = new google.maps.Geocoder();

	constructor(private router: Router, private pointOFSaleService: PointOfSaleService) {}

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

	geocodeAddress(geocoder, resultsMap) {
		var address = this.POSAddress;
		geocoder.geocode({ address: address }, function(results, status) {
			if (status === 'OK') {
				resultsMap.setCenter(results[0].geometry.location);
				var marker = new google.maps.Marker({
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
		this.POSEdit = this.pointsOfSale.filter(function(pos) {
			return idPointOfSale == pos.id;
		})[0];
		this.POSEditName = this.POSEdit.name;
		this.POSEditAddress = this.POSEdit.address;
		this.POSEditTel = this.POSEdit.tel;
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
		this.pointOFSaleService.addPointOfSale(this.POSName, this.POSAddress, this.POSTel).subscribe(response => {
			console.log(response);
			this.loadPointsOfSale();
		});
	}

	actualizar() {
		this.pointOFSaleService
			.updatePointOfSale(this.POSEdit.id, this.POSEditName, this.POSEditAddress, this.POSEditTel)
			.subscribe(response => {
				this.typeOfView = 1;
				console.log(response);
			});
	}

	loadPointsOfSale(): void {
		this.pointOFSaleService.get().subscribe(
			data => {
				this.typeOfView = 1;
				if (data.result === -1) {
					this.router.navigate(['']);
				} else {
					this.pointsOfSale = data.data;
				}
			},
			error => {}
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
