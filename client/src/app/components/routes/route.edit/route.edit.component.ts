import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteService } from '../../../services/route.service';
import { Route as RouteModel } from '../../../shared/models/route.model'

@Component({
  selector: 'app-route.edit',
  templateUrl: './route.edit.component.html',
  styleUrls: ['./route.edit.component.css']
})
export class RouteEdit implements OnInit {

  constructor(    private activatedRoute: ActivatedRoute,
    private router: Router,
    private inputService: RouteService) { }

  ngOnInit() {
  }

}

/*
export class InputEditComponent implements OnInit, OnDestroy {
  id: number;
  paramsSub: any;

  private input: Input;

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
        this.router.navigateByUrl('/inputs');
      });
  }
}
*/
