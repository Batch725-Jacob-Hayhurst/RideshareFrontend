import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { DriverListComponent } from './components/driver-list/driver-list.component';
import { LoginreduxComponent } from './components/loginredux/loginredux.component';


const routes: Routes = [
  {path: 'login/admin', component: AdminLoginComponent},
  {path: 'login/adminhome', component: AdminComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'drivers', component: DriverListComponent},
  {path: '', component: LoginreduxComponent },
  {path: '**', pathMatch: 'full', redirectTo: ''}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
