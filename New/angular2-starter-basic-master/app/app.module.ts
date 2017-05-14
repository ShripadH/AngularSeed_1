import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { routing } from './app.router';
import { AppComponent } from './app.component';
import { ClientListComponent } from './clientList/clientList.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [BrowserModule, routing, HttpModule, InfiniteScrollModule],
  declarations: [AppComponent, ClientListComponent, DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }