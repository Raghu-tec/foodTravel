import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsidedataComponent } from './outsidedata.component';

describe('OutsidedataComponent', () => {
  let component: OutsidedataComponent;
  let fixture: ComponentFixture<OutsidedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsidedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsidedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
