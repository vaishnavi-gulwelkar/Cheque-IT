import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCreditDetailsComponent } from './show-credit-details.component';

describe('ShowCreditDetailsComponent', () => {
  let component: ShowCreditDetailsComponent;
  let fixture: ComponentFixture<ShowCreditDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCreditDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCreditDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
