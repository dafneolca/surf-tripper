import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './guards/auth.guard';
import { AnonGuard } from './guards/anon.guard';

// Services
import { TripService } from './services/trip.service';

import { AppComponent } from './app.component';

// Pages
import { AuthComponent } from './pages/auth/auth.component';
import { CreateComponent } from './pages/trip/create/create.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DetailComponent } from './pages/trip/detail/detail.component';
import { TripsComponent } from './pages/trips/trips.component';


// Components
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { UpcomingComponent } from './components/trip/upcoming/upcoming.component';
import { CreatedComponent } from './components/trip/created/created.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SessionService } from './services/session.service';


const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'auth/login', canActivate: [AnonGuard], component: LoginComponent },
  { path: 'auth/signup', canActivate: [AnonGuard], component: SignupComponent },
  { path: 'trips', canActivate: [AuthGuard], component: TripsComponent },
  { path: 'trips/:id', canActivate: [AuthGuard], component: DetailComponent },
  { path: 'create', canActivate: [AuthGuard], component: CreateComponent },
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
  { path: 'profile/:id', canActivate: [AuthGuard], component: ProfileComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UpcomingComponent,
    CreatedComponent,
    AuthComponent,
    CreateComponent,
    ProfileComponent,
    DetailComponent,
    TripsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [TripService, SessionService, AuthGuard, AnonGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
