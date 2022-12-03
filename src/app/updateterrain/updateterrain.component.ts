import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Terrain } from '../model/terrainmodel';
import { TerrainService } from '../services/terrains.service';
import { Joueur } from '../test/joueur';

@Component({
  selector: 'app-updateterrain',
  templateUrl: './updateterrain.component.html',
  styleUrls: ['./updateterrain.component.css']
})
export class UpdateterrainComponent implements OnInit {

  
  id:number;
  formUpdate : FormGroup;

  constructor(private route:ActivatedRoute , private terrainservice:TerrainService, 
    private fb:FormBuilder, private router:Router) { 

    this.route.params.subscribe(
      (param)=>{
        this.id = param['id'];
        this.terrainservice.getTerrainFromID(this.id).subscribe(
          (terrain)=>{
            this.formUpdate.controls["nom"].setValue(terrain.nom);
            this.formUpdate.controls["responsable"].setValue(terrain.responsable);
            this.formUpdate.controls["telephone"].setValue(terrain.telephone);
            this.formUpdate.controls["cite"].setValue(terrain.cite);
            this.formUpdate.controls["ville"].setValue(terrain.ville);          
          }
        );
      }
    )
  }



  ngOnInit(): void {
    this.formUpdate = this.fb.group(
      {    
        "nom" : [""],
        "responsable" : [""],
        "telephone" : [""],    
        "cite" : [""],        
        "ville" : [""],        
      }
    )
  }

  onSubmitUpdate(id : number){
    var tr:Terrain = new Terrain();
    
    tr.nom = this.formUpdate.controls['nom'].value;
    tr.responsable = this.formUpdate.controls['responsable'].value;
    tr.telephone = this.formUpdate.controls['telephone'].value;
    tr.cite = this.formUpdate.controls['cite'].value;    
    tr.ville = this.formUpdate.controls['ville'].value;
    
    this.terrainservice.onUpdateTerrain(id,tr).subscribe(
      (tr)=>{
        this.router.navigate(['/liste-terrains']);
      }
    );
  }

}
