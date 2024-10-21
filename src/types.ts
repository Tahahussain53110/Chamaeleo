export interface IEvent {
  eventName: string;
  eventType: string;
  startDate: string;
  location: string;
  manager: string;
  website: string;
  totalParticipants: string;
  day1: [string];
  day2: [string];
  image: string;
}

export interface IEventsContext {
  event: IEvent;
}
