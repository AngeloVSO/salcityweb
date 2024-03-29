import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card } from '../models/card';
import { EMPTY, catchError } from 'rxjs';

@Injectable()
export class SalcityApiService {
  constructor(private http: HttpClient) {}

  getCards() {
    return this.http.get<Card[]>('https://salcity.vercel.app/cards');
  }

  getCardByName(cardName: string) {
    return this.http.get(`https://salcity.vercel.app/cards/${cardName}`);
  }

  login(body: { username: string; password: string }) {
    return this.http
      .post('https://salcity.vercel.app/auth/login', body, {
        observe: 'response',
      })
      .pipe(
        catchError((error) => {
          if (error) {
            alert(error.error.error);
            return EMPTY;
          }

          throw error;
        })
      );
  }

  addCard(body: { name: string; imageUrl: string }) {
    const token = localStorage.getItem('salcity_token');

    const header = new HttpHeaders().set('authorization', `bearer ${token}`);

    return this.http
      .post('https://salcity.vercel.app/cards', body, {
        headers: header,
      })
      .pipe(
        catchError((error) => {
          if (error.error.error == 'Token inválido') {
            alert('Usuário não autorizado a adicionar carta.');
            return EMPTY;
          }

          throw error;
        })
      );
  }
}
