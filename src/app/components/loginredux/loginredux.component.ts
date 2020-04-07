import { Component, OnInit, NgModule, TemplateRef } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user-service/user.service';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [LoginreduxComponent],
  imports: [
    MaterialModule
  ]
})

@Component({
  selector: 'app-loginredux',
  templateUrl: './loginredux.component.html',
  styleUrls: ['./loginredux.component.css']
})
export class LoginreduxComponent implements OnInit {
  users: User[] = [];
  allUsers: User[] = [];

  chosenUser: User;
  chosenUserFullName: string = '';
  userName: string = '';
  passWord: string = '';
  totalPage: number = 1;
  curPage: number = 1;

  showDropDown: boolean = false;
  failed: boolean = false;
  banned: boolean = false;

  pwdError: string;
  usernameError: string;
  userNotFound: string;
  modalRef: BsModalRef;
  isLogin: boolean;
  isSignUp: boolean;


  constructor(private modalService: BsModalService, private userService: UserService, private http: HttpClient, private authService: AuthService, public router: Router) {
    this.isLogin = true;
    this.isSignUp = true;
  }

  ngOnInit(): void {
  }

  toggleLogin() {
    this.isLogin = !this.isLogin;
  }

  toggleSignUp() {
    this.isSignUp = !this.isSignUp;
  }

  //Login Functions

  login() {
    this.pwdError = '';
    this.usernameError = '';

    this.http.get(`${environment.loginUri}?userName=${this.userName}&passWord=${this.passWord}`)
      .subscribe(
        (response) => {
          //console.log(response);
          if (response["userName"] != undefined) {
            this.usernameError = response["userName"][0];
          }
          if (response["passWord"] != undefined) {
            this.pwdError = response["pwdError"][0];
          }
          if ((response["name"] != undefined) && (response["userid"] != undefined)) {
            sessionStorage.setItem("name", response["name"]);
            sessionStorage.setItem("userid", response["userid"]);

            //call landing page
            //this.router.navigate(['landingPage']);
            location.replace('drivers');
          }
          if (response["userNotFound"] != undefined) {
            this.userNotFound = response["userNotFound"][0];
          }
        }
      );
  }



}
