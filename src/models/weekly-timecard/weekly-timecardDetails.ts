import { WeeklySlot } from '../weekly-timecard/weekly-slot';

export class WeeklyTimecardDetails {
  headers: Array<string>;
  data: Array<WeeklySlot>;

  constructor(__headers: Array<string>, __data: Array<WeeklySlot>) {
    this.headers = __headers;
    this.data = __data;
  }
}