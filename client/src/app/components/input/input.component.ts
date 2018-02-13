
/* supply en vez de input?? */

import { Component, OnInit } from '@angular/core';

import { InputListComponent } from './list/input.list.component';
import { InputEditComponent } from './edit/input.edit.component';
import { InputAddComponent } from './add/input.add.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
}
 