import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GroupComponent } from './group/group.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatchComponent } from './match/match.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    GroupDetailsComponent,
    DashboardComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
