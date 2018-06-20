import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GroupComponent} from './group/group.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatchComponent} from './match/match.component';
import {GroupDetailsComponent} from './group-details/group-details.component';
import {PlayOffComponent} from './play-off/play-off.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'match/:id', component: MatchComponent},
  {path: 'group', component: GroupComponent},
  {path: 'play-off', component: PlayOffComponent},
  {path: 'group/:id', component: GroupDetailsComponent},
  {path: 'edit/match/:id', component: EditComponent},
  {path: 'edit/group/:id', component: EditComponent},
  {path: 'edit/team/:id', component: EditComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
