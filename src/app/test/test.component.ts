import { Component, OnInit } from '@angular/core';
import joueursData from '../joueurs.json';  
//import * as Data from "./joueurs.json"
//const data = require("module/path/joueurs.json");



interface Joueur {  
  code: String;  
  nom: String;  
  prenom: String;  
  equipe: String;  
  poste: String;  
  ville: String;  
}  

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit {
 
  name = 'Angular';  
  joueurs: Joueur[] = joueursData;  

  constructor() { }


  ngOnInit() {
   
}

  
}


