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
import { TestComponent } from './test/test.component';
import { AproposComponent } from './apropos/apropos.component';
import { NousContacterComponent } from './nous-contacter/nous-contacter.component';
import { ResultatsComponent } from './resultats/resultats.component';

import { ClassementComponent } from './classement/classement.component';
import { MeilleursButteursComponent } from './meilleurs-butteurs/meilleurs-butteurs.component';
import { MeilleursPasseursComponent } from './meilleurs-passeurs/meilleurs-passeurs.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { GestionMatchesComponent } from './gestion-matches/gestion-matches.component';

import { UpdatejoueurComponent } from './updatejoueur/updatejoueur.component';
import { UpdateterrainComponent } from './updateterrain/updateterrain.component';

import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';

const routes: Routes = [

  {path : "home", component : HomeComponent},
  {path : "reserver", component : ReserverComponent},
  {path : "planning", component : PlanningComponent},
  {path : "liste-terrains", component : ListeTerrainsComponent},
  {path : "liste-joueurs", component : ListeJoueursComponent},
  {path : "espace-tournois", component : EspaceTournoisComponent},
  {path : "inscription", component : InscriptionComponent},
  {path : "connexion", component : ConnexionComponent},
  {path : "carte-terrain/:id", component : CarteTerrainComponent},
  {path : "profil-joueur/:id", component : ProfilJoueurComponent},
  {path : "terms-and-conditions", component : TermsAndConditionsComponent},
  {path : "reglement-interieur", component : ReglementInterieurComponent},
  {path : "nous-contacter", component : NousContacterComponent},
  {path : "apropos", component : AproposComponent},
  {path : "resultats", component : ResultatsComponent},
  {path : "classement", component : ClassementComponent},
  {path : "meilleurs-butteurs", component : MeilleursButteursComponent},
  {path : "meilleurs-passeurs", component : MeilleursPasseursComponent},
  {path : "calendrier", component : CalendrierComponent},
  {path : "gestion-matches", component : GestionMatchesComponent},
  {path : "test", component : TestComponent},
  {path : "updatejoueur/:id", component : UpdatejoueurComponent},
  {path : "updateterrain/:id", component : UpdateterrainComponent},
  {path : "fullcalendar", component : FullcalendarComponent},
  {path : "" , redirectTo : "home" , pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
