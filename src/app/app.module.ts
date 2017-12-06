import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


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


const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/signup', component: SignupComponent }
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
    TripsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
