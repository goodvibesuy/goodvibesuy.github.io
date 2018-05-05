import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOfSuppliesComponent } from './purchase-of-supplies.component';

describe('PurchaseOfSuppliesComponent', () => {
  let component: PurchaseOfSuppliesComponent;
  let fixture: ComponentFixture<PurchaseOfSuppliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseOfSuppliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOfSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
