import { DailyTimecardDetails } from "./daily-timecardDetails";

export class DailyTimecard {
  id: string;
  title: string;
  date: Object;
  details: DailyTimecardDetails;

  constructor(
    __id: string,
    __title: string,
    __date: Object,
    __details: DailyTimecardDetails
  ){
      this.id = __id;
      this.title = __title;
      this.date = __date;
      this.details = __details;
  };
}