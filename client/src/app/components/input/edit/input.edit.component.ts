
/* supply en vez de imput?? */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { InputService } from '../../../services/input.service';
import { Input } from '../../../shared/models/input.model';

@Component({
  selector: 'app-input-edit',
  templateUrl: './input.edit.component.html',
  styleUrls: ['./input.edit.component.css']
})
export class InputEditComponent implements OnInit, OnDestroy {

  id: number;
  paramsSub: any;

  private input: Input;

  constructor(
    private activatedRoute: ActivatedRoute,
    private inputService: InputService
  ) { }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params
      .subscribe(params => {

        this.inputService.get()
          .subscribe(data => {
            debugger;
            this.input = ((<Input[]>data).find(s => s.id == params['id']))
          }),
          error => { }
      }
      );
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

  actualizar(id: number, nombre: string, unidad :number){
    this.inputService.update(id, nombre, unidad)
    .subscribe(data => {}),
    error => { }
  }
}
