import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyTimecardHeaderComponent } from './weekly-timecard-header.component';

describe('WeeklyTimecardHeaderComponent', () => {
  let component: WeeklyTimecardHeaderComponent;
  let fixture: ComponentFixture<WeeklyTimecardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyTimecardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyTimecardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
