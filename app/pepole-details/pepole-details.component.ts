import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MoviesService } from '../movies.service';
import { PeopleComponent } from '../people/people.component';

@Component({
  selector: 'app-pepole-details',
  templateUrl: './pepole-details.component.html',
  styleUrls: ['./pepole-details.component.css']
})
export class PepoleDetailsComponent implements OnInit {

  personId: any;
  persondetails: any;
  trending: any;
  
  personDetails: any;
  savedData: any;
  alsoKnownFor: any[] = [];
  page: any;
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';

  constructor(private _ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService, private people: PeopleComponent) {

    //.............. pepole ...................
    this.knownfor(this.personId);
    this.people.savepage();
    
    // .........................................................
  }

  // save(page:any){
  //   this._MoviesService.getPersons(page).subscribe(response => {
  //     this.savedData = response.results;
  //     console.log("hello",this.savedData)
  //   })
  // }

  knownfor(personId:any) {
    personId = this._ActivatedRoute.snapshot.params.id;
    this._MoviesService.getPepoleDetails(personId).subscribe((data) => {

      this.persondetails = data;
      console.log("person Details", this.persondetails);
      this.trending = this.people.trendingPerson;
      this.personDetails = this.trending.filter((e: any) => {
        return personId == e.id;
      })
      console.log("trending Details:", this.trending);
      console.log(personId);
      console.log("person:", this.personDetails);
    });

  }

  ngOnInit(): void {

  }

}
