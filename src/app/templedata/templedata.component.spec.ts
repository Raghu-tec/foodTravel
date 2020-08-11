import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempledataComponent } from './templedata.component';

describe('TempledataComponent', () => {
  let component: TempledataComponent;
  let fixture: ComponentFixture<TempledataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempledataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempledataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
