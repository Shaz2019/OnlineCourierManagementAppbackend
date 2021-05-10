import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectshipmentComponent } from './rejectshipment.component';

describe('RejectshipmentComponent', () => {
  let component: RejectshipmentComponent;
  let fixture: ComponentFixture<RejectshipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectshipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectshipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
