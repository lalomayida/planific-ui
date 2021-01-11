import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-timecard-grid',
  templateUrl: './timecard-grid.component.html',
  styleUrls: ['./timecard-grid.component.css'],
})
export class TimecardGridComponent implements OnInit {
  timecardInformation;

  constructor(private render: Renderer2) {}

  ngOnInit(): void {
    this.timecardInformation = {
      headers: [
        'Claudia Johnson',
        'John Doe',
        'Daniela Burke',
        'Tammy Williams',
      ],
      data: [
        {
          time: {
            hour: '0:00',
            meridian: 'am',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '0:30',
            meridian: 'am',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '1:00',
            meridian: 'am',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '1:30',
            meridian: 'am',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '2:00',
            meridian: 'am',
          },
          availability: [true, false, false, true],
        },
        {
          time: {
            hour: '2:30',
            meridian: 'am',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '3:00',
            meridian: 'am',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '3:30',
            meridian: 'am',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '4:00',
            meridian: 'am',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '4:30',
            meridian: 'am',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '5:00',
            meridian: 'am',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '5:30',
            meridian: 'am',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '6:00',
            meridian: 'am',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '6:30',
            meridian: 'am',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '7:00',
            meridian: 'am',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '7:30',
            meridian: 'am',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '8:00',
            meridian: 'am',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '8:30',
            meridian: 'am',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '9:00',
            meridian: 'am',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '9:30',
            meridian: 'am',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '10:00',
            meridian: 'am',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '10:30',
            meridian: 'am',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '11:00',
            meridian: 'am',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '11:30',
            meridian: 'am',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '12:00',
            meridian: 'pm',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '12:30',
            meridian: 'pm',
          },
          availability: [true, true, false, true],
        },

        {
          time: {
            hour: '1:00',
            meridian: 'pm',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '1:30',
            meridian: 'pm',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '2:00',
            meridian: 'pm',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '2:30',
            meridian: 'pm',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '3:00',
            meridian: 'pm',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '3:30',
            meridian: 'pm',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '4:00',
            meridian: 'pm',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '4:30',
            meridian: 'pm',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '5:00',
            meridian: 'pm',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '5:30',
            meridian: 'pm',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '6:00',
            meridian: 'pm',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '6:30',
            meridian: 'pm',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '7:00',
            meridian: 'pm',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '7:30',
            meridian: 'pm',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '8:00',
            meridian: 'pm',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '8:30',
            meridian: 'pm',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '9:00',
            meridian: 'pm',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '9:30',
            meridian: 'pm',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '10:00',
            meridian: 'pm',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '10:30',
            meridian: 'pm',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '11:00',
            meridian: 'pm',
          },
          availability: [true, true, false, true],
        },
        {
          time: {
            hour: '11:30',
            meridian: 'pm',
          },
          availability: [true, true, false, true],
        },
      ],
    };
  }

  selectCell(event) {
    console.log(event);
    if (event.srcElement.className.includes('busy')) {
      this.render.removeClass(event.target, 'busy');
      this.render.addClass(event.target, 'available');
    } else {
      this.render.removeClass(event.target, 'available');
      this.render.addClass(event.target, 'busy');
    }
  }
}
