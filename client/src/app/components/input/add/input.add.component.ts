
/* supply en vez de imput?? */

import { Component, OnInit } from '@angular/core';
//import { InputService } from '../../services/input.service'
//import { Input } from '../../shared/models/input.model'

@Component({
  selector: 'app-input-add',
  templateUrl: './input.add.component.html',
  styleUrls: ['./input.add.component.css']
})
export class InputAddComponent implements OnInit {

  //private inputs: Input[];

  constructor(
    //private inputService: InputService
  ) { }

  ngOnInit() {
    // this.inputService.getInputs()
    //   .subscribe(data => this.inputs = data,
    //   error => { }
    //   );
  }

}
