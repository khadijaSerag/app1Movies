import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MoviesService } from '../movies.service';
//  import { PepoleDetailsComponent } from '../pepole-details/pepole-details.component';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent implements OnInit {
  imgPrefix: any = "https://image.tmdb.org/t/p/w500/";
  channel: any;
  term: any = "";

  // persondetails: any;
  // personDetails: any;
  // personId: any;

  page: any;
  totalLength: any;

  trendingPerson:any = new BehaviorSubject(null);
 
  //trendingPeople: any;

  constructor(private _MoviesService: MoviesService) {
    this.handlePageChanged(this.page);
    
    
  }

  callPersons(page: any) {
    this.channel = this._MoviesService.getPersons(page).subscribe(
      (data) => {
        this.trendingPerson = data.results;
        
        //console.log(this.trendingPerson)
        
        
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
    this.callPersons(this.page);
    console.log("page: ",this.page)

  }

  savepage(){
    
    console.log("return",this.callPersons(this.page))
  }

 



  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.channel.unsubscribe();
    console.log("tv component destroied");
  }

}
