import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ReserverComponent } from './reserver/reserver.component';
import { PlanningComponent } from './planning/planning.component';
import { ListeTerrainsComponent } from './liste-terrains/liste-terrains.component';
import { ListeJoueursComponent } from './liste-joueurs/liste-joueurs.component';
import { EspaceTournoisComponent } from './espace-tournois/espace-tournois.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FooterComponent } from './footer/footer.component';
import { CarteTerrainComponent } from './carte-terrain/carte-terrain.component';
import { ProfilJoueurComponent } from './profil-joueur/profil-joueur.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { ReglementInterieurComponent } from './reglement-interieur/reglement-interieur.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ReserverComponent,
    PlanningComponent,
    ListeTerrainsComponent,
    ListeJoueursComponent,
    EspaceTournoisComponent,
    InscriptionComponent,
    ConnexionComponent,
    FooterComponent,
    CarteTerrainComponent,
    ProfilJoueurComponent,
    TermsAndConditionsComponent,
    ReglementInterieurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
