import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SalcityApiService } from './api/salcity.api';
import { Card } from './models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SalcityApiService],
})
export class AppComponent implements OnInit {
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
