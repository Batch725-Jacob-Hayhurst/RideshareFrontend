import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from 'src/app/models/user';

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

  constructor(private userService: UserService) { }

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

  updatesContactInfo() {
    if (this.currentUser.hZip !== this.zipcode || this.currentUser.hCity !== this.city
      || this.currentUser.hAddress !== this.address || this.currentUser.hAddress2 !== this.address2
      || this.currentUser.hState !== this.hState) {
        this.currentUser.hZip = this.zipcode;
        this.currentUser.hCity = this.city;
        this.currentUser.hAddress = this.address;
        this.currentUser.hAddress2 = this.address2;
        this.currentUser.hState = this.hState;
        this.userService.updateUserInfo(this.currentUser);
        this.success = 'Updated Successfully!';
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
