import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-joueur',
  templateUrl: './profil-joueur.component.html',
  styleUrls: ['./profil-joueur.component.css']
})
export class ProfilJoueurComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myPhoto:any="../assets/images/myPhoto.jpg";
}
