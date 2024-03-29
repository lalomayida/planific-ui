import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { TimecardDetails } from 'src/app/models/timecardDetails';

@Component({
  selector: 'app-timecard-grid',
  templateUrl: './timecard-grid.component.html',
  styleUrls: ['./timecard-grid.component.css'],
})
export class TimecardGridComponent implements OnInit {

  @Input() details: TimecardDetails;
  @Input() id: string;

  @Output() onEdit: EventEmitter<any> = new EventEmitter();

  url: string;
  sampleArray: any = [];
  constructor(private render: Renderer2) { }

  ngOnInit(): void {
    this.url = "www.planific.io/create?id=" + this.id;
    
    for (let index = 0; index < this.details.headers.length; index++) {
      this.sampleArray.push(true) 
    }

    console.log(this.arraysEqual(this.details.data[0].availability, this.sampleArray))
  }

  arraysEqual(a, b) {
    if (a === b) return true;
    for (var i = a.length; i--;) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  trackByFn(index, treatment) {
    return index;
  }

  addColumn() {
    if (this.sampleArray.length < 7) {
      this.sampleArray.push(true)
      this.details.headers.push('Participante');
      this.details.data.forEach(slot => {
        slot.availability.push(false)
      });
      this.onEdit.emit(this.details);
    }
  }

  deleteColumn(columnId) {
    if (this.sampleArray.length > 2) {
      this.sampleArray.pop()
      this.details.headers.splice(columnId, 1);
      this.details.data.forEach(slot => {
        slot.availability.splice(columnId, 1)
      });
      this.onEdit.emit(this.details);
    }
  }

  selectCell(event) {
    var row = event.path[0].id;
    var column = event.path[0].cellIndex;
    this.details.data[row].availability[column - 1] = !this
      .details.data[row].availability[column - 1];
    this.onEdit.emit(this.details);
  }

  changeNames() {
    this.onEdit.emit(this.details);
  }

  copyUrl() {
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
