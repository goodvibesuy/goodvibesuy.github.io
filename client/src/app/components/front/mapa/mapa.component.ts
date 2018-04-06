import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../../services/route.service';
import { PointOfSale } from '../../../../../../datatypes/pointOfSale';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-mapa',
    templateUrl: './mapa.component.html',
    styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

    private routes: any[];
    private pointsOfSale: PointOfSale[];
    private currentRoute:number;
    constructor(
        private route: ActivatedRoute,
        private routeService: RouteService) {

    }

    ngOnInit() {
        this.pointsOfSale = new Array<PointOfSale>();
        this.routeService.getRoutesByUser(5).subscribe(
            response => {
                this.routes = response;
                console.log(response);
            }
        )

        this.showRoute(Number(this.route.snapshot.paramMap.get('idRoute')));
    }

    showRoute(idRoute:number):void{
        console.log(idRoute);
        this.currentRoute = idRoute;
        this.routeService.getPointsOfSalesRoute(idRoute).subscribe(
            response => {
                this.pointsOfSale = response;
                console.log(response);
            }
        )
        console.log(idRoute);
    }

}
