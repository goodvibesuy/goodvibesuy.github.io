import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Route.EditComponent } from './route.edit.component';

describe('Route.EditComponent', () => {
  let component: Route.EditComponent;
  let fixture: ComponentFixture<Route.EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route.EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route.EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
