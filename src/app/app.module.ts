import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'node_modules/ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserService } from './services/user-service/user.service';
import { CarService } from './services/car-service/car.service';
import { BatchService } from './services/batch-service/batch.service';
import { AuthService } from './services/auth-service/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ValidationService } from './services/validation-service/validation.service';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { MapComponent } from './components/map/map.component';
import { ProfileContactComponent } from './components/profile-contact/profile-contact.component';
import { ProfileCarComponent } from './components/profile-car/profile-car.component';
import { ProfileLocationComponent } from './components/profile-location/profile-location.component';
import { ProfileMembershipComponent } from './components/profile-membership/profile-membership.component';
import { DriverListComponent } from './components/driver-list/driver-list.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { LoginreduxComponent } from './components/loginredux/loginredux.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';
import { TextMaskModule } from 'angular2-text-mask';
import { DistanceConversion } from 'src/app/pipes/distance-conversion';
import { FieldsMatchDirective } from './directives/fieldsMatch/fields-match.directive';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavbarComponent,
    ProfileComponent,
    AdminLoginComponent,
    MapComponent,
    ProfileContactComponent,
    ProfileCarComponent,
    ProfileLocationComponent,
    ProfileMembershipComponent,
    DriverListComponent,
    LoginreduxComponent,
    DistanceConversion,
    FieldsMatchDirective,

    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    TextMaskModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    CarService,
    BatchService,
    AuthService,
    ValidationService,
    BsModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

