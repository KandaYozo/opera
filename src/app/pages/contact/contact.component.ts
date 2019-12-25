import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
  });
  onSubmit() {
  }
  constructor() { }

  ngOnInit() {
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
  }

}
