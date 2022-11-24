import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TerrainService } from '../services/terrains.service';

@Component({
  selector: 'app-carte-terrain',
  templateUrl: './carte-terrain.component.html',
  styleUrls: ['./carte-terrain.component.css']
})
export class CarteTerrainComponent implements OnInit {

 
  terrainID: any;
  terrainData: any;


  constructor(private activatedRoute:ActivatedRoute ,private terrainService:TerrainService) { }

  ngOnInit(): void {
    this.terrainID = this.activatedRoute.snapshot.params['id'];
    this.loadTerrainDetails(this.terrainID);

  }

  loadTerrainDetails(terrainID:any){
    this.terrainService.getTerrainFromID(terrainID).subscribe(
      terraindata=>{
        this.terrainData = terraindata;
      }
    )
  }

  imgProfile:any="../assets/images/ooredooAcademy.jpg";
  ooredoo1:any="../assets/images/ooredoo1.jpg";
  ooredoo2:any="../assets/images/ooredoo2.jpg";
  ooredoo3:any="../assets/images/ooredoo3.jpg";
  ooredoo4:any="../assets/images/ooredoo4.jpg";
}
