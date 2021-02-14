import { WeeklyTimecardDetails } from "./weekly-timecardDetails";

export class WeeklyTimecard {
  id: string;
  title: string;
  date: Array<Object>;
  details: WeeklyTimecardDetails;

  constructor(
    __id: string,
    __title: string,
    __date: Array<Object>,
    __details: WeeklyTimecardDetails
  ){
      this.id = __id;
      this.title = __title;
      this.date = __date;
      this.details = __details;
  };
}