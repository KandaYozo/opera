import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { UserServices } from './login.service';
import { Login } from './login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(private snackBar: MatSnackBar, private userServices: UserServices, private router: Router) { }

  ngOnInit() {
  }
  signin(form: NgForm) {
    if (form.value.password.length < 8) {
      form.controls.password.setErrors({ incorrect: true });
      return false;
    }

    if (form.invalid) {
      this.snackBar.open('Data are not complete', null , {
          duration: 2000,
        });
      return false;
    }
    this.userServices.Login(form.value.UserName, form.value.password).then((loginResponse: Login) => {
        if (loginResponse.response === 0) {
          localStorage.setItem('id', loginResponse.userData.id.toString());
          localStorage.setItem('firstName', loginResponse.userData.firstName.toString());
          localStorage.setItem('lastName', loginResponse.userData.lastName.toString());
          localStorage.setItem('userName', loginResponse.userData.userName.toString());
          localStorage.setItem('userPassword', loginResponse.userData.userPassword.toString());
          if (loginResponse.userData.birthDate !== null) {
            localStorage.setItem('birthDate', loginResponse.userData.birthDate.toString());
          }
          localStorage.setItem('gender', loginResponse.userData.gender.toString());
          localStorage.setItem('city', loginResponse.userData.city.toString());
          localStorage.setItem('userAddress', loginResponse.userData.userAddress.toString());
          localStorage.setItem('email', loginResponse.userData.email.toString());
          localStorage.setItem('position', loginResponse.userData.position.toString());
          localStorage.setItem('userStatus', loginResponse.userData.userStatus.toString());
          this.router.navigate(['/']);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  findInvalidControls(form: NgForm) {
    for (const name in form.controls) {
      if (form.controls[name].invalid) {
        return true;
      }
    }
    return false;
  }

}
