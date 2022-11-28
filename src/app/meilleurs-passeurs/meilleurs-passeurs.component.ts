import { Component, OnInit } from '@angular/core';
import { Passeurs } from '../model/passeurs';
import { Observable } from 'rxjs';
import { PasseursService } from '../services/passeurs.service';

@Component({
  selector: 'app-meilleurs-passeurs',
  templateUrl: './meilleurs-passeurs.component.html',
  styleUrls: ['./meilleurs-passeurs.component.css']
})
export class MeilleursPasseursComponent implements OnInit {

  passeurs$:Observable<Passeurs[]>;
  constructor(private passeurService : PasseursService) { }

  ngOnInit(): void {
    this.passeurs$ = this.passeurService.getAllPasseurs();
    this.sort('passes');
    
  }
  key:string = 'passes';
  reverse :boolean =false;
  sort(key:string){
    this.key=key;
    this.reverse = !this.reverse;
  }

}
