import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupService } from '../signup/signup.service';
import { ProfileService } from '../profile/profile.service';
import { UserServices } from '../login/login.service';
import { Login } from '../login/login.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  firstName = null;
  lastName = null;
  city = null;
  userName = null;
  email = null;
  dateOfBirth = null;
  form: FormGroup;
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
  constructor(private signup: SignupService, private profileservice: ProfileService, private userServices: UserServices) { }

  ngOnInit() {
    this.userServices.Login(localStorage.getItem('userName'), localStorage.getItem('userPassword')).then((loginResponse: Login) => {
      if (loginResponse.response === 0) {
        localStorage.setItem('id', loginResponse.userData.id.toString());
        localStorage.setItem('firstName', loginResponse.userData.firstName.toString());
        localStorage.setItem('lastName', loginResponse.userData.lastName.toString());
        localStorage.setItem('userName', loginResponse.userData.userName.toString());
        localStorage.setItem('userPassword', loginResponse.userData.userPassword.toString());
        if (loginResponse.userData.birthDate !== null) {
          localStorage.setItem('birthDate', loginResponse.userData.birthDate.toString());
        } else {
          localStorage.setItem('birthDate', null);
        }
        if (loginResponse.userData.gender !== null) {
          localStorage.setItem('gender', loginResponse.userData.gender.toString());
        } else {
          localStorage.setItem('gender', null);
        }
        if (loginResponse.userData.gender !== null) {
          localStorage.setItem('userAddress', loginResponse.userData.userAddress.toString());
        } else {
          localStorage.setItem('userAddress', null);
        }
        if (loginResponse.userData.gender !== null) {
          localStorage.setItem('city', loginResponse.userData.city.toString());
        } else {
          localStorage.setItem('city', null);
        }
        localStorage.setItem('userAddress', loginResponse.userData.userAddress.toString());
        localStorage.setItem('email', loginResponse.userData.email.toString());
        localStorage.setItem('position', loginResponse.userData.position.toString());
        localStorage.setItem('userStatus', loginResponse.userData.userStatus.toString());
        this.firstName = localStorage.getItem('firstName');
        this.lastName = localStorage.getItem('lastName');
        this.city = localStorage.getItem('city');
        this.userName = localStorage.getItem('userName');
        this.email = localStorage.getItem('email');
        if (localStorage.getItem('birthDate')) {
          this.dateOfBirth = localStorage.getItem('firstName');
        }
      }
    },
    error => {
      console.log(error);
    }
  );
    this.firstName = localStorage.getItem('firstName');
    this.lastName = localStorage.getItem('lastName');
    this.city = localStorage.getItem('city');
    this.userName = localStorage.getItem('userName');
    this.email = localStorage.getItem('email');
    if (localStorage.getItem('birthDate')) {
      this.dateOfBirth = localStorage.getItem('firstName');
    }
    this.form = new FormGroup({
      // tslint:disable-next-line: max-line-length
      firstName: new FormControl(null, { validators: [Validators.pattern('[^0-9\.\?\!\@\#\$\%\^\&\*\(\)\<\>\{\}]+')] }),
      // tslint:disable-next-line: max-line-length
      lastName: new FormControl(null, { validators: [Validators.pattern('[^0-9\.\?\!\@\#\$\%\^\&\*\(\)\<\>\{\}]+')] }),
      username: new FormControl(null, { validators: [Validators.pattern('[^0-9\.\?\!\@\#\$\%\^\&\*\(\)\<\>\{\}]+')] }),
      dateOfBirth: new FormControl(null, { validators: [Validators.required] }),
      email: new FormControl(null, { validators: [Validators.required, Validators.email] }),
      password: new FormControl(null, { validators: [Validators.minLength(8)] }),
      gender: new FormControl(null, { }),
      country: new FormControl(null),
      state: new FormControl(null),
      city: new FormControl(null),
      street: new FormControl(null),
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
  submit() {
    let fname = null;
    let lname = null;
    let pass = null;
    let gender = null;
    let city = null;
    if (this.form.get('firstName').value === null) {
      fname = this.firstName;
    } else {
      fname = this.form.get('firstName').value;
    }
    if (this.form.get('lastName').value === null) {
      lname = this.lastName;
    } else {
      lname = this.form.get('lastName').value;
    }
    if (this.form.get('userPassword') === null) {
      pass = localStorage.getItem('userPassword');
    } else {
      pass = this.form.get('userPassword').value;
    }
    if (this.form.get('gender').value === null) {
      gender = localStorage.getItem('gender');
    } else {
      gender = this.form.get('gender').value;
    }
    if (this.form.get('city').value === null) {
      city = this.city;
    } else {
      city = this.cityArray[this.form.get('city').value];
    }
    this.profileservice.uppDateUser(fname, lname, pass, gender, city).then((updateResponse: any) => {
      console.log(updateResponse[0].response);
      console.log(updateResponse[0]);
      if (updateResponse[0].response === 0) {
        location.reload();
      } else {
        alert('failed to update infromation, try again later');
      }
    },
    error => {
      console.log(error);
    }
  );
  }
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

}
