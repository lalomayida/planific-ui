import { DailySlot } from './daily-slot';

export class DailyTimecardDetails {
  headers: Array<string>;
  data: Array<DailySlot>;

  constructor(__headers: Array<string>, __data: Array<DailySlot>) {
    this.headers = __headers;
    this.data = __data;
  }
}