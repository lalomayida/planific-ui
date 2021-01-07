import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-timecard-header',
  templateUrl: './timecard-header.component.html',
  styleUrls: ['./timecard-header.component.css']
})
export class TimecardHeaderComponent implements OnInit {

  model: NgbDateStruct;
  today: NgbDateStruct;

  constructor(private calendar: NgbCalendar) { }

  ngOnInit(): void {
    this.today = this.calendar.getToday();

    if(this.model == null ){
      this.model = this.calendar.getToday();
    }    
    
  }
}
