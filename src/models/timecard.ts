import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { Slot } from "./slot";
import { TimecardDetails } from "./timecardDetails";

export class Timecard {
  id: string;
  title: string;
  date: NgbDateStruct;
  details: TimecardDetails;

  constructor(
    __id: string,
    __title: string,
    __date: NgbDateStruct,
    __details: TimecardDetails
  ){
      this.id = __id;
      this.title = __title;
      this.date = __date;
      this.details = __details;
  };
}
