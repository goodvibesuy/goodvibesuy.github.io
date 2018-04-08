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

    private compareViewing(a:any,b:any):number {
        console.log(a.idViewing,b.idViewing);
        if (a.idViewing !== null && b.idViewing === null){
          return 1;
        }else if (a.idViewing === null && b.last_nom !== null){
            return -1;
        }          
        return 0;
      }


    showRoute(idRoute:number):void{
        this.currentRoute = idRoute;
        this.routeService.getPointsOfSalesRoute(idRoute).subscribe(
            response => {
                this.pointsOfSale = response;
                this.pointsOfSale.sort(this.compareViewing);
                console.log(response);
            }
        )
        console.log(idRoute);
    }

}
