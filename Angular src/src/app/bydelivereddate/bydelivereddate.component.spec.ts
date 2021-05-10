import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BydelivereddateComponent } from './bydelivereddate.component';

describe('BydelivereddateComponent', () => {
  let component: BydelivereddateComponent;
  let fixture: ComponentFixture<BydelivereddateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BydelivereddateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BydelivereddateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
