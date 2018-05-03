import { Component, OnInit } from '@angular/core';
import { TemplatesRoutesService } from '../../../services/templates-routes.service';
import { TemplateRoute } from '../../../models/TemplateRoute.model';

import { RouteService } from '../../../services/route.service';
import { PointOfSale } from '../../../../../../datatypes/pointOfSale';
import { AlertService } from '../../../modules/alert/alert.service';
import { ResultCode } from '../../../../../../datatypes/result';

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
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.getTemplates();
        this.routeService.getPointsOfSales().subscribe(
            response => {
                this.pointsOfSale = <PointOfSale[]>response;
                console.log(this.pointsOfSale);
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo datos del servidor.');
            }
        );
    }

    getPointOfSalesRoute() {
        this.templateRouteService.getPointsOfSalesRoute(this.templateRoute.id).subscribe(
            response => {
                this.pointsOfSaleRoute = response;
                console.log(response);
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo datos del servidor.');
            });
    }

    getTemplates(): void {
        this.templateRouteService.getAll().subscribe(
            response => {
                this.templates = response.data;
                console.log(response);
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo datos del servidor.');
            }
        )
    }

    delete(id: number): void {
        this.templateRouteService.delete(id).subscribe(
            response => {
                if (response.result == ResultCode.Error) {
                    console.error(response.message);
                    this.alertService.error(response.message);
                } else {
                    this.getTemplates();
                }
            },
            error => {
                console.error(error);
                this.alertService.error('Error eliminando el template de recorrido.');
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
            },
            error => {
                console.error(error);
                this.alertService.error('Error agregando el template de recorrido.');
            }
        );
    }

    agregarPuntoDeVenta() {
        console.log(this.templateRoute.id, this.POS.id);
        this.templateRouteService.addPointOfSale(this.templateRoute.id, this.POS.id).subscribe(
            data => {
                this.getPointOfSalesRoute();
            },
            error => {
                console.error(error);
                this.alertService.error('Error agregando el punto de venta al template de recorrido.');
            }
        );
    }

    changeOrder(idpointofSale: number, position: number, newposition: number) {
        this.templateRouteService
            .reorderPointOfSale(this.templateRoute.id, idpointofSale, position, newposition)
            .subscribe(
                data => {
                    this.getPointOfSalesRoute();
                },
                error => {
                    console.error(error);
                }
            );
    }

    remove(idPointOfSale) {
        this.templateRouteService.remove(this.templateRoute.id, idPointOfSale).subscribe(
            data => {
                this.getPointOfSalesRoute();
            },
            error => {
                console.error(error);
            });
    }

    actualizar() {
        this.templateRouteService.update(this.templateRoute).subscribe(
            response => {
                if (response.result == ResultCode.Error) {
                    console.error(response.message);
                    this.alertService.error(response.message);
                } else {
                    const keepAfterRouteChange = true;
                    this.alertService.success('Template de recorrido actualizado correctamente!');
                    this.typeOfView = 1;
                }
            },
            error => {
                console.error(error);
                this.alertService.error('Error actualizando el template del recorrido.');
            }
        );
    }
}