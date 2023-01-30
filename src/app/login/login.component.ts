import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username=""
  password=""
  errorMessage=""

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {

  }

  goToSignUp(): void {
    this.router.navigate(["signup"])
  }

  login() {
    if(this.username.trim().length === 0) {
      this.errorMessage = "Please enter an username"
    } else if(this.password.trim().length === 0) {
      this.errorMessage = "Please enter an username"
    } else {
      this.errorMessage = ""
      let res = this.auth.login(this.username, this.password)
      if (res === 200) {
        this.router.navigate(["home"])
      } else {
        this.errorMessage = "Invalid user or password"
      }
    }
  }
}
