

import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detalle-local',
  templateUrl: './detalle-local.component.html',
  styleUrls: ['./detalle-local.component.css']
})
export class DetalleLocalComponent implements OnInit {

  constructor(
    private id: string,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.route.paramMap
        .switchMap((params: ParamMap) => params.getAll('id'))
        .subscribe(id =>  this.id =id);
    }
}
