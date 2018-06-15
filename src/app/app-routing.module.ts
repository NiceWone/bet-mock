import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GroupComponent} from './group/group.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatchComponent} from './match/match.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'match/:id', component: MatchComponent},
  {path: 'group', component: GroupComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
