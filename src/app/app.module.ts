import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {GroupComponent} from './group/group.component';
import {GroupDetailsComponent} from './group-details/group-details.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatchComponent} from './match/match.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PlayOffComponent} from './play-off/play-off.component';
import {EditComponent} from './edit/edit.component';
import {ListComponent} from './list/list.component';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {LOCALE_ID, NgModule} from '@angular/core';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    GroupDetailsComponent,
    DashboardComponent,
    MatchComponent,
    PlayOffComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'ru'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
