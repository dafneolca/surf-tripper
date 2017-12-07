import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

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


const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'trips', component: TripsComponent },
  // { path: 'trips/:id', component: TripsComponent },
  { path: 'create', component: CreateComponent },
  { path: 'profile', component: ProfileComponent }
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
    HttpClientModule
  ],
  providers: [TripService],
  bootstrap: [AppComponent]
})
export class AppModule { }
