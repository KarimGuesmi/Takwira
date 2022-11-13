import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-terrain',
  templateUrl: './carte-terrain.component.html',
  styleUrls: ['./carte-terrain.component.css']
})
export class CarteTerrainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imgProfile:any="../assets/images/ooredooAcademy.jpg";
  ooredoo1:any="../assets/images/ooredoo1.jpg";
  ooredoo2:any="../assets/images/ooredoo2.jpg";
  ooredoo3:any="../assets/images/ooredoo3.jpg";
  ooredoo4:any="../assets/images/ooredoo4.jpg";
}
