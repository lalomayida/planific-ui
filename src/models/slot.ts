import { SlotTime } from './slotTime';

export class Slot {
  time: SlotTime;
  availability: Array<boolean>;

  constructor(__time: SlotTime, __availability: Array<boolean>) {
    this.time = __time;
    this.availability = __availability;
  }
}
