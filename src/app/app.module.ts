import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MdTableModule, MdToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CardListComponent } from './card/card-list/card-list.component';
import { CardListService } from './card/card-list/card-list.service';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MdTableModule,
    MdToolbarModule
  ],
  providers: [
    CardListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
