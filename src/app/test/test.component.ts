import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JoueurService } from '../services/joueurs.service';
import { Joueur } from './joueur';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  

  constructor() {
    }


  ngOnInit() {
    
  }


myPhoto:any="../assets/images/myPhoto.jpg";


  
}


