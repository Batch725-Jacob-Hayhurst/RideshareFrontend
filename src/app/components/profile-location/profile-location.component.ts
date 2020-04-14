import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from 'src/app/models/user';
import { AddressVerificationService } from '../../services/address-verification/address-verification.service';

@Component({
  selector: 'app-profile-location',
  templateUrl: './profile-location.component.html',
  styleUrls: ['./profile-location.component.css']
})
export class ProfileLocationComponent implements OnInit {

  zipcode: number;
  city:string;
  address:string;
  address2:string;
  hState: string;
  currentUser: User;
  success :string;
  showAddress2: boolean = false;

  constructor(private userService: UserService, private addressVery: AddressVerificationService) { }

  ngOnInit() {
   this.userService.getUserById2(sessionStorage.getItem("userid")).subscribe((response)=>{
      this.currentUser = response;
      this.zipcode = response.hZip;
      this.city = response.hCity;
      this.address = response.hAddress;
      // this.address2 = response.wAddress;
      this.address2 = response.hAddress2;
      this.hState = response.hState;

    });
  }

  async updatesContactInfo(){
    this.currentUser.hZip = this.zipcode;
    this.currentUser.hCity = this.city;
    this.currentUser.hAddress = this.address;
    // this.currentUser.wAddress = this.address2;
    this.currentUser.hAddress2 = this.address2;
    this.currentUser.hState = this.hState;
    // console.log(this.currentUser);

    let result: boolean;
    await this.addressVery.isAddressValid(this.address, this.city, this.hState, this.zipcode.toString()).then(result2 => result = result2);
    console.log(result);
    if (result) {
      this.userService.updateUserInfo(this.currentUser);
      this.success = 'Updated successfully!';
    } else {
      this.success = 'Incorrect address, try again!';
    }

    
  }

  hAddress2Exist() {
    if (this.address2 != null) {
        return true;
    } else if (this.address2 === '') {
      return false;
    } else {
      return false;
    }
  }
}
