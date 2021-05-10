import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCouriersComponent } from './all-couriers.component';

describe('AllCouriersComponent', () => {
  let component: AllCouriersComponent;
  let fixture: ComponentFixture<AllCouriersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCouriersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCouriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
