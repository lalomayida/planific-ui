import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecardHeaderComponent } from './timecard-header.component';

describe('TimecardHeaderComponent', () => {
  let component: TimecardHeaderComponent;
  let fixture: ComponentFixture<TimecardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimecardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimecardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
