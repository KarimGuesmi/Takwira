import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Passeurs } from '../model/passeurs';

@Injectable({providedIn:"root"})
export class PasseursService{
    constructor(private http:HttpClient){

    }

    getAllPasseurs():Observable<Passeurs[]>{
        let host=environment.host;
        return this.http.get<Passeurs[]>(host+"/passeurs");
    }

    savePasseur(passeur : Passeurs):Observable<Passeurs>{
        let host = environment.host;
        return this.http.post<Passeurs>(host+"/passeurs", passeur);
    }
}