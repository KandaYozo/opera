import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { mimeType } from './mime-type.validator';
import { MAT_DATE_LOCALE } from '@angular/material';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
})
export class SignupComponent implements OnInit, OnDestroy {

  hide = true;
  // Email server response
  emailErrorMessage = 'Please enter a valid Email';
  // Password server response
  passwordErrorMessage = 'Password minimum length is 8 characters';
  // Birth date picker server response
  date = new Date();
  minDate = new Date(1940, 0, 1);
  maxDate = new Date(this.date.getFullYear() - 18, this.date.getMonth(), this.date.getDate());
  // Gender
  gender = '';
  // Arrays for address
  countryArray = [];
  cityArray = [];
  stateArray = [];
  // Selected address
  selectedCountry = '';
  selectedState = '';
  selectedCity = '';
  //
  selectedCountryIndex = '';
  selectedStateIndex = '';
  selectedCityIndex = '';
  // Form
  form: FormGroup;
  constructor( private signup: SignupService, private router: Router) { }
  onChangeCountry(countryValue) {
    this.stateArray = this.countryArray[countryValue].States;
    this.cityArray = this.stateArray[0].Cities;
    this.selectedCountry = this.countryArray[countryValue].CountryName;
  }

  onChangeState(stateValue) {
    if (!stateValue) {
      return;
    }
    this.cityArray = this.stateArray[stateValue].Cities;
    this.selectedState = this.stateArray[stateValue].StateName;
    if (this.cityArray.length === 0) {
      this.cityArray.push(this.selectedState);
    }
  }

  onChangeCity(cityValue) {
    if (!cityValue) {
      return;
    }
    if (this.cityArray.length === 0) {
      this.cityArray.push(this.selectedState);
    }
    this.selectedCity = this.cityArray[cityValue];
  }

  onCalendarKeydown(event) {
    return !event;
  }

  ngOnInit() {
    this.form = new FormGroup({
      // tslint:disable-next-line: max-line-length
      firstName: new FormControl(null, { validators: [Validators.required, Validators.pattern('[^0-9\.\?\!\@\#\$\%\^\&\*\(\)\<\>\{\}]+')] }),
      // tslint:disable-next-line: max-line-length
      lastName: new FormControl(null, { validators: [Validators.required, Validators.pattern('[^0-9\.\?\!\@\#\$\%\^\&\*\(\)\<\>\{\}]+')] }),
      username: new FormControl(null, { validators: [Validators.required, Validators.pattern('[^0-9\.\?\!\@\#\$\%\^\&\*\(\)\<\>\{\}]+')] }),
      dateOfBirth: new FormControl(null, { validators: [Validators.required] }),
      email: new FormControl(null, { validators: [Validators.required, Validators.email] }),
      password: new FormControl(null, { validators: [Validators.required, Validators.minLength(8)] }),
      gender: new FormControl(null, { validators: [Validators.required] }),
      country: new FormControl(null),
      state: new FormControl(null),
      city: new FormControl(null),
      street: new FormControl(null),
      postalCode: new FormControl(null),
      // tslint:disable-next-line: max-line-length
      jobID: new FormControl(null, { validators: [Validators.required] }),
    });

    this.getCountries();
  }
  getCountries() {
    this.signup.allCountries()
      .subscribe((data: any) => {
        this.countryArray = data.Countries;
      }, error =>
          console.log(error)
      );
  }
  onKeydown(event) {
    if ((event.keyCode >= 8 && event.keyCode <= 46 && event.keyCode !== 32) || (event.keyCode >= 96 && event.keyCode <= 105)) {
      return;
    }

    if (event.keyCode > 31 && (event.keyCode < 48 || event.keyCode > 57)) {
        return;
      } else {
      return !event;
    }
  }
  signUp() {
    if (!this.form.invalid) {
      console.log('here');
      return false;
    } else {
      this.signup.sigUp(
        this.form.get('firstName').value,
        this.form.get('lastName').value,
        this.form.get('username').value,
        this.form.get('dateOfBirth').value,
        this.form.get('gender').value,
        this.form.get('city').value,
        null,
        this.form.get('password').value,
        this.form.get('email').value,
        this.form.get('jobID').value,
      ).then(
        (signUpRes: any) => {
          if (signUpRes[0].response === 0) {
            alert('user has been succefully created');
            this.router.navigate(['/login']);
          } else {
            alert('Failed To register, Try changing your user information');
          }
        },
        error => {
          console.log(error);
        }
      );
  }
}

  ngOnDestroy() {
  }

}
