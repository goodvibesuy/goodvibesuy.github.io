import { Component, OnInit, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import * as _ from 'lodash';

// datatypes
import { Supply } from '../../../../../../../datatypes/supply';

import { SupplyService } from '../../../../services/supply.service';
import { Unit } from '../../../../models/unit.model';
import { ResultCode } from '../../../../../../../datatypes/result';
import { AlertService } from '../../../../modules/alert/alert.service';

@Component({
    templateUrl: './supply.list.component.html',
    styleUrls: ['./supply.list.component.scss']
})
export class SupplyListComponent implements OnInit {
    protected supplies: Supply[];
    protected units: Unit[];
    private category: string = 'insumos';

    constructor(private supplyService: SupplyService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.loadSupplies();
    }

    getUnit(unitId: number): string {
        return !!this.units ? this.units.find(u => u.id == unitId).name : null;
    }

    delete(id: number): void {
        this.supplyService.delete(id).subscribe(
            res => {
                if (res.result == ResultCode.Error) {
                    console.error(res);
                    this.alertService.error(res.message);
                } else {
                    this.loadSupplies();
                }
            },
            err => {
                console.error(err);
                this.alertService.error('Error eliminando el insumo.');
            }
        );
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
}
