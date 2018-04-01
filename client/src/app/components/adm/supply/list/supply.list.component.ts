import { Component, OnInit, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import * as _ from 'lodash';

// datatypes
import { Supply } from '../../../../../../../datatypes/supply';

import { SupplyService } from '../../../../services/supply.service';
import { Unit } from '../../../../models/unit.model';
import { ResultCode } from '../../../../../../../datatypes/result';

@Component({
    templateUrl: './supply.list.component.html',
    styleUrls: ['./supply.list.component.scss']
})
export class SupplyListComponent implements OnInit {
    protected supplies: Supply[];
    protected units: Unit[];
    private category: string = 'insumos';

    constructor(private supplyService: SupplyService) { }

    ngOnInit() {
        this.loadSupplies();
    }

    getUnit(unitId: number): string {
        return !!this.units ? this.units.find(u => u.id == unitId).name : null;
    }

    delete(id: number): void {
        this.supplyService.delete(id).subscribe(
            res => {
                if (res.result == ResultCode.OK) {
                    this.loadSupplies();
                } else {
                    console.error('ERROR: ' + res.message);
                    alert('ERROR: ' + res.message);
                }
            },
            err => {
                console.error('UNEXPECTED ERROR: ' + err);
                alert(err);
            }
        );
    }

    private loadSupplies(): void {
        this.supplyService.getLatestPrices().subscribe(data => { this.supplies = data; },
            error => {
                // TODO: mostrar error
                console.error(error);
                alert(error);
            }
        );

        this.supplyService.getUnits().subscribe(
            data => (this.units = data),
            error => {
                // TODO: mostrar error
                console.error(error);
                alert(error);
            }
        );
    }
}
