import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../../services/route.service';
import { PointOfSale } from '../../../../../../datatypes/pointOfSale';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../../../../datatypes/product';
import { AuthenticateService } from '../../../services/authenticate.service';
import { ViewingService } from '../../../services/viewing.service';
import { UsersService } from '../../../services/users.service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component({
    selector: 'app-mapa',
    templateUrl: './mapa.component.html',
    styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

    public routes: any[];
    private viewings: any[];
    pointsOfSale: PointOfSale[];
    finishedViewing: any[];
    productsDelivery: { idproduct: number, quantity: number, displayOrder: number, name: string, path_image: string }[];
    public currentRoute: number;
    public stock: { product: Product, quantity: number }[];

    constructor(
        private route: ActivatedRoute,
        private routeService: RouteService,
        private authenticateService: AuthenticateService,
        private viewingService: ViewingService,
        private userService: UsersService
    ) {
        this.stock = new Array<{ product: Product, quantity: number }>();
    }

    ngOnInit() {
        this.authenticateService.verifyToken().subscribe(
            response => {
                if (!response.result) {
                    alert("Su sesion ha expirado o no tiene privilegios para esta operacion.");
                } else {
                    this.pointsOfSale = new Array<PointOfSale>();
                    this.userService.getCurrentUser().subscribe(
                        response => {
                            if (response.result > 0) {
                                let userId = response.data[0].id;
                                this.routeService.getRoutesByUserId(userId).subscribe(
                                    responseRoutes => {
                                        this.routes = responseRoutes;
                                    }
                                );
                                this.showRoute(Number(this.route.snapshot.paramMap.get('idRoute')));
                            }
                        }
                    );
                }
            });
    }

    public downloadTrip(): void {
        var options = {
            fieldSeparator: ';',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true
        };

        let data: { name: string, address: string, tel: string }[] = new Array<{ name: string, address: string, tel: string }>();
        //name, address , tel

        data.push({ name: "Nombre", address: "Dirección", tel: "Telefono" });
        for (let i = 0; i < this.pointsOfSale.length; i++) {
            data.push({ name: this.pointsOfSale[i].name, address: this.pointsOfSale[i].address, tel: this.pointsOfSale[i].tel });
        }
        //finishedViewing
        new Angular2Csv(data, 'Puntos de ventas recorridos', options);
    }

    public downloadFinished(): void {
        var options = {
            fieldSeparator: ';',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true
        };

        let data: { name: string, address: string, tel: string }[] = new Array<{ name: string, address: string, tel: string }>();
        //name, address , tel
        data.push({ name: "Nombre", address: "Dirección", tel: "Telefono" });
        console.log(this.finishedViewing);
        for (let i = 0; i < this.finishedViewing.length; i++) {
            data.push({ name: this.finishedViewing[i].pos.name, address: this.finishedViewing[i].pos.address, tel: this.finishedViewing[i].pos.tel });
        }
        //
        new Angular2Csv(data, 'Puntos de ventas pendientes', options);
    }

    public getFinishedViewing(): any {
        let finished = this.pointsOfSale.filter(input => input.idViewing !== null);
        let viewingPOS: Array<{ date: Date, pos: PointOfSale }>;
        viewingPOS = new Array<{ date: Date, pos: PointOfSale }>();
        for (let i = 0; i < finished.length; i++) {
            let viewing = this.viewings.filter(v => v.idCustomer == finished[i].id)[0];
            console.log(viewing, this.viewings);
            viewingPOS.push({ date: viewing.date, pos: finished[i] });
        }

        return viewingPOS.sort(function (a, b) {
            if (a.date > b.date) {
                return -1;
            }
            if (a.date < b.date) {
                return 1;
            }
            return 0;
        });

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
                this.viewingService.getViewingsByRoute(idRoute).subscribe(
                    responseViewing => {
                        if (responseViewing.result > 0) {
                            this.viewings = responseViewing.data;
                            this.pointsOfSale = response;
                            console.log(response);
                            //this.pointsOfSale.sort(this.compareViewing);
                            this.finishedViewing = this.getFinishedViewing();
                            this.pointsOfSale = this.getUnFinishedViewing();
                            console.log(response);

                            this.viewingService.getRouteDelivery(idRoute).subscribe(
                                responseDelivery => {
                                    console.log(responseDelivery);
                                    if (responseDelivery.result > 0) {
                                        this.productsDelivery = responseDelivery.data;
                                    }
                                }
                            )

                            this.routeService.getStockRoute(idRoute).subscribe(
                                responseStock => {
                                    this.stock = responseStock;
                                    //console.log(response);
                                }
                            );
                        }
                    }
                )
            }
        )
    }
}