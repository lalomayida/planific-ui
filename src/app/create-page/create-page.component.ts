import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

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
