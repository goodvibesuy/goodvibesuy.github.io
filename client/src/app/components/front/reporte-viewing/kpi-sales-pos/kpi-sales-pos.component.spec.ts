import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiSalesPosComponent } from './kpi-sales-pos.component';

describe('KpiSalesPosComponent', () => {
  let component: KpiSalesPosComponent;
  let fixture: ComponentFixture<KpiSalesPosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiSalesPosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiSalesPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
