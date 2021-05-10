import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseShipmentComponent } from './close-shipment.component';

describe('CloseShipmentComponent', () => {
  let component: CloseShipmentComponent;
  let fixture: ComponentFixture<CloseShipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseShipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
