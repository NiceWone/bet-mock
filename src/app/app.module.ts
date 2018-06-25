import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {GroupComponent} from './group/group.component';
import {GroupDetailsComponent} from './group-details/group-details.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatchComponent} from './match/match.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {PlayOffComponent} from './play-off/play-off.component';
import {EditComponent} from './edit/edit.component';
import {ListComponent} from './list/list.component';
import {registerLocaleData} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import localeRu from '@angular/common/locales/ru';
import {LOCALE_ID, NgModule} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {LoginComponent} from './login/login.component';
import {ListUserComponent} from './list-user/list-user.component';
import {AuthGuard} from './auth.guard';
import {AuthInterceptor} from './http-interceptors/auth-interceptor';

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
    ListComponent,
    LoginComponent,
    ListUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  providers: [
    AuthGuard,
    {provide: LOCALE_ID, useValue: 'ru'},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
