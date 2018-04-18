import { Injectable } from "@angular/core";
//import _ = require("lodash");
import * as _ from 'lodash';
import { Unit } from "../models/unit.model";

@Injectable()
export class UnitsConversorService {

    private unitsConversions: UnitsConvertion[];

    constructor() {
        this.unitsConversions = [
            { idUnit: 1, name: 'Kg', value: 1 },
            { idUnit: 3, name: 'Bolso', value: 15 },
            { idUnit: 4, name: 'Caja', value: 18 },
            { idUnit: 5, name: 'Cajón', value: 22 },
            { idUnit: 6, name: 'Baul', value: 25 }
        ];
    }

    // Convierte de una unidad de id 'idUnit' a todas las restantes
    calculateUnitsConversions(idUnit: number, value: number): UnitsConvertion[] {
        // obtener unidad actual
        let currentConversion = this.unitsConversions.find(uc => uc.idUnit == idUnit);

        // convertir para todas las unidades restantes
        return _.chain(this.unitsConversions)
            .orderBy(uc => uc.name)
            .map(uc => <UnitsConvertion>{ idUnit: uc.idUnit, name: uc.name, value: uc.value / currentConversion.value * value })
            .filter(uc => uc.idUnit != idUnit)
            .value();
    }

    convertTo(idUnitSource: number, valueSource: number, idUnitDest): number {
        return this.calculateUnitsConversions(idUnitSource, valueSource).find(uc=>uc.idUnit==idUnitDest).value;
    }

    // Obtiene las unidades a las cuales se puede convertir (Bolso, Caja, Cajon, Baul)
    getConvertibleUnits(): UnitsConvertion[] {
        return _.chain(this.unitsConversions)
                .orderBy(uc => uc.name)
                .filter(uc => uc.name != 'Kg')
                .value();
    }

    // Determina si la unidad de id 'idUnit' tiene alguna conversión disponible
    existUnitsConversions(idUnit: number) {
        return idUnit != 2;
    }
}

export interface UnitsConvertion {
    idUnit: number;
    name: string;
    value: number;
}

export enum Units {
    Kg = 1,
    L = 2,
    Bolso = 3,
    Caja = 4,
    Cajon = 5,
    Baul = 6
}