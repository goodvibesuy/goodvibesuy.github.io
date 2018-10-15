import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyPriceReportComponent } from './supply-price-report.component';

describe('SupplyPriceReportComponent', () => {
  let component: SupplyPriceReportComponent;
  let fixture: ComponentFixture<SupplyPriceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyPriceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyPriceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
