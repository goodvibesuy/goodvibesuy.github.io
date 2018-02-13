import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Route.AddComponent } from './route.add.component';

describe('Route.AddComponent', () => {
  let component: Route.AddComponent;
  let fixture: ComponentFixture<Route.AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route.AddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route.AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
