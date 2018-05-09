import { Component, OnInit } from '@angular/core';
import { SupplyService } from '../../../services/supply.service';
import { Supply } from '../../../../../../datatypes/supply';
import { AlertService } from '../../../modules/alert/alert.service';
import { Unit } from '../../../models/unit.model';
import { ProvidersService } from '../../../services/providers.service';
import { ResultCode } from '../../../../../../datatypes/result';
import { Provider } from '../../../../../../datatypes/provider';
import { UnitsConversorService, UnitsConvertion, Units } from '../../../services/units-conversor.service';
import { ValidableForm } from '../../../shared/ValidableForms';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbDateFormatter } from '../../../shared/DateParserFormatter';

@Component({
    selector: 'app-purchase-of-supplies',
    templateUrl: './purchase-of-supplies.component.html',
    styleUrls: ['./purchase-of-supplies.component.scss']
})
export class PurchaseOfSuppliesComponent extends ValidableForm implements OnInit {

    public supplies: Supply[];
    private units: Unit[];
    private providers: Provider[];
    private convertibleUnits: UnitsConvertion[];
    private a:number=0;
    private supplies_prices:{ year: number, month: number, day: number }[] = new Array<{ year: number, month: number, day: number }>();
    constructor(
        fb: FormBuilder,
        private supplyService: SupplyService,
        private alertService: AlertService,
        private providerService: ProvidersService,
        private unitsConversorService: UnitsConversorService
    ) {
        super(fb);
        super.initForm({
            price_date: [null, Validators.required]
        });
    }

    ngOnInit() {
        this.convertibleUnits = this.unitsConversorService.getConvertibleUnits();
        this.loadSupplies();
        this.getAllProviders();
    }

    send(idSupply: number) {
        var supply = this.supplies.filter(sup => sup.id == idSupply)[0];
        supply.price_date = NgbDateFormatter.unformatDate(this.supplies_prices[idSupply]);
        //console.log(supplyObject);
        //var supply = super.getModel<Supply>({ 'price_date': NgbDateFormatter.unformatDate });
        if (this.existUnitsConversions(supply.unit) && supply.unit != Units.Kg) {
            // Convertir el precio de la unidad X a Kg
            supply.amount = this.unitsConversorService.convertTo(supply.unit, supply.amount, Units.Kg);
            supply.unit = Units.Kg;
        }
        var promise = this.supplyService.update(supply);
        promise.subscribe(
            response => {
                if (response.result == ResultCode.Error) {
                    console.error(response.message);
                    this.alertService.error('Error actualizando el insumo. ' + response.message);
                } else {
                    const keepAfterRouteChange = true;
                    this.alertService.success('Insumo actualizado correctamente!', keepAfterRouteChange);
                }
            },
            error => {
                console.error(error);
                this.alertService.error('Error obteniendo datos del servidor.');
            }
        );
    }

    getUnit(unitId: number): string {
        return !!this.units ? this.units.find(u => u.id == unitId).name : null;
    }

    private loadSupplies(): void {
        this.supplyService.getLatestPrices().subscribe(
            data => { 
                this.supplies = data; 
                for(let i = 0 ; i < this.supplies.length ; i++){
                    this.supplies_prices[this.supplies[i].id] = NgbDateFormatter.formatDate(this.supplies[i].price_date);
                }
            },
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

    protected existUnitsConversions(idUnit: number): boolean {
        let exists: boolean = false;

        var unitsLoaded = !!this.units && (!!this.units.find(u => u.id == idUnit) || !!this.convertibleUnits.find(cu => cu.idUnit == idUnit));
        if (unitsLoaded) {
            var idUnit = this.units.find(u => u.id == idUnit) ? this.units.find(u => u.id == idUnit).id : null ||
                this.convertibleUnits.find(cu => cu.idUnit == idUnit) ? this.convertibleUnits.find(cu => cu.idUnit == idUnit).idUnit : null;

            exists = this.unitsConversorService.existUnitsConversions(idUnit);
        }
        return exists;
    }

}
