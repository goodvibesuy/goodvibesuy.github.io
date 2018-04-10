import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../../services/route.service';
import { PointOfSale } from '../../../../../../datatypes/pointOfSale';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../../../../datatypes/product';

@Component({
    selector: 'app-mapa',
    templateUrl: './mapa.component.html',
    styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

    private routes: any[];
    private pointsOfSale: PointOfSale[];
    private finishedViewing: PointOfSale;
    private currentRoute: number;
    public stock:{product:Product,quantity:number}[];

    constructor(
        private route: ActivatedRoute,
        private routeService: RouteService
    ) {
        this.stock = new Array<{product:Product,quantity:number}>();
    }

    ngOnInit() {
        this.pointsOfSale = new Array<PointOfSale>();        
        let userSaved = localStorage.getItem('user');
        this.routeService.getRoutesByUserId(5).subscribe(
            response => {
                this.routes = response;
                console.log(response);
            }
        )

        this.showRoute(Number(this.route.snapshot.paramMap.get('idRoute')));
    }

    public getFinishedViewing(): any {
        return this.pointsOfSale.filter(input => input.idViewing !== null);
    }

    public getUnFinishedViewing(): any {
        return this.pointsOfSale.filter(input => input.idViewing === null);
    }

    private compareViewing(a: any, b: any): number {
        console.log(a.idViewing, b.idViewing);
        if (a.idViewing !== null && b.idViewing === null) {
            return 1;
        } else if (a.idViewing === null && b.last_nom !== null) {
            return -1;
        }
        return 0;
    }


    showRoute(idRoute: number): void {
        this.currentRoute = idRoute;
        this.routeService.getPointsOfSalesRoute(idRoute).subscribe(
            response => {
                this.pointsOfSale = response;
                //this.pointsOfSale.sort(this.compareViewing);
                this.finishedViewing = this.getFinishedViewing();
                this.pointsOfSale = this.getUnFinishedViewing();
                console.log(response);
                this.routeService.getStockRoute(idRoute).subscribe(
                    responseStock => {
                        this.stock = responseStock;
                        //console.log(response);
                    }
                )
            }
        )
        console.log(idRoute);
    }
}
