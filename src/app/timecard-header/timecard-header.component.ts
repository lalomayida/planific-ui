import { Component, Input, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-timecard-header',
  templateUrl: './timecard-header.component.html',
  styleUrls: ['./timecard-header.component.css'],
})
export class TimecardHeaderComponent implements OnInit {
 
  @Input() title: string;
  @Input() date: NgbDateStruct;

  today: NgbDateStruct;

  constructor(private calendar: NgbCalendar) {}

  ngOnInit(): void {
    this.today = this.calendar.getToday();
  }
}
