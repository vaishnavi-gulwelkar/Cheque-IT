import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeAcNumComponent } from './take-ac-num.component';

describe('TakeAcNumComponent', () => {
  let component: TakeAcNumComponent;
  let fixture: ComponentFixture<TakeAcNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeAcNumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeAcNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
