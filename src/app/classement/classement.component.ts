import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classement } from '../model/classement';
import { ClassementService } from '../services/classement.service';
import { Observable } from 'rxjs';
import {Sort} from '@angular/material/sort';


@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {
  
  classement$:Observable<Classement[]>;

  constructor(private classementService: ClassementService) {
    
    
   }

  ngOnInit(): void {
    this.classement$=this.classementService.getAllClassement();
    
    this.sort('pts');
    
  }
  key:string = 'pts';
  reverse :boolean =false;
  sort(key:string){
    this.key=key;
    this.reverse = !this.reverse;
  }
 
}