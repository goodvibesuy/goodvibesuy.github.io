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

    constructor(private router: Router,
        private pointOFSaleService: PointOfSaleService) {
        super();
    }

    ngOnInit() {
        this.setHeaderValues();
        this.loadPointsOfSale();
    }


    loadPointsOfSale(): void {
        this.pointOFSaleService.get(this.generateHeader()).subscribe(
            data => {
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
