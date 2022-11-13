import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReserverComponent } from './reserver/reserver.component';
import { PlanningComponent } from './planning/planning.component';
import { ListeTerrainsComponent } from './liste-terrains/liste-terrains.component';
import { ListeJoueursComponent } from './liste-joueurs/liste-joueurs.component';
import { EspaceTournoisComponent } from './espace-tournois/espace-tournois.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CarteTerrainComponent } from './carte-terrain/carte-terrain.component';
import { ProfilJoueurComponent } from './profil-joueur/profil-joueur.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { ReglementInterieurComponent } from './reglement-interieur/reglement-interieur.component';

const routes: Routes = [

  {path : "home", component : HomeComponent},
  {path : "reserver", component : ReserverComponent},
  {path : "planning", component : PlanningComponent},
  {path : "liste-terrains", component : ListeTerrainsComponent},
  {path : "liste-joueurs", component : ListeJoueursComponent},
  {path : "espace-tournois", component : EspaceTournoisComponent},
  {path : "inscription", component : InscriptionComponent},
  {path : "connexion", component : ConnexionComponent},
  {path : "carte-terrain", component : CarteTerrainComponent},
  {path : "profil-joueur", component : ProfilJoueurComponent},
  {path : "terms-and-conditions", component : TermsAndConditionsComponent},
  {path : "reglement-interieur", component : ReglementInterieurComponent},
  {path : "" , redirectTo : "home" , pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
