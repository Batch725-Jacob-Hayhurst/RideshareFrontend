import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-profile-membership',
  templateUrl: './profile-membership.component.html',
  styleUrls: ['./profile-membership.component.css']
})
export class ProfileMembershipComponent implements OnInit {
  profileObject: User = new User();
  currentUser: any = '';
  isDriver: boolean;
  active: boolean;
  success: string;
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.userService.getUserById2(sessionStorage.getItem('userid')).subscribe((response) => {
      // console.log(response);
      this.profileObject = response;
      // console.log(this.profileObject);
      this.isDriver = response.driver;
      // console.log(this.isDriver);
      this.active = response.active;
      // console.log(this.active);
    });
  }
  updatesMembershipInfo() {
    if (this.profileObject.driver !== this.isDriver || this.profileObject.active !== this.active) {
      this.profileObject.driver = this.isDriver;
      this.profileObject.active = this.active;
      this.userService.updateUserInfo(this.profileObject);
      this.success = 'Updated Successfully!';
    } else {
      this.success = 'No Values Changed';
    }
  }
}
