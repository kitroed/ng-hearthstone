import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';

// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { MdTable } from '@angular/material';

import { Card } from '../card';
import { CardListService } from './card-list.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  displayedColumns = ['name',
    'id',
    // 'dbfId',
    'text',
    // 'flavor',
    // 'artist',
    // 'attack',
    // 'cardClass',
    // 'cost',
    // 'elite',
    // 'faction',
    // 'health',
    // 'mechanics',
    // 'rarity',
    'set'
    // 'type'
  ];
  dataSource: CardsDataSource;

  constructor(private cardListService: CardListService) { }


  ngOnInit() {
    this.dataSource = new CardsDataSource(this.cardListService);
  }
}

export class CardsDataSource extends DataSource<Card> {
  constructor(private cardListService: CardListService) {
    super();
  }

  connect(): Observable<Card[]> {
    console.log('connect');
    return this.cardListService.getCardList();
  }

  disconnect() { }

}
