import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { InitalComponent } from './inital/inital.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleComponent } from './people/people.component';
import { PepoleDetailsComponent } from './pepole-details/pepole-details.component';
import { RegisterComponent } from './register/register.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { TvShowComponent } from './tv-show/tv-show.component';


// canActivate:[AuthGuard] معناه متاكتيفتش الباس ده الا لما يعدى على الجارد ده يعنى لو الجارد ده رجع ترو افتحلى الباس ده لو مرجعش ترو متفتحهوش 

const routes: Routes = [
  // {path:'', redirectTo:'home',pathMatch:'full'},
  { path: '', canActivate: [AuthGuard], component: HomeComponent },

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'movies', canActivate: [AuthGuard], component: MoviesComponent },
  { path: 'tv-show', canActivate: [AuthGuard], component: TvShowComponent },
  { path: 'people', canActivate: [AuthGuard], component: PeopleComponent },
  { path: 'about', canActivate: [AuthGuard], component: AboutComponent },

  { path: 'moviedetails/:id', canActivate: [AuthGuard], component: MovieDetailsComponent },
  { path: 'tvdetails/:id', canActivate: [AuthGuard], component: TvDetailsComponent },
  { path: 'persondetails/:id', canActivate: [AuthGuard], component: PepoleDetailsComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
