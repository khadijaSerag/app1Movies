import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService { 

  constructor(public _HttpClient:HttpClient) { }
  

  getTrending(media:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${media}/week?api_key=0138fc685877277eb0da116e4c6430aa`);
  }



  getMovies(page:number):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=0138fc685877277eb0da116e4c6430aa&page=${page}`);
  }
  getTvs(page:number):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/popular?api_key=0138fc685877277eb0da116e4c6430aa&page=${page}`);
  }
  getPersons(page:number):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=0138fc685877277eb0da116e4c6430aa&page=${page}`);
  }
  // getNetworks(page:number):Observable<any>{
  //   return this._HttpClient.get(`https://api.themoviedb.org/3/network/popular?api_key=0138fc685877277eb0da116e4c6430aa&page=${page}`);
  // }
 


  getMovieDetails(id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0138fc685877277eb0da116e4c6430aa&language=en-US`);
  }

  getTvDetails(id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=0138fc685877277eb0da116e4c6430aa&language=en-US`);
  }
  getPepoleDetails(id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=0138fc685877277eb0da116e4c6430aa&language=en-US`);
  }
  getNetworks(id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/network/${id}?api_key=0138fc685877277eb0da116e4c6430aa`);
  }



}
