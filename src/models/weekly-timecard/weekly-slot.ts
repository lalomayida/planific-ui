import { SlotTime } from '../slotTime';

export class WeeklySlot {
  time: SlotTime;
  availability: Array<Array<any>>;

  constructor(__time: SlotTime, __availability: Array<Array<any>>) {
    this.time = __time;
    this.availability = __availability;
  }
}
