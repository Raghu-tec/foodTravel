import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomefooddataComponent } from './homefooddata.component';

describe('HomefooddataComponent', () => {
  let component: HomefooddataComponent;
  let fixture: ComponentFixture<HomefooddataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomefooddataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomefooddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
