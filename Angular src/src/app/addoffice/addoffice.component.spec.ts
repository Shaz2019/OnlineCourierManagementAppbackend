import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddofficeComponent } from './addoffice.component';

describe('AddofficeComponent', () => {
  let component: AddofficeComponent;
  let fixture: ComponentFixture<AddofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
