export class Trip {
  place: string;
  startDate: Date;
  endDate: Date;
  tripDescription: string;
  cost: number;
  availableSpots: number;
  attendees: [string];

  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }
}
