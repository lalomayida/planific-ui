import { TimecardDetails } from "./timecardDetails";

export class Timecard {
  id: string;
  title: string;
  date: Object;
  details: TimecardDetails;

  constructor(
    __id: string,
    __title: string,
    __date: Object,
    __details: TimecardDetails
  ){
      this.id = __id;
      this.title = __title;
      this.date = __date;
      this.details = __details;
  };
}
