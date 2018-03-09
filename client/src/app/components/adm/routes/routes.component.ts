/* supply en vez de input?? */
import { Component, OnInit } from '@angular/core';

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
