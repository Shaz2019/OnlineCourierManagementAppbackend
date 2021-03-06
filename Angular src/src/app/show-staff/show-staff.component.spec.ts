import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStaffComponent } from './show-staff.component';

describe('ShowStaffComponent', () => {
  let component: ShowStaffComponent;
  let fixture: ComponentFixture<ShowStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
