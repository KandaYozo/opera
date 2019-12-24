import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from '../app/pages/contact/contact.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { LoginComponent } from '../app/pages/login/login.component';
import { SignupComponent } from '../app/pages/signup/signup.component';
import { AdminComponent } from '../app/pages/admin/admin.component';
import { ProfileComponent } from '../app/pages/profile/profile.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
