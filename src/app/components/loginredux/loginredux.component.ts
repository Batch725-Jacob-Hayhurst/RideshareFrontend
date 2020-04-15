import { Component, OnInit, NgModule, TemplateRef } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
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
          if (response['userName'] != undefined) {
            this.usernameError = response['userName'][0];
          }
          if (response['passWord'] != undefined) {
            this.pwdError = response['pwdError'][0];
          }
          if ((response['name'] != undefined) && (response['userid'] != undefined)) {
            sessionStorage.setItem('name', response['name']);
            sessionStorage.setItem('userid', response['userid']);

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

  signUp() {
    console.log('before switch');
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
    console.log(this.user);
  }

  // this function will check for filled out fields in the address form and if it is a valid address
  async checkAddressStatus() {
    // this check to see all the address fields are "dirty" or not
    // if they are all dirty it will use the address validation service to check if the address is valid or not
    if (this.user.hZip && this.user.hAddress && this.user.hCity && this.user.hState) {
      console.log('checking address!');
      await this.addressVery.isAddressValid(this.user.hAddress, this.user.hCity, this.user.hState, this.user.hZip.toString())
        .then(response => this.addressValid = response);
    } else {
      console.log('need more info for address!');
    }
  }

}
