import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = 'Something went wrong';
  successMessage = 'Registered successfully! Please login to continue';
  invalidSignup = false;
  signUpSuccess = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  handleSignup() {
    this.authService.handleSignup(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.invalidSignup = false;
        this.signUpSuccess = true;
      },
      error => {
        console.log(error);
        this.invalidSignup = true;
        this.signUpSuccess = false;
      }
    );
  }
}

