
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Reservation } from '../model/reservation';
import { Observable } from 'rxjs';

@Injectable({providedIn:"root"})
export class ReservationService{
    constructor(private http:HttpClient){

    }
   
    save(res:Reservation):Observable<Reservation>{
      let host = environment.host;
      return  this.http.post<Reservation>(host+"/reservation",res);

    }

}