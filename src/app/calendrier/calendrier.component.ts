import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Matches } from '../model/matches';
import { MatchesService } from '../services/matches.service';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {

  matches$:Observable<Matches[]>;
  constructor(private matchesServices : MatchesService) { }

  ngOnInit(): void {
    this.matches$ = this.matchesServices.getAllMatches();
  }

}
