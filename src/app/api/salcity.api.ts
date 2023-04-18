import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card';

@Injectable()
export class SalcityApiService {
  constructor(private http: HttpClient) {}

  getCards() {
    return this.http.get<Card[]>('https://salcity.vercel.app/cards');
  }

  getCardByName(cardName: string) {
    return this.http.get(`https://salcity.vercel.app/cards/${cardName}`);
  }
}
