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

const routes: Routes = [

  {path : "home", component : HomeComponent},
  {path : "reserver", component : ReserverComponent},
  {path : "planning", component : PlanningComponent},
  {path : "liste-terrains", component : ListeTerrainsComponent},
  {path : "liste-joueurs", component : ListeJoueursComponent},
  {path : "espace-tournois", component : EspaceTournoisComponent},
  {path : "inscription", component : InscriptionComponent},
  {path : "connexion", component : ConnexionComponent},
  {path : "" , redirectTo : "home" , pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
