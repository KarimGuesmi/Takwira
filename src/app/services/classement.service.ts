import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Classement } from '../model/classement';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({providedIn:"root"})
export class ClassementService{
    constructor(private http:HttpClient){

    }

    getAllClassement():Observable<Classement[]>{
        let host=environment.host;
        return this.http.get<Classement[]>(host+"/classement");
    }
}