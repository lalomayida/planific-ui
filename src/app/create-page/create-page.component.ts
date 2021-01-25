import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { TimecardService } from 'src/services/timecard/timecard.service';

import { Timecard } from 'src/app/models/timecard';
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
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.model = this.calendar.getToday();
    this.setTimecard();
  }

  async setTimecard(): Promise<void>{
    if (this.activeRoute.snapshot.queryParams.id) {
      var timecardId = this.activeRoute.snapshot.queryParams.id;
      this.timecardService.getTimecard(timecardId).subscribe((result) => {
        var responseDate = new Date(result["date"]);
        this.model.day = responseDate.getDay();
        this.model.month = responseDate.getMonth();
        this.model.year = responseDate.getFullYear();
        result.date = this.model;
        this.timecardService = result
      },
        (error) => {
          console.log(error, "Mandar a pàgina 404");
        })
    } else {
      /*this.timecardService.createTimecard().subscribe(
        (result)=>{*/
        this.timecard = {
          id: 'result.id',
          date: this.model,
          title: 'My meeting title',
          details: {
            headers: [
              'Participant 1',
              'Participant 2',
              'Participant 3',
              'Participant 4',
            ],
            data: [
              {
                time: {
                  hour: '6:00',
                  meridian: 'am',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '6:30',
                  meridian: 'am',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '7:00',
                  meridian: 'am',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '7:30',
                  meridian: 'am',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '8:00',
                  meridian: 'am',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '8:30',
                  meridian: 'am',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '9:00',
                  meridian: 'am',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '9:30',
                  meridian: 'am',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '10:00',
                  meridian: 'am',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '10:30',
                  meridian: 'am',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '11:00',
                  meridian: 'am',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '11:30',
                  meridian: 'am',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '12:00',
                  meridian: 'pm',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '12:30',
                  meridian: 'pm',
                },
                availability: [true, true, true, true],
              },
  
              {
                time: {
                  hour: '1:00',
                  meridian: 'pm',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '1:30',
                  meridian: 'pm',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '2:00',
                  meridian: 'pm',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '2:30',
                  meridian: 'pm',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '3:00',
                  meridian: 'pm',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '3:30',
                  meridian: 'pm',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '4:00',
                  meridian: 'pm',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '4:30',
                  meridian: 'pm',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '5:00',
                  meridian: 'pm',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '5:30',
                  meridian: 'pm',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '6:00',
                  meridian: 'pm',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '6:30',
                  meridian: 'pm',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '7:00',
                  meridian: 'pm',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '7:30',
                  meridian: 'pm',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '8:00',
                  meridian: 'pm',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '8:30',
                  meridian: 'pm',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '9:00',
                  meridian: 'pm',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '9:30',
                  meridian: 'pm',
                },
                availability: [true, true, true, true],
              },
              {
                time: {
                  hour: '10:00',
                  meridian: 'pm',
                },
                availability: [true, true, true, true],
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
      /*},(error)=>{
        console.log(error,"Error when creating timecard, and redirect to main page")
      })     */
    }
  }

  updateTimecard(event){
    this.timecardService.updateTimecard(event)
  }
}
