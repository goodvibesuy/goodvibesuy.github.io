
/* supply en vez de imput?? */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// service
import { InputService } from '../../../services/input.service';
// models
import { Input } from '../../../shared/models/input.model';
import { SupplyUnit } from '../../../shared/models/supply-unit.model';

@Component({
  selector: 'app-input-add',
  templateUrl: './input.add.component.html',
  styleUrls: ['./input.add.component.css']
})
export class InputAddComponent implements OnInit {

  private input: Input;
  private units: SupplyUnit[];

  constructor(
    private inputService: InputService,
    private router: Router
  ) {
    this.input = <Input>{ id: -1, name: '', unity: 1, amount: 0};
  }

  ngOnInit() {
    this.inputService.getUnits()
      .subscribe(data => {
        this.units = <SupplyUnit[]>data;
      });
  }

  agregar() : void{
    this.inputService.agregar(this.input)
      .subscribe(data => {
        this.router.navigateByUrl('/insumos');
      });
  }
}
