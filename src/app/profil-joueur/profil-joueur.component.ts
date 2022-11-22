import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { JoueurService } from '../services/joueurs.service';
import { Joueur } from '../test/joueur';

@Component({
  selector: 'app-profil-joueur',
  templateUrl: './profil-joueur.component.html',
  styleUrls: ['./profil-joueur.component.css']
})
export class ProfilJoueurComponent implements OnInit {
  
  joueurID: any;
  joueurData: any;

  constructor(private activatedRoute:ActivatedRoute ,private joueurService:JoueurService) { }

  ngOnInit(): void {
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
