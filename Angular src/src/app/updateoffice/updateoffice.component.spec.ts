import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateofficeComponent } from './updateoffice.component';

describe('UpdateofficeComponent', () => {
  let component: UpdateofficeComponent;
  let fixture: ComponentFixture<UpdateofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
