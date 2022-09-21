import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakePhoto2Component } from './take-photo2.component';

describe('TakePhoto2Component', () => {
  let component: TakePhoto2Component;
  let fixture: ComponentFixture<TakePhoto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakePhoto2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakePhoto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
