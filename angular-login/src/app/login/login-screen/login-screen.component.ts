import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {


  loginForm: FormGroup;

  constructor( private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {

    this.loginForm = this.formBuilder.group(
      {
        userName:['', [Validators.required, Validators.email]],
        password:['', [Validators.required, Validators.minLength(6)]]
      }

    )
   }

  ngOnInit(): void {
  }

  loginSubmit() {
    // prints form value
    console.log(this.loginForm.getRawValue());

    if(this.loginForm.valid) {
      console.log('Good to submit!');
      this.loginService.loginUser().subscribe( response => {
        //console.log(response);
        this.router.navigate(['/loggedin']);
      })
    } else {
      console.log('something is missing!');

    }
  }

  get userName () {
    return this.loginForm.get('userName');
  }

}
