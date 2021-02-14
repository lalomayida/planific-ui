import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyTimecardGridComponent } from './weekly-timecard-grid.component';

describe('WeeklyTimecardGridComponent', () => {
  let component: WeeklyTimecardGridComponent;
  let fixture: ComponentFixture<WeeklyTimecardGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyTimecardGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyTimecardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
