import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeeklyTimecardDetails } from 'src/models/weekly-timecard/weekly-timecardDetails';

@Component({
  selector: 'app-weekly-timecard-grid',
  templateUrl: './weekly-timecard-grid.component.html',
  styleUrls: ['./weekly-timecard-grid.component.css']
})
export class WeeklyTimecardGridComponent implements OnInit {

  @Input() details: WeeklyTimecardDetails;
  @Input() date: Array<Object>;
  @Input() id: string;

  @Output() onEdit: EventEmitter<any> = new EventEmitter();

  url: string;
  sampleArray: any = [];

  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < this.details.headers.length; index++) {
      this.sampleArray.push(true)
    }
  }


  trackByFn(index, treatment) {
    return index;
  }

  getMonthName(monthNumber) {
    switch (monthNumber) {
      case 1:
        return 'Enero'
        break;
      case 2:
        return 'Febrero'
        break;
      case 3:
        return 'Marzo'
        break;
      case 4:
        return 'Abril'
        break;
      case 5:
        return 'Mayo'
        break;
      case 6:
        return 'Junio'
        break;
      case 7:
        return 'Julio'
        break;
      case 8:
        return 'Agosto'
        break;
      case 9:
        return 'Septiembre'
        break;
      case 10:
        return 'Octubre'
        break;
      case 11:
        return 'Noviembre'
        break;
      case 12:
        return 'Diciembre'
        break;
      default:
        return monthNumber
    }
  }

  selectCell(day,row,column) {
    this.details.data[row].availability[day][column] = !this.details.data[row].availability[day][column];
    //this.onEdit.emit(this.details);
  }

  addColumn() {
    if (this.sampleArray.length < 7) {
      this.sampleArray.push(true)
      this.details.headers.push('Participante');
      this.details.data.forEach(slot => {
        slot.availability.forEach(dayAvailability => {
          dayAvailability.push(false)
          //this.onEdit.emit(this.details);
        })
      });
      
    }
  }

  deleteColumn(columnId) {
    if (this.sampleArray.length > 2) {
      this.sampleArray.pop()
      this.details.headers.splice(columnId, 1);
      this.details.data.forEach(slot => {
        slot.availability.forEach(dayAvailability => {
          dayAvailability.splice(columnId, 1)
          //this.onEdit.emit(this.details);
        })
      });
      
    }
  }

  changeNames() {
    this.onEdit.emit(this.details);
  }

  arraysEqual(a, b) {
    if (a === b) return true;
    for (var i = a.length; i--;) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
}
