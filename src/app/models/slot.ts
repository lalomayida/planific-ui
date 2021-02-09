import { SlotTime } from './slotTime';

export class Slot {
  time: SlotTime;
  availability: Array<any>;

  constructor(__time: SlotTime, __availability: Array<any>) {
    this.time = __time;
    this.availability = __availability;
  }
}
