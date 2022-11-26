import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material/sort';

export interface Dessert {
  name: string;
  age: number;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  players$: Dessert[] = [
    {name: 'karim', age: 4},
    {name: 'nizar', age: 17},
    {name: 'Mohsen', age: 10},
    {name: 'sami', age: 9},
    {name: 'fares', age: 44},
  ];

  sortedData: Dessert[];
  constructor() {
    this.sortedData = this.players$.slice();
    }

  ngOnInit() {
    this.sortData({active:'age', direction:'desc'});
  }

  sortData(sort: Sort) {
    const data = this.players$.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {

        case 'age':
          return compare(a.age, b.age, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}