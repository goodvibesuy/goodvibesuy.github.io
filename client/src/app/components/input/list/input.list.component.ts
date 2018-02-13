
/* supply en vez de imput?? */

import { Component, OnInit, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { InputService } from '../../../services/input.service';
import { Input as InputModel } from '../../../shared/models/input.model'

@Component({
  selector: 'app-input-list',
  templateUrl: './input.list.component.html',
  styleUrls: ['./input.list.component.css']
})
export class InputListComponent implements OnInit {

  @Input() inputs: InputModel[];

  constructor(
    private inputService: InputService
  ) { }

  ngOnInit() {
    this.loadInputs();
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
      error => { }
    );
  }
}