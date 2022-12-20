import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FullCalendarModule } from '@fullcalendar/angular';

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
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AproposComponent } from './apropos/apropos.component';
import { NousContacterComponent } from './nous-contacter/nous-contacter.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { ResultatsComponent } from './resultats/resultats.component';
import { ClassementComponent } from './classement/classement.component';
import { MeilleursButteursComponent } from './meilleurs-butteurs/meilleurs-butteurs.component';
import { MeilleursPasseursComponent } from './meilleurs-passeurs/meilleurs-passeurs.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { GestionMatchesComponent } from './gestion-matches/gestion-matches.component';
import { UpdatejoueurComponent } from './updatejoueur/updatejoueur.component';
import { OrderModule } from 'ngx-order-pipe';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from "@angular/material/table";
import { UpdateterrainComponent } from './updateterrain/updateterrain.component';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { DxSchedulerModule } from 'devextreme-angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
​


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
    ReglementInterieurComponent,
    TestComponent,
    AproposComponent,
    NousContacterComponent,
    SidenavbarComponent,
    ResultatsComponent,
    ClassementComponent,
    MeilleursButteursComponent,
    MeilleursPasseursComponent,
    CalendrierComponent,
    GestionMatchesComponent,
    UpdatejoueurComponent,
    UpdateterrainComponent,
    FullcalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    MatSortModule,
    MatTableModule,
    FullCalendarModule ,
    DxSchedulerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
​