import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

import { User } from '../models/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userlogin: string;
  public userpwd: string;
  public error: String;
  public title: String = 'Connexion';
  public user: User;

  constructor(
    private sharedService: SharedService,
    private router: Router,
    private loginService: LoginService
    ) { }

  ngOnInit() {
    this.sharedService.isConnected = false;
    this.user = new User();
  }

  public login(): void {
    this.loginService.getUser(this.userlogin).subscribe(
      (user) => {
        this.user = user;
        if (this.userpwd === this.user.userpwd) {
          this.sharedService.isConnected = true;
          this.router.navigate(['/home']);
        } else {
          this.error = 'Login ou mot de passe érroné';
        }
      },
      (error) => {
        this.error = error.message;
      });
  }

}
