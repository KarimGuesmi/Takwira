
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Joueur } from '../model/joueurmodel';



@Injectable({providedIn:"root"})
export class JoueurService{
    constructor(private http:HttpClient){

    }

    getAllPlayers():Observable<Joueur[]>{
        let host=environment.host;
        return this.http.get<Joueur[]>(host+"/joueurs");
    
    }

    // added
   save(joueur:Joueur):Observable<Joueur>{
    let host = environment.host;
    return this.http.post<Joueur>(host+"/joueurs", joueur);
   }
}