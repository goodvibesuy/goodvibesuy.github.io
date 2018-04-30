import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteViewingComponent } from './reporte-viewing.component';

describe('ReporteViewingComponent', () => {
  let component: ReporteViewingComponent;
  let fixture: ComponentFixture<ReporteViewingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteViewingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteViewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
