import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HallServices } from './halls.service';

@Component({
  selector: 'app-createhalls',
  templateUrl: './createhalls.component.html',
  styleUrls: ['./createhalls.component.css']
})
export class CreatehallsComponent implements OnInit {
  form: FormGroup;
  constructor(private hallService: HallServices) { }

  ngOnInit() {
    this.form = new FormGroup({
      // tslint:disable-next-line: max-line-length
      hallName: new FormControl(null, { validators: [Validators.required, Validators.pattern('[^0-9\.\?\!\@\#\$\%\^\&\*\(\)\<\>\{\}]+')] }),
      numberRows: new FormControl(null, { validators: [Validators.required, Validators.required]}),
      numberColumns: new FormControl(null, { validators: [Validators.required, Validators.required] }),
    });
  }
  Create() {
    if (!this.form.invalid) {
      this.hallService.createHall(
        this.form.get('hallName').value.toString(),
        this.form.get('numberRows').value.toString(),
        this.form.get('numberColumns').value.toString()).then(
        (hallResponse: any) => {
          if (hallResponse[0].response === 0) {
            alert('Added New Hall Successfully');
            location.reload();
          } else {
            alert('Failed To Add New Hall');
          }
        },
        error => {
          console.log(error);
        }
      );
    } else {
      alert('Data Entered Are Not Acceptable');
    }
  }

}
