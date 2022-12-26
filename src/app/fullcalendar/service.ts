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
    startDate: new Date('2022-12-26'+'T'+'17:00'+':00.000Z'),
    endDate: new Date('2022-12-26'+'T'+'18:00'+':00.000Z'),
  }, 
  {
    text: 'Ooredoo Academy',
    startDate: new Date('2022-12-27'+'T'+'19:00'+':00.000Z'),
    endDate: new Date('2022-12-27'+'T'+'20:00'+':00.000Z'),
  },
  {
    text: 'Wembley',
    startDate: new Date('2022-12-29'+'T'+'19:00'+':00.000Z'),
    endDate: new Date('2022-12-29'+'T'+'20:00'+':00.000Z'),
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