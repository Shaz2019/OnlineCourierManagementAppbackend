import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcourierComponent } from './addcourier.component';

describe('AddcourierComponent', () => {
  let component: AddcourierComponent;
  let fixture: ComponentFixture<AddcourierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcourierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
