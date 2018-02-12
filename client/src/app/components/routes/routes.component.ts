
/* supply en vez de input?? */

import { Component, OnInit } from '@angular/core';

import { InputListComponent } from './list/input.list.component';
import { InputEditComponent } from './edit/input.edit.component';
import { InputAddComponent } from './add/input.add.component';

// import { InputService } from '../../services/input.service';
// import { Input } from '../../shared/models/input.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  // private inputs: Input[];

  constructor(
    // private inputService: InputService
  ) { }

  ngOnInit() {
    // this.inputService.getInputs()
    //   .subscribe(data => this.inputs = data,
    //   error => { }
    //   );
  }

}
 