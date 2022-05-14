import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { TeacherOverviewComponent } from './teacher-overview/teacher-overview.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'overview',
    component: TeacherOverviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
