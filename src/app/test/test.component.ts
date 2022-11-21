import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JoueurService } from '../services/joueurs.service';
import { Joueur } from './joueur';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit {
 
  joueurFormGroup?:FormGroup;
  

  constructor(private fb:FormBuilder, private joueursService:JoueurService) { }


  ngOnInit() {
      this.joueurFormGroup=this.fb.group({
      id:["",Validators.required],  
      nom:["",Validators.required],
      prenom:["",Validators.required],
      equipe:["",Validators.required],
      poste:["",Validators.required],
      ville:["",Validators.required],
    });
}

onSaveJoueur(){
  this.joueursService.save(this.joueurFormGroup?.value).subscribe(data=>{
    alert('sucess saving joueur');
  });
}


  
}


