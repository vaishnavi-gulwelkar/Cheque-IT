import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterChequeDetailsComponent } from './enter-cheque-details.component';

describe('EnterChequeDetailsComponent', () => {
  let component: EnterChequeDetailsComponent;
  let fixture: ComponentFixture<EnterChequeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterChequeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterChequeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
