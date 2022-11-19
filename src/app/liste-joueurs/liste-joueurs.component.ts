import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//import joueursData from '../joueurs.json';  
import { Joueur } from '../model/joueurmodel';
import { JoueurService } from '../services/joueurs.service';

/*interface Joueur {  
  code: String;  
  nom: String;  
  prenom: String;  
  equipe: String;  
  poste: String;  
  ville: String;  
} */ 

@Component({
  selector: 'app-liste-joueurs',
  templateUrl: './liste-joueurs.component.html',
  styleUrls: ['./liste-joueurs.component.css']
})
export class ListeJoueursComponent implements OnInit {
  itemsJoueurs : string[];

  //name = 'Angular';  
  //joueurs: Joueur[] = joueursData;  

  joueurs$:Observable<Joueur[]>;
  
  constructor(private joueursService: JoueurService) { 
    this.itemsJoueurs = ["id","Equipe","nom","Prénom","Poste","age","telephone","cite","code","Ville","email","password","Action"];

  }


  ngOnInit(): void {
  }

  onGetAllPlayers(){
    //Better version
    this.joueurs$=this.joueursService.getAllPlayers();
  }

}
