import { Component, OnInit, NgModule, TemplateRef } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
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

  signUpForm: FormGroup;

  user: User;
  pwdError: string;
  usernameError: string;
  userNotFound: string;
  modalRef: BsModalRef;
  isLogin: boolean;
  isSignUp: boolean;

  states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS',
            'KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY',
            'NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV',
            'WI','WY'];
  
  workCities = ['Reston', 'Morgantown', 'Dallas', 'Tampa', 'New York City'];

  constructor(private modalService: BsModalService, private userService: UserService, private http: HttpClient, private authService: AuthService, public router: Router) {
    this.isLogin = true;
    this.isSignUp = true;
    this.user = new User();
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

    this.http.get(`${environment.loginUri}?userName=${this.user.userName}&passWord=${this.user.password}`)
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

  signUp() {
    
  }

}
