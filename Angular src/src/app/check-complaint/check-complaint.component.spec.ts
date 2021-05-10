import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckComplaintComponent } from './check-complaint.component';

describe('CheckComplaintComponent', () => {
  let component: CheckComplaintComponent;
  let fixture: ComponentFixture<CheckComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
