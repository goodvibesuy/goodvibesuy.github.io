
/* supply en vez de imput?? */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// service
import { SupplyService } from '../../../../services/supply.service';
// models
import { Supply } from '../../../../shared/models/supply.model';
import { Unit } from '../../../../shared/models/unit.model';

@Component({
  selector: 'app-input-add',
  templateUrl: './supply.add.component.html',
  styleUrls: ['./supply.add.component.css']
})
export class SupplyAddComponent implements OnInit {

  private supply: Supply;
  private units: Unit[];

  constructor(
    private supplyService: SupplyService,
    private router: Router
  ) {
    this.supply = <Supply>{ id: -1, name: '', unit: 1, amount: 0};
  }

  ngOnInit() {
    this.supplyService.getUnits()
      .subscribe(data => {
        this.units = <Unit[]>data;
      });
  }

  agregar() : void{
    this.supplyService.agregar(this.supply)
      .subscribe(data => {
        this.router.navigateByUrl('/insumos');
      });
  }
}
