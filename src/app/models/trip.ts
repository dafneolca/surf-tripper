export class Trip {
  place: string;
  startDate: Date;
  endDate: Date;
  cost: number;
  availableSpots: number;

  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }
}
