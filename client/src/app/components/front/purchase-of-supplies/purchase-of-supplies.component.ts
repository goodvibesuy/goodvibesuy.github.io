import { Component, OnInit } from '@angular/core';
import { SupplyService } from '../../../services/supply.service';
import { Supply } from '../../../../../../datatypes/supply';
import { AlertService } from '../../../modules/alert/alert.service';
import { Unit } from '../../../models/unit.model';
import { ProvidersService } from '../../../services/providers.service';
import { ResultCode } from '../../../../../../datatypes/result';
import { Provider } from '../../../../../../datatypes/provider';
import { UnitsConversorService, UnitsConvertion } from '../../../services/units-conversor.service';

@Component({
    selector: 'app-purchase-of-supplies',
    templateUrl: './purchase-of-supplies.component.html',
    styleUrls: ['./purchase-of-supplies.component.scss']
})
export class PurchaseOfSuppliesComponent implements OnInit {

    private supplies:Supply[];
    private units:Unit[];
    private providers:Provider[];
    private convertibleUnits:UnitsConvertion[];
    constructor(private supplyService: SupplyService,
        private alertService:AlertService,
        private providerService:ProvidersService,
        private unitsConversorService:UnitsConversorService
    ) { }

    ngOnInit() {
        this.convertibleUnits = this.unitsConversorService.getConvertibleUnits();
        this.loadSupplies();
        this.getAllProviders();
    }

    getUnit(unitId: number): string {
        return !!this.units ? this.units.find(u => u.id == unitId).name : null;
    }

    private loadSupplies(): void {
        this.supplyService.getLatestPrices().subscribe(
            data => { this.supplies = data; },
            error => {
                console.error(error);
                this.alertService.error('Error cargando los insumos');
            }
        );

        this.supplyService.getUnits().subscribe(
            data => (this.units = data),
            error => {
                console.error(error);
                this.alertService.error('Error cargando los insumos.');
            }
        );
    }

    getAllProviders(): void {
        this.providerService.getAll().subscribe(
            response => {
                if (response.result == ResultCode.Error) {
                    console.error(response.message);
                    this.alertService.error('Error obteniendo los proveedores. ' + response.message);
                } else {
                    console.log(response);
                    if (response.result > 0) {
                        this.providers = response.data;
                    }
                }
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo los proveedores.');
            }
        )
    }

}
