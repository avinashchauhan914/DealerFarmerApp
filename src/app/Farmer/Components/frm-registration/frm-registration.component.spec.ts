import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmRegistrationComponent } from './frm-registration.component';

describe('FrmRegistrationComponent', () => {
  let component: FrmRegistrationComponent;
  let fixture: ComponentFixture<FrmRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
