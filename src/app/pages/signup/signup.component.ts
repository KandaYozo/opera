import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { mimeType } from './mime-type.validator';
import { MAT_DATE_LOCALE } from '@angular/material';
import { SignupService } from './signup.service';
import { Subscription } from 'rxjs';

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
  constructor( private signup: SignupService) { }
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
      contactNumber: new FormControl(null, { validators: [Validators.pattern('\\+?[0-9\-]+')] }),
      country: new FormControl(null),
      state: new FormControl(null),
      city: new FormControl(null),
      street: new FormControl(null),
      postalCode: new FormControl(null),
      pan: new FormControl(null, { validators: [Validators.pattern('[0-9]{16,20}')] }),
      // tslint:disable-next-line: max-line-length
      nationalID: new FormControl(null, { validators: [Validators.pattern('(2|3)([0-9])([0-9])((0)([1-9])|(1)([0-2]))((0)([1-9])|(1)([0-9])|(2)([0-9])|(3)(0|1))(01|02|03|04|11|12|13|14|15|16|17|18|19|21|22|23|24|25|26|27|28|29|31|32|33|34|35|88)([0-9]){4}([0-9])')] }),
      jobID: new FormControl(null, { validators: [Validators.required] }),
      photo: new FormControl(null, { asyncValidators: [mimeType] }),
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

  ngOnDestroy() {
  }

}
