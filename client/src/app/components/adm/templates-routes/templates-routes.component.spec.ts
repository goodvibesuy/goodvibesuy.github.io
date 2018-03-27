import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesRoutesComponent } from './templates-routes.component';

describe('TemplatesRoutesComponent', () => {
  let component: TemplatesRoutesComponent;
  let fixture: ComponentFixture<TemplatesRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatesRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
