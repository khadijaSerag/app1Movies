import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  imgPrefix: any = "https://image.tmdb.org/t/p/w500/";
  channel: any;
  term: any = "";
  // movie:any;
  page: any;
  totalLength: any;


  trendingMovies: any[] = [];

  constructor(private _MoviesService: MoviesService) {
    this.handlePageChanged(1);
  }

  // api
  callMovies(page: any) {
    this.channel = this._MoviesService.getMovies(page).subscribe(
      (data) => {
        this.trendingMovies = data.results;
        this.totalLength = data.length;
        console.log("data" + this.trendingMovies);
      },
      (error) => {
        console.log("connection error" + error);
      },
      () => {
        console.log("API finished");
      }
    )
  }

  // كل مااعمل نيكسن فى الباجنيشن بينادى الصفحة دى 
  handlePageChanged(event: any) {
    this.page = event;
    this.callMovies(this.page);
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.channel.unsubscribe();
    console.log("tv component destroied");
  }

}
