import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAcDetailsComponent } from './show-ac-details.component';

describe('ShowAcDetailsComponent', () => {
  let component: ShowAcDetailsComponent;
  let fixture: ComponentFixture<ShowAcDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAcDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAcDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
