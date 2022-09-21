import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterCheque2Component } from './enter-cheque2.component';

describe('EnterCheque2Component', () => {
  let component: EnterCheque2Component;
  let fixture: ComponentFixture<EnterCheque2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterCheque2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterCheque2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
