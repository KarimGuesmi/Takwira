import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Resultats } from '../model/resultats';

import { ResultatsService } from '../services/resultatas.service';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {

  resultats$:Observable<Resultats[]>;
  constructor(private resultatsServices : ResultatsService) { }

  ngOnInit(): void {
    this.resultats$ = this.resultatsServices.getAllResultats();
  }

}
