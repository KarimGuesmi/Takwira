import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joueur } from './joueur';
 
@Injectable({providedIn:'root'})
export class ApiService {
 
  baseURL: string = "http://localhost:3000/";
 
  constructor(private http: HttpClient) {
  }
 
  getJoueur(): Observable<Joueur[]> {
    console.log('getJoueur'+this.baseURL + 'joueurs')
    return this.http.get<Joueur[]>(this.baseURL + 'joueurs')
  }

  //IS ADDED
  addJoueur(joueur:Joueur): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(joueur);
    console.log(body)
    return this.http.post(this.baseURL + 'joueurs', body,{'headers':headers})
  }
 
}