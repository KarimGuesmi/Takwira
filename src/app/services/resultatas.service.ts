import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Classement } from '../model/classement';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Resultats } from '../model/resultats';

@Injectable({providedIn:"root"})
export class ResultatsService{
    constructor(private http:HttpClient){

    }

    getAllResultats():Observable<Resultats[]>{
        let host=environment.host;
        return this.http.get<Resultats[]>(host+"/resultats");
    }

    saveResultat(resultat : Resultats):Observable<Resultats>{
        let host = environment.host;
        return this.http.post<Resultats>(host+"/resultats", resultat);
    }
}