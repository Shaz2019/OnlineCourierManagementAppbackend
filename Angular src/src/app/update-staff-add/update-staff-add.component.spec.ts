import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStaffAddComponent } from './update-staff-add.component';

describe('UpdateStaffAddComponent', () => {
  let component: UpdateStaffAddComponent;
  let fixture: ComponentFixture<UpdateStaffAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStaffAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStaffAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
