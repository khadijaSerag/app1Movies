import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode'; // install npm i jwt-decode from terminal
import { BehaviorSubject, Observable } from 'rxjs';


// BehaviorSubject لازمتها اى حاجة بغير فيها بتسمع ودى معمولة خصوصا للبروبيرتى

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient , private _Router:Router) {

    // الجزئية دى عشان كل مرة بعمل ريلود بيودينى للوجين ويخرجنى من الموقع فبعملها عشان  ميخرجنيش من الموقع ويخرجنى بس لما اعمل لوج اوت
    if (localStorage.getItem('currentUser')) {

      this.savecurrentUserData();

    }


  }

  currentUserData: any = new BehaviorSubject(null); // البروبيرتى دى طول ماهى فاضية يبقى  المستخدم مش عامل لوجين اول لما تتملى يبقى المسخدم عمل لوجين

  register(formData: object): Observable<any> {
    return this._HttpClient.post("https://route-movies-api.vercel.app/signup", formData);
  }

  login(formData: object): Observable<any> {
    return this._HttpClient.post("https://route-movies-api.vercel.app/signin", formData);
  }

  // هنا انا عاوزة لما يتك على اللوج اوت اللى فى النافجيشن بار يودينى للميثود دى
  logout() {
    this.currentUserData.next(null);
    localStorage.removeItem('currentUser');
    this._Router.navigate(['/login']); //بعمل امبورت للراوتر وبعمل  سطر النافجيت ده لما ابقى عاوزة لما اتك على لينك يودينى لصفحة تانية
  }

  savecurrentUserData() {
    let encodedToken: any = localStorage.getItem('currentUser');
    // console.log(encodedToken)
    let decodedToken = jwtDecode(encodedToken);
    this.currentUserData.next(decodedToken);

  }

}
