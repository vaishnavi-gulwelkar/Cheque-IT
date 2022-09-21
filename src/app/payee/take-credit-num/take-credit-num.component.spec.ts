import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeCreditNumComponent } from './take-credit-num.component';

describe('TakeCreditNumComponent', () => {
  let component: TakeCreditNumComponent;
  let fixture: ComponentFixture<TakeCreditNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeCreditNumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeCreditNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
