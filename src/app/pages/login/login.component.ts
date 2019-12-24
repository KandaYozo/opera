import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(private snackBar: MatSnackBar) { }

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
    } else if (!this.validate(form.value.email)) {
      this.snackBar.open('invalid email', null , {
        duration: 2000,
      });
      return false;
    }
  }
  findInvalidControls(form: NgForm) {
    for (const name in form.controls) {
      if (form.controls[name].invalid) {
        return true;
      }
    }
    return false;
  }
  validate(email: string): boolean {
    if (/^.+[@].+[.].+$/.test(email)) {
      return true;
    }
    return false;
  }

}
