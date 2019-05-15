import {Route, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {ListTasksComponent} from './list-tasks/list-tasks.component';
import {TaskComponent} from './task/task.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {SignupComponent} from './signup/signup.component';
import {RouteGuardService} from './route-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
  { path: 'tasks/user/:username', component: ListTasksComponent, canActivate: [RouteGuardService]},
  { path: 'tasks/user/:username/:id', component: TaskComponent, canActivate: [RouteGuardService]},
  { path: 'welcome/:username', component: WelcomeComponent, canActivate: [RouteGuardService]},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
