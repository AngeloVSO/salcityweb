import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SalcityApiService } from 'src/app/api/salcity.api';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  title = 'salcity';
  filter = '';
  cards$!: Observable<Card[]>;

  constructor(private api: SalcityApiService) {}

  ngOnInit(): void {
    this.cards$ = this.api.getCards();
  }

  filterByCardName(event: any) {
    this.filter = event.target.value;
  }
}
