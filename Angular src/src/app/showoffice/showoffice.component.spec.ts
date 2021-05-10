import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowofficeComponent } from './showoffice.component';

describe('ShowofficeComponent', () => {
  let component: ShowofficeComponent;
  let fixture: ComponentFixture<ShowofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
