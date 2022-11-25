import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Matches } from '../model/matches';

@Injectable({providedIn:"root"})
export class MatchesService{
    constructor(private http:HttpClient){

    }

    getAllMatches():Observable<Matches[]>{
        let host=environment.host;
        return this.http.get<Matches[]>(host+"/matches");
    }
}