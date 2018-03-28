import { Component, OnInit } from '@angular/core';
import { TemplatesRoutesService } from '../../../services/templates-routes.service';
import { TemplateRoute } from '../../../models/TemplateRoute.model';
import { PointOfSale } from '../../../models/pointofsale.model';


import { RouteService } from '../../../services/route.service';

@Component({
    selector: 'app-templates-routes',
    templateUrl: './templates-routes.component.html',
    styleUrls: ['./templates-routes.component.scss']
})
export class TemplatesRoutesComponent implements OnInit {
    private templateRoute: TemplateRoute;
    private POS: PointOfSale;
    private routeTemplateName: string;
    private pointsOfSaleRoute: PointOfSale[];
    private pointsOfSale: PointOfSale[];
    private templates: any[];
    private typeOfView: number = 1;
    constructor(
        private templateRouteService: TemplatesRoutesService,
        private routeService: RouteService,
    ) { }

    ngOnInit() {
        this.getTemplates();
        this.routeService.getPointsOfSales().subscribe(
            response => {
                this.pointsOfSale = <PointOfSale[]>response;
                console.log(this.pointsOfSale);
            });
    }

    getPointOfSalesRoute() {
        this.templateRouteService.getPointsOfSalesRoute(this.templateRoute.id).subscribe(
            response => {
                this.pointsOfSaleRoute = response;
                console.log(response);
            });
    }

    getTemplates(): void {
        this.templateRouteService.getAll().subscribe(
            response => {
                this.templates = response.data;
                console.log(response);
            }
        )
    }

    delete(id: number): void {
        this.templateRouteService.delete(id).subscribe(
            response => {
                this.getTemplates();
                console.log(response);
            }
        )
    }

    addForm(): void {
        this.typeOfView = 3;
    }

    cancelEdit(): void {
        this.typeOfView = 1;
    }

    editForm(id: number): void {
        this.templateRoute = (<TemplateRoute[]>this.templates).find(s => s.id == id);
        this.getPointOfSalesRoute();
        this.typeOfView = 2;
    }

    nuevoTemplate(): void {
        this.templateRouteService.add(this.routeTemplateName).subscribe(
            data => {
                console.log(data);
                this.getTemplates();
                this.typeOfView = 1;
            }
        );
    }

    agregarPuntoDeVenta() {
        console.log(this.templateRoute.id, this.POS.id);
        this.templateRouteService.addPointOfSale(this.templateRoute.id, this.POS.id).subscribe(data => {
            this.getPointOfSalesRoute();
        });
    }

    changeOrder(idpointofSale: number, position: number, newposition: number) {
        this.templateRouteService
            .reorderPointOfSale(this.templateRoute.id, idpointofSale, position, newposition)
            .subscribe(data => {
                this.getPointOfSalesRoute();
            });
    }

    remove(idPointOfSale) {
		this.templateRouteService.remove(this.templateRoute.id, idPointOfSale).subscribe(data => {
			this.getPointOfSalesRoute();
		});
	}
}
