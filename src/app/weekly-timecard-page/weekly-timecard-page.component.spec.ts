import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyTimecardPageComponent } from './weekly-timecard-page.component';

describe('WeeklyTimecardPageComponent', () => {
  let component: WeeklyTimecardPageComponent;
  let fixture: ComponentFixture<WeeklyTimecardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyTimecardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyTimecardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
