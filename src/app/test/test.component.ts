import { Component, OnInit } from '@angular/core';


import { ApiService } from './api.service';
import { Person } from './person';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit {
 
  title = 'httpGet Example';
  people:Person[];
  person = new Person();
  constructor(private apiService:ApiService) { }


  ngOnInit() {
    this.refreshPeople()
}
refreshPeople() {
  this.apiService.getPeople()
    .subscribe(data => {
      console.log(data)
      this.people=data;
    })      

}
addPerson() {
  this.apiService.addPerson(this.person)
    .subscribe(data => {
      console.log(data)
      this.refreshPeople();
    })      
}

  
}


