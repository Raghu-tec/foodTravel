import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupondataComponent } from './coupondata.component';

describe('CoupondataComponent', () => {
  let component: CoupondataComponent;
  let fixture: ComponentFixture<CoupondataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoupondataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupondataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
