import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from '../app/pages/contact/contact.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { LoginComponent } from '../app/pages/login/login.component';
import { SignupComponent } from '../app/pages/signup/signup.component';
import { AdminComponent } from '../app/pages/admin/admin.component';
import { ProfileComponent } from '../app/pages/profile/profile.component';
import { EventsComponent } from '../app/pages/operaManagement/events/events/events.component';
import { CreatEventComponent } from '../app/pages/operaManagement/events/events/creat-event/creat-event.component';
import { CancelEventComponent } from '../app/pages/operaManagement/events/events/cancel-event/cancel-event.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'events', component: EventsComponent },
  { path: 'events/createevent', component: CreatEventComponent },
  { path: 'events/cancelevent', component: CancelEventComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
