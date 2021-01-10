import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecardGridComponent } from './timecard-grid.component';

describe('TimecardGridComponent', () => {
  let component: TimecardGridComponent;
  let fixture: ComponentFixture<TimecardGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimecardGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimecardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
