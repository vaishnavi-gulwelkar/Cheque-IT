import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakePhotoComponent } from './take-photo.component';

describe('TakePhotoComponent', () => {
  let component: TakePhotoComponent;
  let fixture: ComponentFixture<TakePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakePhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
