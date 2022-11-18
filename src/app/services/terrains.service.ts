
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Terrain } from '../model/terrainmodel';


@Injectable({providedIn:"root"})
export class TerrainService{
    constructor(private http:HttpClient){

    }

    getAllStadiums():Observable<Terrain[]>{
        let host=environment.host;
        return this.http.get<Terrain[]>(host+"/terrains");
    
    }
}