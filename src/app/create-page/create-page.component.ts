import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { TimecardService } from 'src/services/timecard/timecard.service';

import { Timecard } from 'src/app/models/timecard';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css'],
})
export class CreatePageComponent implements OnInit {
  model: NgbDateStruct;
  timecard: Timecard = new Timecard(undefined, undefined, undefined, undefined);

  constructor(private calendar: NgbCalendar,
    private timecardService: TimecardService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.model = this.calendar.getToday();
    await this.setTimecard();
  }

  setTimecard() {
    if (this.activeRoute.snapshot.queryParams.id) {
      var timecardId = this.activeRoute.snapshot.queryParams.id;
      this.timecardService.getTimecard(timecardId).subscribe(
        (result) => {
          if (result.id) {
            console.log(result)
            this.model.day = Number(result.date.day);
            this.model.month = Number(result.date.month);
            this.model.year = Number(result.date.year);
            result.date = this.model;
            this.timecard = result;
          } else {
            this.router.navigate(['/error']);
          }
        },
        (error) => {
          this.router.navigate(['/error']);
        }
      )
    } else {
      this.timecardService.createTimecard().subscribe(
        (result) => {
          this.timecard = {
            id: result.id,
            date: this.model,
            title: 'Mi reunión',
            details: {
              headers: [
                'Participante 1',
                'Participante 2',
                'Participante 3',
                'Participante 4',
              ],
              data: [
                {
                  time: {
                    hour: '6:00',
                    meridian: 'am',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '6:30',
                    meridian: 'am',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '7:00',
                    meridian: 'am',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '7:30',
                    meridian: 'am',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '8:00',
                    meridian: 'am',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '8:30',
                    meridian: 'am',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '9:00',
                    meridian: 'am',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '9:30',
                    meridian: 'am',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '10:00',
                    meridian: 'am',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '10:30',
                    meridian: 'am',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '11:00',
                    meridian: 'am',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '11:30',
                    meridian: 'am',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '12:00',
                    meridian: 'pm',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '12:30',
                    meridian: 'pm',
                  },
                  availability: [false, false, false, false],
                },

                {
                  time: {
                    hour: '1:00',
                    meridian: 'pm',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '1:30',
                    meridian: 'pm',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '2:00',
                    meridian: 'pm',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '2:30',
                    meridian: 'pm',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '3:00',
                    meridian: 'pm',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '3:30',
                    meridian: 'pm',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '4:00',
                    meridian: 'pm',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '4:30',
                    meridian: 'pm',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '5:00',
                    meridian: 'pm',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '5:30',
                    meridian: 'pm',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '6:00',
                    meridian: 'pm',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '6:30',
                    meridian: 'pm',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '7:00',
                    meridian: 'pm',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '7:30',
                    meridian: 'pm',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '8:00',
                    meridian: 'pm',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '8:30',
                    meridian: 'pm',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '9:00',
                    meridian: 'pm',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '9:30',
                    meridian: 'pm',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '10:00',
                    meridian: 'pm',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '10:30',
                    meridian: 'pm',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '11:00',
                    meridian: 'pm',
                  },
                  availability: [false, false, false, false],
                },
                {
                  time: {
                    hour: '11:30',
                    meridian: 'pm',
                  },
                  availability: [false, false, false, false],
                },
              ],
            },
          };
        }, (error) => {
          console.log(error, "Error when creating timecard, and redirect to main page")
        })
    }
  }

  async updateDate(event) {
    console.log(event)
    this.timecard.date = event;
    console.log(this.timecard)
    await this.timecardService.updateTimecard(this.timecard).subscribe((result) => {
      console.log(result)
    })
  }

  async updateTitle(event) {
    console.log(event)
    this.timecard.title = event;
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
