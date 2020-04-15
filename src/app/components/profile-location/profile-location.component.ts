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
  city: string;
  address: string;
  address2: string;
  hState: string;
  currentUser: User;
  success: string;
  showAddress2 = false;

  constructor(private userService: UserService, private addressVery: AddressVerificationService) { }

  ngOnInit() {
   this.userService.getUserById2(sessionStorage.getItem('userid')).subscribe((response) => {
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
    if (this.currentUser.hZip !== this.zipcode || this.currentUser.hCity !== this.city
      || this.currentUser.hAddress !== this.address || this.currentUser.hAddress2 !== this.address2
      || this.currentUser.hState !== this.hState) {
        this.currentUser.hZip = this.zipcode;
        this.currentUser.hCity = this.city;
        this.currentUser.hAddress = this.address;
        this.currentUser.hAddress2 = this.address2;
        this.currentUser.hState = this.hState;
        let result: boolean;
        await this.addressVery.isAddressValid(this.address, this.city, this.hState, this.zipcode.toString()).then(result2 => result = result2);
        console.log(result);
        if (result) {
          this.userService.updateUserInfo(this.currentUser);
          this.success = 'Updated successfully!';
        } else {
          this.success = 'Incorrect address, try again!';
        }
      } else {
        this.success = 'No Values Changed';
      }
    }

  hAddress2Exist() {
    if (this.address2 == null || this.address2 == undefined || this.address2 == '') {
      return false;
    } else {
      return true;
    }
  }
}
