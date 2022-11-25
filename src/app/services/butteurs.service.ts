import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Butteurs } from '../model/butteurs';

@Injectable({providedIn:"root"})
export class ButteursService{
    constructor(private http:HttpClient){

    }

    getAllButteurs():Observable<Butteurs[]>{
        let host=environment.host;
        return this.http.get<Butteurs[]>(host+"/butteurs");
    }
}