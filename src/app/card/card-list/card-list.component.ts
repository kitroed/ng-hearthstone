import { Component, OnInit, ViewChild} from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { MdTable } from '@angular/material';
import { MdPaginator } from '@angular/material';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

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

  @ViewChild(MdPaginator) paginator: MdPaginator;

  constructor(private cardListService: CardListService) { }


  ngOnInit() {
    this.dataSource = new CardsDataSource(this.cardListService, this.paginator);
  }
}

export class CardsDataSource extends DataSource<Card> {
  constructor(private _cardListService: CardListService, private _paginator: MdPaginator) {
    super();
  }

  private allCards: Card[];
  // public cardCount: number;

  // The connect function is called by the table to get on stream (Observable) containing the data to render
  connect(): Observable<Card[]> {
    const displayDataChanges = [this._paginator.page];
    console.log('connect');


    this._cardListService.getCardList().subscribe(d => { this.allCards = d; });

    // this.cardCount = this.allCards.length;

    return Observable.merge(...displayDataChanges).map(() => {
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return this.allCards.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() { }

}
