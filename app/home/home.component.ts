import { Component, OnDestroy } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {

  imgPrefix: any = "https://image.tmdb.org/t/p/w500/";
  channel: any;
  term:any="";
  // movie:any;

  usersTv: any[] = [];
  trendingMovies: any[] = [];
  trendingTvs: any[] = [];





  constructor(public _MoviesService: MoviesService) {

    this.channel = _MoviesService.getTrending("movie").subscribe(
      (data) => {
        this.trendingMovies = data.results.slice(0, 10);
      }
    )

    _MoviesService.getTrending("tv").subscribe(
      (data) => {
        this.trendingTvs = data.results.slice(10, 20);
      }
    )
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.channel.unsubscribe();
    console.log("tv component destroied");
  }

}
