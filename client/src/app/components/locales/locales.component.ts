import { Component, OnInit } from '@angular/core';
import { PointOfSaleService } from '../../services/point-of-sale.service';
import { Router } from '@angular/router';
import { PointOfSale } from '../../shared/models/pointofsale.model';
import { ProductsService } from '../../services/products.service';
import { GeneralComponent } from '../general/general.component';

@Component({
    selector: 'app-locales',
    templateUrl: './locales.component.html',
    styleUrls: ['./locales.component.css']
})
export class LocalesComponent extends GeneralComponent implements OnInit {    
    private pointsOfSale:PointOfSale[];    

    constructor(private router: Router, 
        private pointOFSaleService:PointOfSaleService,
        private productService:ProductsService
    ) { 
        super();
    }

    ngOnInit() {        
        this.setHeaderValues();
        this.loadPointsOfSale();
    }

    loadPointsOfSale(): void {
        this.pointOFSaleService.get(this.generateHeader()).subscribe(
            data => {
                console.log(data);
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
}