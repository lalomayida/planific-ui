import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { TimecardService } from 'src/services/timecard/timecard.service';
import { WeeklyTimecard } from '../../models/weekly-timecard/weekly-timecard';

@Component({
  selector: 'app-weekly-timecard-page',
  templateUrl: './weekly-timecard-page.component.html',
  styleUrls: ['./weekly-timecard-page.component.css']
})
export class WeeklyTimecardPageComponent implements OnInit {

  model: NgbDateStruct;
  timecard: Object;

  constructor(
    private calendar: NgbCalendar,
    private timecardService: TimecardService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.model = this.calendar.getToday();
    this.timecard = {
      "id": "12090f97-9f02-4ee0-ba62-874e5b02c4b7",
      "title": "Título",
      "date": [
        {
          "day": 12,
          "month": 2,
          "year": 2021
        },
        {
          "day": 13,
          "month": 2,
          "year": 2021
        }, {
          "day": 14,
          "month": 2,
          "year": 2021
        },
        {
          "day": 15,
          "month": 2,
          "year": 2021
        }
      ],
      "details": {
        "headers": ["Participante", "Participante", "Participante", "Participante"],
        "data": [
          {
            "availability": [
              [false,false, false, false], 
              [false,false, false, false], 
              [false,false, false, false], 
              [false,false, false, false]],
            "time": {
              "hour": "6:00",
              "meridian": "am"
            }
          },
          {
            "availability": [[false, false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "6:30",
              "meridian": "am"
            }
          },
          {
            "availability": [[false, false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "7:00",
              "meridian": "am"
            }
          },
          {
            "availability": [[false, false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "7:30",
              "meridian": "am"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "8:00",
              "meridian": "am"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "8:30",
              "meridian": "am"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "9:00",
              "meridian": "am"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "9:30",
              "meridian": "am"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "10:00",
              "meridian": "am"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "10:30",
              "meridian": "am"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "11:00",
              "meridian": "am"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "11:30",
              "meridian": "am"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "12:00",
              "meridian": "pm"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "12:30",
              "meridian": "pm"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "1:00",
              "meridian": "pm"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "1:30",
              "meridian": "pm"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "2:00",
              "meridian": "pm"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "2:30",
              "meridian": "pm"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "3:00",
              "meridian": "pm"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "3:30",
              "meridian": "pm"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "4:00",
              "meridian": "pm"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "4:30",
              "meridian": "pm"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "5:00",
              "meridian": "pm"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "5:30",
              "meridian": "pm"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "6:00",
              "meridian": "pm"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "6:30",
              "meridian": "pm"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "7:00",
              "meridian": "pm"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "7:30",
              "meridian": "pm"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "8:00",
              "meridian": "pm"
            }
          },
          {
            "availability": [[false,false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "8:30",
              "meridian": "pm"
            }
          },
          {
            "availability": [[false, false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "9:00",
              "meridian": "pm"
            }
          },
          {
            "availability": [[false, false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "9:30",
              "meridian": "pm"
            }
          },
          {
            "availability": [[false, false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "10:00",
              "meridian": "pm"
            }
          },
          {
            "availability": [[false, false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "10:30",
              "meridian": "pm"
            }
          },
          {
            "availability": [[false, false, false, false], [false, false, false, false], [false,false, false, false], [false,false, false, false]],
            "time": {
              "hour": "11:00",
              "meridian": "pm"
            }
          },
          {
            "availability": [[false, false, false, false], [false, false, false, false], [false,false, false, false], [false, false, false, false]],
            "time": {
              "hour": "11:30",
              "meridian": "pm"
            }
          }
        ]
      }
    };
  }

  async updateDate(event) {
    console.log(event)
    this.timecard["date"] = event;
    console.log(this.timecard)
    await this.timecardService.updateTimecard(this.timecard).subscribe((result) => {
      console.log(result)
    })
  }

  async updateTitle(event) {
    console.log(event)
    this.timecard["title"] = event;
    console.log(this.timecard)
    await this.timecardService.updateTimecard(this.timecard).subscribe((result) => {
      console.log(result)
    })
  }

  async updateTimecard(event) {
    console.log(event)
    console.log(this.timecard)
    await this.timecardService.updateTimecard(this.timecard).subscribe((result) => {
      console.log(result)
    })
  }
}