import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SwipeComponent } from './swipe/swipe.component';
import { TeacherOverviewComponent } from './teacher-overview/teacher-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavComponent,
    LeaderboardComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    SwipeComponent,
    TeacherOverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
