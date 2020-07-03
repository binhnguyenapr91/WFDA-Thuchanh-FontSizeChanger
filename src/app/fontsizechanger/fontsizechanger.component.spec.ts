import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontsizechangerComponent } from './fontsizechanger.component';

describe('FontsizechangerComponent', () => {
  let component: FontsizechangerComponent;
  let fixture: ComponentFixture<FontsizechangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontsizechangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontsizechangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
