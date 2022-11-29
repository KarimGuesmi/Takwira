import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ButteursService } from '../services/butteurs.service';
import { MatchesService } from '../services/matches.service';
import { PasseursService } from '../services/passeurs.service';
import { ResultatsService } from '../services/resultatas.service';

@Component({
  selector: 'app-gestion-matches',
  templateUrl: './gestion-matches.component.html',
  styleUrls: ['./gestion-matches.component.css']
})
export class GestionMatchesComponent implements OnInit {

  registerFormPasseur: FormGroup;
  registerFormButteur: FormGroup;
  registerFormResultat : FormGroup;
  registerFormMatche : FormGroup;

  constructor(private formBuilderPasseur: FormBuilder, private passeurService: PasseursService,
    private butteurService:ButteursService, private formBuilderButteur: FormBuilder,
    private resultatService:ResultatsService, private formBuilderResultat: FormBuilder,
    private matcheService:MatchesService, private formBuilderMatche: FormBuilder) { }

  ngOnInit(): void {
    this.registerFormPasseur = this.formBuilderPasseur.group({
      nom: [''],
      prenom: [''],
      passes: [''],
      mp: [''],
    })
    this.registerFormButteur = this.formBuilderButteur.group({
      nom: [''],
      prenom: [''],
      buts: [''],
      mp: [''],
    })
    this.registerFormResultat = this.formBuilderResultat.group({
      equipe1: [''],
      butsEquipe1: [''],
      equipe2: [''],
      butsEquipe2: [''],
    })
    this.registerFormMatche = this.formBuilderMatche.group({
      equipe1: [''],
      equipe2: [''],
      date: [''],
      heure: [''],
      terrain: [''],
    })
  }


  onSubmitPasseur(){
  
    this.passeurService.savePasseur(this.registerFormPasseur?.value).subscribe(data=>{
      alert('sucess saving passeur');
    });
  
  
    // Afficher les valeurs de remplissage après succés
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerFormPasseur.value, null, 4));
  }

  onSubmitButteur(){
    this.butteurService.saveButteur(this.registerFormButteur?.value).subscribe(data=>{
      alert('sucess saving butteur');
    });
  
  
    // Afficher les valeurs de remplissage après succés
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerFormButteur.value, null, 4));
  }
  
  onSubmitResultat(){
    this.resultatService.saveResultat(this.registerFormResultat?.value).subscribe(data=>{
      alert('sucess saving resultat');
    });
  
  
    // Afficher les valeurs de remplissage après succés
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerFormResultat.value, null, 4));
  }
  
  onSubmitMatche(){
    this.matcheService.saveMatche(this.registerFormMatche?.value).subscribe(data=>{
      alert('sucess saving matche');
    });
  
  
    // Afficher les valeurs de remplissage après succés
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerFormMatche.value, null, 4));
  }

}
