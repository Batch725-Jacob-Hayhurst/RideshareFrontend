import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from 'src/app/components/admin/admin.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';


describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AdminComponent, NavbarComponent, ProfileComponent],
    imports: [AppRoutingModule, FormsModule, HttpClientModule],
    providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
  }));
   let service: AuthService;
   
  beforeEach(() => {
    service = TestBed.get(AuthService);
    service.loggedIn = false;
  });

  it('should be created', () => {
    // const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('#isLoggedIn() should confirm if logged in', () => {
    // const isLoggedIn = false;
    service.loggedIn = false;
    expect(service.loggedIn).toBe(false);
  })
});
