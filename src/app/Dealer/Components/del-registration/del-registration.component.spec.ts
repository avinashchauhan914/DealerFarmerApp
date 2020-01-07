import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelRegistrationComponent } from './del-registration.component';

describe('DelRegistrationComponent', () => {
  let component: DelRegistrationComponent;
  let fixture: ComponentFixture<DelRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
