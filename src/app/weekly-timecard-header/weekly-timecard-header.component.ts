import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-weekly-timecard-header',
  templateUrl: './weekly-timecard-header.component.html',
  styleUrls: ['./weekly-timecard-header.component.css']
})
export class WeeklyTimecardHeaderComponent implements OnInit {

  @Input() title: string;
  @Input() date: NgbDateStruct;
  
  @Output() onEditTitle: EventEmitter<any> = new EventEmitter();
  @Output() onEditDate: EventEmitter<any> = new EventEmitter();

  today: NgbDateStruct;

  constructor(private calendar: NgbCalendar) {}

  ngOnInit(): void {
    this.today = this.calendar.getToday();
  }

  editTitle(){
    this.onEditTitle.emit(this.title);
  }

  editDate(){
    this.onEditDate.emit(this.date);
  }

}
