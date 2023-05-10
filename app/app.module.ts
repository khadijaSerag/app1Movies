import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { PeopleComponent } from './people/people.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';



import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchPipe } from './search.pipe';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { InitalComponent } from './inital/inital.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PepoleDetailsComponent } from './pepole-details/pepole-details.component'; 



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MoviesComponent,
    TvShowComponent,
    PeopleComponent,
    AboutComponent,
    NotFoundComponent,
    SearchPipe,
    RegisterComponent,
    LoginComponent,
    MovieDetailsComponent,
    TvDetailsComponent,
    InitalComponent,
    PepoleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule ,HttpClientModule , ReactiveFormsModule,NgxPaginationModule
  ],
  providers: [PeopleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
