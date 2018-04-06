import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../../services/route.service';
import { PointOfSale } from '../../../../../../datatypes/pointOfSale';

@Component({
    selector: 'app-mapa',
    templateUrl: './mapa.component.html',
    styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

    private routes: any[];
    private pointsOfSale: PointOfSale[];
    constructor(private routeService: RouteService) {

    }

    ngOnInit() {
        this.pointsOfSale = new Array<PointOfSale>();
        this.routeService.getRoutesByUser(5).subscribe(
            response => {
                this.routes = response;
                console.log(response);
            }
        )
    }

    showRoute(idRoute:number):void{
        this.routeService.getPointsOfSalesRoute(idRoute).subscribe(
            response => {
                this.pointsOfSale = response;
                console.log(response);
            }
        )
        console.log(idRoute);
    }

}
