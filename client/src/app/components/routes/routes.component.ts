
/* supply en vez de input?? */

import { Component, OnInit } from '@angular/core';


// import { InputService } from '../../services/input.service';
// import { Input } from '../../shared/models/input.model';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

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
 