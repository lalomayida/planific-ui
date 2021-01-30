import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { TimecardDetails } from 'src/app/models/timecardDetails';

@Component({
  selector: 'app-timecard-grid',
  templateUrl: './timecard-grid.component.html',
  styleUrls: ['./timecard-grid.component.css'],
})
export class TimecardGridComponent implements OnInit {
  
  @Input() details:TimecardDetails;
  @Input() id:string;
  @Output() onEdit: EventEmitter<any> = new EventEmitter();

  url:string;

  constructor(private render: Renderer2) {}

  ngOnInit(): void {
    this.url = "https://planific.io/create?="+this.id;
    console.log(this.details)
  }

  trackByFn(index, treatment) {
    return index;
  }

  selectCell(event) {
    var row = event.path[0].id;
    var column = event.path[0].cellIndex;
    this.details.data[row].availability[column - 1] = !this
      .details.data[row].availability[column - 1];
    this.onEdit.emit(this.details);
  }

  copyUrl(){
    let selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = this.url;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
    }

}
