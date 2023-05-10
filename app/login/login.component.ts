import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  error: string = "";


  loginForm: FormGroup = new FormGroup({

    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9]{3,10}$')]),

  })

  submitForm(loginForm: FormGroup) {

    console.log(loginForm);

    if (loginForm.valid) {

      this._AuthService.login(loginForm.value).subscribe((Response) => {
        if (Response.message === "success") {
         
          localStorage.setItem("currentUser",Response.token); // لازمت اللوكل استوريدج ان كل مرة بعمل ريفريش ميطلعوش برة لو هو عامل لوجن فانا بتشيك لو الراجل ده عنده توكين يبقى هو عامل لوجن ومطلعهوش برة
        
          this._AuthService.savecurrentUserData();
          this._Router.navigate(['/home']);
        
        }
        else {
          this.error = Response.message;
        }
      })
      
    }

  }

  ngOnInit(): void {
  }

}
