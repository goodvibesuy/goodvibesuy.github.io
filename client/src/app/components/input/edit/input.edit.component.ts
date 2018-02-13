
/* supply en vez de imput?? */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// service
import { InputService } from '../../../services/input.service';
// models
import { Input } from '../../../shared/models/input.model';
import { SupplyUnit } from '../../../shared/models/supply-unit.model';

@Component({
  selector: 'app-input-edit',
  templateUrl: './input.edit.component.html',
  styleUrls: ['./input.edit.component.css']
})
export class InputEditComponent implements OnInit, OnDestroy {

  id: number;
  paramsSub: any;

  private input: Input;
  private units: SupplyUnit[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private inputService: InputService
  ) { }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params
      .subscribe(params => {

        this.inputService.get()
          .subscribe(data => {
            this.input = ((<Input[]>data).find(s => s.id == params['id']))
          });

        this.inputService.getUnits()
          .subscribe(data => {
            this.units = <SupplyUnit[]>data;
          });
      },
      error => { }
      );
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

  actualizar() {
    this.inputService.update(this.input)
      .subscribe(data => {
        this.router.navigateByUrl('/insumos');
      });
  }
}
