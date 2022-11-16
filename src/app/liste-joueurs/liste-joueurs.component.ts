import { Component, OnInit } from '@angular/core';
import joueursData from '../joueurs.json';  

interface Joueur {  
  code: String;  
  nom: String;  
  prenom: String;  
  equipe: String;  
  poste: String;  
  ville: String;  
}  

@Component({
  selector: 'app-liste-joueurs',
  templateUrl: './liste-joueurs.component.html',
  styleUrls: ['./liste-joueurs.component.css']
})
export class ListeJoueursComponent implements OnInit {
  itemsTerrains : string[];

  name = 'Angular';  
  joueurs: Joueur[] = joueursData;  

  constructor() { 
    this.itemsTerrains = ["code Joueur","nom","Prénom","Equipe","Poste","Ville","Action"];

  }

  ngOnInit(): void {
  }

}
