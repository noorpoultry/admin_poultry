import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
//import { SharedService } from '../common/shared.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  errorMsg: any;
  isWaiting: any = true;

  constructor(private httpClient: HttpClient, private loginService: LoginService, private router: Router,) 
   {
    this.loginForm = new FormGroup({"email": new FormControl(null, [Validators.required]),
                                    "password": new FormControl(null, [Validators.required])});
  }

  ngOnInit(): void {
  }

  login()
  {

    this.isWaiting = false;

    this.loginService.login(this.loginForm.value).subscribe((response) => {

      console.log(response);
      this.isWaiting = true;

      if(response.acknowledged) {
        localStorage.setItem('email', this.loginForm.get('email').value);
        localStorage.setItem('token', response.token);
       // this.sharedService.setLocalStorageItem(JSON.stringify(response));
        this.router.navigate(['/dashboard']);
     
      }

    },
    (err) => {
      console.log(err.error);
      let error = err.error;
      this.isWaiting = true;
      if(!error.success) {
        this.errorMsg = error.message;
      }
    })
  }

}
