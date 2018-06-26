import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GroupComponent} from './group/group.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatchComponent} from './match/match.component';
import {GroupDetailsComponent} from './group-details/group-details.component';
import {PlayOffComponent} from './play-off/play-off.component';
import {EditComponent} from './edit/edit.component';
import {ListComponent} from './list/list.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'match/:id', component: MatchComponent, canActivate: [AuthGuard]},
  {path: 'group', component: GroupComponent, canActivate: [AuthGuard]},
  {path: 'play-off', component: PlayOffComponent, canActivate: [AuthGuard]},
  {path: 'group/:id', component: GroupDetailsComponent, canActivate: [AuthGuard]},
  {path: 'edit/match/:id', component: EditComponent, canActivate: [AuthGuard]},
  {path: 'edit/group/:id', component: EditComponent, canActivate: [AuthGuard]},
  {path: 'edit/team/:id', component: EditComponent, canActivate: [AuthGuard]},
  {path: 'edit/user/:id', component: EditComponent, canActivate: [AuthGuard]},
  {path: 'matches', component: ListComponent, canActivate: [AuthGuard]},
  {path: 'groups', component: ListComponent, canActivate: [AuthGuard]},
  {path: 'teams', component: ListComponent, canActivate: [AuthGuard]},
  {path: 'users', component: ListComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/dashboard'}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
