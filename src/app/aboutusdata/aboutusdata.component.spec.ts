import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusdataComponent } from './aboutusdata.component';

describe('AboutusdataComponent', () => {
  let component: AboutusdataComponent;
  let fixture: ComponentFixture<AboutusdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
