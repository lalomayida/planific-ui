import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { isBuffer } from 'util';

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

  hoveredDate: NgbDate | null = null;

  today: NgbDate | null;
  upperLimitDate: NgbDate | null;
  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.today = calendar.getToday();
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 5);
  }

  onDateSelection(date: NgbDate) {

    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
      this.upperLimitDate = this.calendar.getNext(this.fromDate, 'd', 5);
      if (new Date(this.toDate.year, this.toDate.month - 1, this.toDate.day) > new Date(this.upperLimitDate.year, this.upperLimitDate.month - 1, this.upperLimitDate.day)) {
        console.log("Selecciona un rango de fechas menor a 5 días");
        this.toDate = null;
      }
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

  ngOnInit(): void {
  }

  editTitle() {
    //this.onEditTitle.emit(this.title);
  }

  editDate() {
    //this.onEditDate.emit(this.date);
  }

}
