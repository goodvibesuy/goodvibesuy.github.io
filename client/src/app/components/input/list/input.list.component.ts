
/* supply en vez de imput?? */
import { Component, OnInit, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { InputService } from '../../../services/input.service';
import { Input as InputModel } from '../../../shared/models/input.model'
import { SupplyUnit } from '../../../shared/models/supply-unit.model';

@Component({
  selector: 'app-input-list',
  templateUrl: './input.list.component.html',
  styleUrls: ['./input.list.component.css']
})
export class InputListComponent implements OnInit {

  protected inputs: InputModel[];
  protected units: SupplyUnit[];

  constructor(
    private inputService: InputService
  ) { }

  ngOnInit() {
    this.loadInputs();
  }

  getUnit(unitId: number) : string {
    return this.units.find(u => u.id == unitId).name;
  }
  
  delete(id: number): void{
    this.inputService
      .delete(id)
      .subscribe(data=> this.loadInputs());
  }

  loadInputs():void{
    this.inputService
      .get()
      .subscribe(data => this.inputs = data,
      error => { });

      this.inputService
        .getUnits()
        .subscribe(data => this.units = data,
        error => { });
  }
}