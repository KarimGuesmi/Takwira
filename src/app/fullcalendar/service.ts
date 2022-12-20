import { Injectable } from '@angular/core';
​
export class Appointment {
  text: string;
​
  startDate: Date;
​
  endDate: Date;
​
  allDay?: boolean;
}
​
const appointments: Appointment[] = [
  {
    text: 'Juventus Academy',
    startDate: new Date('2022-12-26T17:00:00.000Z'),
    endDate: new Date('2022-12-26T18:00:00.000Z'),
  }, 
  {
    text: 'Oredo Academy',
    startDate: new Date('2022-12-27T19:00:00.000Z'),
    endDate: new Date('2022-12-27T20:00:00.000Z'),
  }
];
​
@Injectable()
export class Service {
  getAppointments(): Appointment[] {
    return appointments;
  }
}
​