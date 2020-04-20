import { Component, OnInit, NgModule, TemplateRef } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { User } from 'src/app/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from 'src/app/services/user-service/user.service';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Batch } from 'src/app/models/batch';
import { TextMaskModule } from 'angular2-text-mask';
import { AddressVerificationService } from '../../services/address-verification/address-verification.service';
import { CrossFieldErrorMatcher } from 'src/app/directives/fieldsMatch/cross-field-error-matcher';


@NgModule({
  declarations: [LoginreduxComponent],
  imports: [
    MaterialModule,
    TextMaskModule,
    ReactiveFormsModule
  ]
})

@Component({
  selector: 'app-loginredux',
  templateUrl: './loginredux.component.html',
  styleUrls: ['./loginredux.component.css']
})
export class LoginreduxComponent implements OnInit {

  myForm: FormGroup;
  confirmPWord: string = '';
  user: User;
  pwdError: string;
  usernameError: string;
  userNotFound: string;
  modalRef: BsModalRef;
  isLogin: boolean;
  isSignUp: boolean;
  errorMatcher = new CrossFieldErrorMatcher();
  addressValid: boolean;
  userAvailable: boolean;

  states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
            'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY',
            'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV',
            'WI', 'WY'];
  workCities = ['Reston', 'Morgantown', 'Dallas', 'Tampa', 'New York City', 'Orlando'];

  phonemask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  zipmask = [/\d/, /\d/, /\d/, /\d/, /\d/];
  citymask = (userInput => [...userInput].map(() => /^[a-zA-Z-'\s]+$/));


  constructor(private modalService: BsModalService,
              private userService: UserService,
              private http: HttpClient,
              private authService: AuthService,
              private addressVery: AddressVerificationService,
              public router: Router) {
    this.isLogin = true;
    this.isSignUp = true;
    this.user = new User();
  }

  ngOnInit(): void {
  }

  // toggles the login window on the home page.
  toggleLogin() {
    // this flips the isLogin boolean so the login window opens/closes.
    this.isLogin = !this.isLogin;
  }

  // toggles the signup/registration window on home page.
  toggleSignUp() {
    // this flips the isSignUP boolean so the registration window opens/closes.
    this.isSignUp = !this.isSignUp;
    // this clears the current user field.
    this.user = new User();
  }


  // this method is triggered when the login button on the login form is clicked.
  // it sends login info to the back end for verification and sends the user info to the front end.
  login() {
    this.pwdError = '';
    this.usernameError = '';

    this.http.get(`${environment.loginUri}?userName=${this.user.userName}&passWord=${this.user.password}`)
      .subscribe(
        (response) => {
          // console.log(response);
          if (response['userName'] != undefined) {
            this.usernameError = response['userName'][0];
          }
          if (response['passWord'] != undefined) {
            this.pwdError = response['pwdError'][0];
          }
          if ((response["name"] != undefined) && (response["userid"] != undefined)) {
            sessionStorage.setItem("name", response["name"]);
            sessionStorage.setItem("userid", response["userid"]);
            sessionStorage.setItem("batchLoc", response["batchLoc"]);

            //call landing page
            //this.router.navigate(['landingPage']);
            location.replace('drivers');
          }
          if (response['userNotFound'] != undefined) {
            this.userNotFound = response['userNotFound'][0];
          }
        }
      );

  }


  // this method is triggered when the registration button on the registration form is clicked
  // and sends the information on the form to the backend.
  signUp() {
    // console.log('before switch');
    // this switch case resolves the work location selected on the registration page.
    switch (this.user.wCity) {
      case 'Morgantown':
          this.user.wState = 'WV';
          this.user.wAddress = '496 High st.';
          this.user.wZip = 26505;
          this.user.batch = new Batch(1, 'Morgantown');
          break;
      case 'Reston':
          this.user.wState = 'VA';
          this.user.wAddress = '11730 Plaza America Dr 2nd Floor';
          this.user.wZip = 20190;
          this.user.batch = new Batch(2, 'Reston');
          break;
      case 'Dallas':
          this.user.wState = 'TX';
          this.user.wAddress = '701 S. Nedderman Drive';
          this.user.wCity = 'Arlington';
          this.user.wZip = 76019;
          this.user.batch = new Batch(3, 'Dallas');
          break;
      case 'Tampa':
          this.user.wState = 'FL';
          this.user.wAddress = '4202 E. Fowler Avenue';
          this.user.wZip = 33620;
          this.user.batch = new Batch(4, 'Tampa');
          break;
      case 'New York City':
          this.user.wState = 'NY';
          this.user.wAddress = '65-30 Kissena Blvd. | Queens';
          this.user.wZip = 11367;
          this.user.batch = new Batch(5, 'New York City');
          break;
      case 'Orlando':
          this.user.wState = 'FL';
          this.user.wAddress = '6200 Metrowest Blvd Suite 208';
          this.user.wZip = 32835;
          this.user.batch = new Batch(6, 'Orlando');
          break;
    }
    // these three fields cannot be null/undifined when being sent to the back end.
    // since these are not selected/changed on this page, all are defaulted to false.
    this.user.acceptingRides = false;
    this.user.active = false;
    this.user.driver = false;
    // console.log(this.user);
    this.userService.addUser(this.user).subscribe( res => {
      // console.log(res);
      this.login();
    });
   
  }

  // this method will check for filled out fields in the address form and if it is a valid address
  async checkAddressStatus() {
    // this check to see all the address fields are "dirty" or not
    // if they are all dirty it will use the address validation service to check if the address is valid or not
    if (this.user.hZip && this.user.hAddress && this.user.hCity && this.user.hState) {
      // all required fields are filled out and now the address chack can run
      //console.log('checking address!');
      await this.addressVery.isAddressValid(this.user.hAddress, this.user.hCity, this.user.hState, this.user.hZip.toString())
        .then(response => this.addressValid = response);
    } else {
      // all required fields are not yet filled out
      // console.log('need more info for address!');
    }
  }


  // this sends a request to the backend to see if the inputted username exists or not
  checkUserName() {
    // if userName field is empty exit function;
    if (!this.user.userName) {
      return;
    }
    // console.log('checking username');
    // check for username availability
    this.userService.checkUserNameAvailable(this.user.userName)
    .subscribe(response => {
        // this is that logic that assignes a boolean on whether the username is in use or not so it can
        // can the registration button can be blocked and stop user creation.
        // console.log(response);
        if (response.toString() === 'true') {
          // console.log('that username does not exist!');
          this.userAvailable = true;
        } else {
          // console.log('that username is currently in use');
          this.userAvailable = false;
        }
      }
    );
  }
}
