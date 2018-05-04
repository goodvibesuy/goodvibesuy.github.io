import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiSaleReturnsGroupPosComponent } from './kpi-sale-returns-group-pos.component';

describe('KpiSaleReturnsGroupPosComponent', () => {
  let component: KpiSaleReturnsGroupPosComponent;
  let fixture: ComponentFixture<KpiSaleReturnsGroupPosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiSaleReturnsGroupPosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiSaleReturnsGroupPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
