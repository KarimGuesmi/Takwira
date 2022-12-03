import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private terrainsService: TerrainService, private router:Router) { 
   
    this.itemsTerrains = ["code terrain","nom du terrain","Responsable","Télephone","Cité","Ville","Action"];
    
  }

  ngOnInit(): void {
    this.terrains$=this.terrainsService.getAllStadiums();
  }
  onGetAllStadiums(){
    //Better version
    this.terrains$=this.terrainsService.getAllStadiums();
  }
 
  onDelete( id:any){
    this.terrainsService.deleteTerrain(id).subscribe(
      (data)=>{
      this.onGetAllStadiums();
    });
  }

  onSubmitUpdate(id : number){
    this.router.navigate(['/updateterrain',id]);
  }

}
