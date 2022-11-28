import { Component, OnInit } from '@angular/core';
import { Butteurs } from '../model/butteurs';
import { Observable } from 'rxjs';
import { ButteursService } from '../services/butteurs.service';

@Component({
  selector: 'app-meilleurs-butteurs',
  templateUrl: './meilleurs-butteurs.component.html',
  styleUrls: ['./meilleurs-butteurs.component.css']
})
export class MeilleursButteursComponent implements OnInit {

  butteurs$:Observable<Butteurs[]>;
  
  constructor(private butteursService: ButteursService ) { }

  ngOnInit(): void {
    this.butteurs$ = this.butteursService.getAllButteurs();
    this.sort('buts');
  }

  key:string = 'buts';
  reverse :boolean =false;
  sort(key:string){
    this.key=key;
    this.reverse = !this.reverse;
  }

}
