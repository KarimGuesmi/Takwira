import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//import terrainData from '../terrains.json';
import { Terrain } from '../model/terrainmodel';
import { TerrainService } from '../services/terrains.service';


/*
interface Terrain {  
  code: String;  
  nom: String;  
  responsable: String;  
  telephone: String;  
  cite: String;  
  ville: String;  
}  
*/
@Component({
  selector: 'app-liste-terrains',
  templateUrl: './liste-terrains.component.html',
  styleUrls: ['./liste-terrains.component.css']
})


export class ListeTerrainsComponent implements OnInit {
  
  itemsTerrains : string[];
  //name = 'Angular';  
  //terrains: Terrain[] = terrainData;  

  /*
  terrain1 : string[];
  terrain2 : string[];
  terrain3 : string[];
  terrain4 : string[];
  terrain5 : string[];
  terrain6 : string[];
  terrain7 : string[];
  */

  terrains$:Observable<Terrain[]>;

  constructor(private terrainsService: TerrainService) { 
   
    this.itemsTerrains = ["code terrain","nom du terrain","Responsable","Télephone","Cité","Ville","Action"];
    /*
    this.terrain1=["101020","Wembley Academy","Moneem","25444888","Bhar Lazreg","La marsa"];
    this.terrain2=["101021","Mouihbi Academy","Akrem","24556669","Rolley","La marsa"];
    this.terrain3=["101022","Ooredoo Academy","Nizar","95668771","Lac 1","La marsa"];
    this.terrain4=["101023","San Siro Academy","Fares","21889660","Lac 1","La marsa"];
    this.terrain5=["101024","Golden Ball Academy","Mourad","23658761","Ain Zaghane","La marsa"];
    this.terrain6=["101025","Juventus Academy","Ahmed","20369852","Menzah 1","Ariana"];
    this.terrain7=["101026","Soccer 6","Samir","29658741","Cité Hlel","Ariana"];
    */
  }

  ngOnInit(): void {
    this.terrains$=this.terrainsService.getAllStadiums();
  }
  onGetAllStadiums(){
    //Better version
    this.terrains$=this.terrainsService.getAllStadiums();
  }
}
