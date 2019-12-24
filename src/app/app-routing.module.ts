import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from '../app/pages/contact/contact.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { LoginComponent } from '../app/pages/login/login.component';


const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
