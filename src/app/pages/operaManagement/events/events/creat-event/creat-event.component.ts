import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CreateEventService } from './creare-event.service';
import { Halls } from './event.model';

@Component({
  selector: 'app-creat-event',
  templateUrl: './creat-event.component.html',
  styleUrls: ['./creat-event.component.css']
})
export class CreatEventComponent implements OnInit {

  form: FormGroup;
  halls: Halls[] = [];
  constructor(private cevent: CreateEventService) { }

  ngOnInit() {
    this.cevent.getAlllAvHalls().then(
      (hallsInformation: Halls[]) => {
        this.halls = hallsInformation;
      },
      error => {
        console.log(error);
      }
    );
    this.form = new FormGroup({
      // tslint:disable-next-line: max-line-length
      eventName: new FormControl(null, { validators: [Validators.required]}),
      // tslint:disable-next-line: max-line-length
      eventDescription: new FormControl(null, { validators: [Validators.required] }),
      eventPoster: new FormControl(null, { validators: [Validators.required]}),
      eventTiming: new FormControl(null, { validators: [Validators.required] }),
      hallNumber: new FormControl(null, { validators: [Validators.required] }),
    });
  }
  Create() {
    if (!this.form.invalid) {
      this.cevent.createNewEvent(
        this.form.get('eventName').value.toString(),
        this.form.get('eventDescription').value.toString(),
        this.form.get('eventPoster').value.toString(),
        null,
        this.form.get('hallNumber').value.toString()
      ).then((eventResponse: any) => {
          if (eventResponse[0].response === 0) {
            alert('Event Added  Successfully');
            location.reload();
          } else {
            alert('Failed To Add Event');
          }
        },
        error => {
          console.log(error);
        }
      );
    }
  }

}
