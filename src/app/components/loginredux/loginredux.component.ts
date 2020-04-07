import { Component, OnInit, NgModule, TemplateRef } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { BsModalService, BsModalRef} from 'ngx-bootstrap';


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

  modalRef: BsModalRef;
  isLogin: boolean;
  isSignUp: boolean;
  

  constructor(private modalService: BsModalService) {
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




}
