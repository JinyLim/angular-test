
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjGridFilterModule } from 'wijmo/wijmo.angular2.grid.filter';
import { WjGridDetailModule } from 'wijmo/wijmo.angular2.grid.detail';

@NgModule({
  imports:      [ BrowserModule, 
      FormsModule ,   
      WjGridModule,
        WjGridDetailModule,
        WjGridFilterModule],
  declarations: [ AppComponent ],
  exports: [ WjGridModule,
        WjGridDetailModule,
        WjGridFilterModule],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
