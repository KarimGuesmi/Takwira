import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueurService } from '../services/joueurs.service';
import { Joueur } from './joueur';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit {
 
  joueurID: any;
  joueurData: any;

  constructor(private activatedRoute:ActivatedRoute ,private joueurService:JoueurService) { }


  ngOnInit() {
    this.joueurID = this.activatedRoute.snapshot.params['id'];
    this.loadJoueursDetails(this.joueurID);
  }

  loadJoueursDetails(joueurID:any){
    this.joueurService.getJoueurFromID(joueurID).subscribe(
      joueurdata=>{
        this.joueurData = joueurdata;
      }
    )
  }

myPhoto:any="../assets/images/myPhoto.jpg";


  
}


