import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PopcomComponent } from './pages/popup/popcom/popcom.component';
import { NgImageSliderModule } from 'ng-image-slider';
import {SlideshowModule} from 'ng-simple-slideshow';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EventsComponent } from './pages/operaManagement/events/events/events.component';
import { CreatEventComponent } from './pages/operaManagement/events/events/creat-event/creat-event.component';
import { CancelEventComponent } from './pages/operaManagement/events/events/cancel-event/cancel-event.component';
import { CreatehallsComponent } from './pages/operaManagement/createhalls/createhalls.component';
import { ReservePlaceComponent } from './pages/reserve-place/reserve-place.component';
import { ViewSeatsComponent } from './pages/operaManagement/events/view-seats/view-seats.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    PopcomComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    ProfileComponent,
    EventsComponent,
    CreatEventComponent,
    CancelEventComponent,
    CreatehallsComponent,
    ReservePlaceComponent,
    ViewSeatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MaterialModule,
    NgImageSliderModule,
    SlideshowModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
