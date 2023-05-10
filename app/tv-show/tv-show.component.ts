import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {

  imgPrefix: any = "https://image.tmdb.org/t/p/w500/";
  channel: any;
  term: any = "";
  // movie:any;
  usersTv: any[] = [];
  trendingTvs: any[] = [];

  page: any;
  totalLength: any;



  constructor(private _MoviesService: MoviesService) {
    this.handlePageChanged(1);
  }

  callTvs(page: any) {
    this.channel = this._MoviesService.getTvs(page).subscribe(
      (data) => {
        this.trendingTvs = data.results;
        this.totalLength = data.length;
        console.log(this.trendingTvs);
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
    this.callTvs(this.page);

  }

  ngOnInit(): void {
  }

  

}
