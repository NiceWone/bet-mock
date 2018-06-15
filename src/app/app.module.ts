import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './group-stage/table.component';
import { GroupStageDetailsComponent } from './group-stage-details/group-stage-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    GroupStageDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
