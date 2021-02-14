import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecardTypeSelectorPageComponent } from './timecard-type-selector-page.component';

describe('TimecardTypeSelectorPageComponent', () => {
  let component: TimecardTypeSelectorPageComponent;
  let fixture: ComponentFixture<TimecardTypeSelectorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimecardTypeSelectorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimecardTypeSelectorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
