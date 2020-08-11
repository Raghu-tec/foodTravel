import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BananaleafComponent } from './bananaleaf.component';

describe('BananaleafComponent', () => {
  let component: BananaleafComponent;
  let fixture: ComponentFixture<BananaleafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BananaleafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BananaleafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
