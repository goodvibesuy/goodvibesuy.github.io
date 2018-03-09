import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PointOfSaleService } from '../../../services/point-of-sale.service';
import { PointOfSale } from '../../../shared/models/pointofsale.model';
import { GeneralComponent } from '../../general/general.component';



@Component({
    selector: 'app-pos',
    templateUrl: './pos.component.html',
    styleUrls: ['./pos.component.css']
})
export class PosComponent extends GeneralComponent implements OnInit {    
    private pointsOfSale: PointOfSale[];
    private POSEdit:PointOfSale;
    private POSEditName:string;
    private POSEditAddress:string;
    private POSEditTel:string;    
    private POSName:string;
    private POSAddress:string;
    private POSTel:string;
    //TODO cambiar por un enum
    private typeOfView:Number;
    
    constructor(private router: Router,
        private pointOFSaleService: PointOfSaleService
    ) {
        super();        
    }

    ngOnInit() {        
        this.setHeaderValues();
        this.loadPointsOfSale();        
        this.typeOfView = 1;
    }
  
    formEdit(idPointOfSale):void{
        this.typeOfView = 2;
        this.POSEdit = this.pointsOfSale.filter(function(pos){            
            return idPointOfSale == pos.id;
        })[0];
        this.POSEditName = this.POSEdit.name;
        this.POSEditAddress = this.POSEdit.address;
        this.POSEditTel = this.POSEdit.tel;
    }

    addForm(){
        this.typeOfView = 3;
    }

    cancelEdit(){
        this.typeOfView = 1;
    }

    cancelAdd(){
        this.typeOfView = 1;
    }

    add(){
        this.pointOFSaleService.addPointOfSale(this.generateHeader(),this.POSName,this.POSAddress,this.POSTel).subscribe(
            response => {
                console.log(response);
                this.loadPointsOfSale();
            }
        );
    }

    actualizar(){
        this.pointOFSaleService.updatePointOfSale(this.generateHeader(),this.POSEdit.id,this.POSEditName,this.POSEditAddress,this.POSEditTel).subscribe(
            response => {
                this.typeOfView = 1;
                console.log(response);
            }
        );
    }

    loadPointsOfSale(): void {
        this.pointOFSaleService.get(this.generateHeader()).subscribe(
            data => {
                this.typeOfView = 1;
                if (data.result === -1) {
                    this.removeHeaderValues();
                    this.router.navigate(['']);
                } else {
                    this.pointsOfSale = data.data
                }
            },
            error => { }
        );
    }

    delete(idPOS):void{
        this.pointOFSaleService.deletePointOfSale(this.generateHeader(),idPOS).subscribe(
            response => {
                if(response.result === - 1){
                    alert(response.message);
                }else{
                    this.loadPointsOfSale();
                }
            }
        );
    }
}