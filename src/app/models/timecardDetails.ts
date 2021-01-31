import { Slot } from './slot';

export class TimecardDetails {
  headers: Array<string>;
  data: Array<Slot>;

  constructor(__headers: Array<string>, __data: Array<Slot>) {
    this.headers = __headers;
    this.data = __data;
  }
}
