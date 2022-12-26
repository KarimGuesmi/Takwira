import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxSchedulerModule } from 'devextreme-angular';
import { Appointment, Service } from './service';



@Component({
  selector: 'app-fullcalendar',
  templateUrl: './fullcalendar.component.html',
  styleUrls: ['./fullcalendar.component.css'],
  providers: [Service],
})
export class FullcalendarComponent implements OnInit {

  appointmentsData: Appointment[];

  currentDate: Date = new Date(2022, 11, 31);

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [
      interactionPlugin,
      dayGridPlugin],
      editable: true, 
      selectable: true,
      weekends:true,
      events: [
        { title: 'Meeting', start: new Date() },
       
      ]
  };
  
  
  
  constructor(service: Service) {
    this.appointmentsData = service.getAppointments(); 
    
    //Adding new terrains in the planning
    /*this.appointmentsData.push({
      text: 'Juventus Academy',
      startDate: new Date('2022-12-28T19:00:00.000Z'),
      endDate: new Date('2022-12-28T20:00:00.000Z'),
    });
  */
  }
  


  ngOnInit(): void {
    
  }

}

/* Source code of the full calendar */
/* https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/BasicViews/Angular/Light/ */