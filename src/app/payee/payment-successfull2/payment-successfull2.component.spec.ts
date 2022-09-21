import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSuccessfull2Component } from './payment-successfull2.component';

describe('PaymentSuccessfull2Component', () => {
  let component: PaymentSuccessfull2Component;
  let fixture: ComponentFixture<PaymentSuccessfull2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentSuccessfull2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentSuccessfull2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
