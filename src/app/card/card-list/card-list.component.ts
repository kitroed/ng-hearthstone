import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MatPaginator } from '@angular/material';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { Card } from '../card';
import { CardListService } from './card-list.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements AfterViewInit {
  totalCardCount: number;
  displayedColumns = [
    'img',
    'name',
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

  dataSource = new CardsDataSource(this.cardListService);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private cardListService: CardListService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}

export class CardsDataSource extends MatTableDataSource<Card> {
  constructor(private cardListService: CardListService) {
    super();
    this.cardListService.getCardList().subscribe(d => { this.data = d; });
  }

  paginator: MatPaginator;

}
