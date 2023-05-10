import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  // term:any="";

  isLogin: boolean = false;

  constructor(private _AuthService: AuthService) {

    _AuthService.currentUserData.subscribe(() => {

      if (this._AuthService.currentUserData.getValue() == null) {
        this.isLogin = false;
      }
      else {
        this.isLogin = true;
      }

    })

  }


  logout(){
    this._AuthService.logout();
  }



  ngOnInit(): void {
  }

}
