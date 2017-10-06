import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';

import { Card } from '../card';

@Injectable()
export class CardListService {

  constructor(private http: HttpClient) { }

  getCardList(): Observable<Card[]> {
    // make the HTTP request:
    return this.http.get<Card[]>('https://api.hearthstonejson.com/v1/latest/enUS/cards.collectible.json');
  }
}
