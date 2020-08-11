import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadertitleComponent } from './headertitle.component';

describe('HeadertitleComponent', () => {
  let component: HeadertitleComponent;
  let fixture: ComponentFixture<HeadertitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadertitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadertitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
