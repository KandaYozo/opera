import { Component, OnInit, ViewChild } from '@angular/core';
import { CancelReservation } from './cancelreservation.service';
import { Event } from './cancel.model';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-cancelreservation',
  templateUrl: './cancelreservation.component.html',
  styleUrls: ['./cancelreservation.component.css']
})
export class CancelreservationComponent implements OnInit {

  displayedColumns: string[] = [
    'eventName',
    'eventTiming',
    'eventStatus',
    'action'
  ];
  dataSource: MatTableDataSource<Event>;
  public event: Event[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private cancel: CancelReservation) { }

  ngOnInit() {
    const userID = localStorage.getItem('id');
    this.cancel.getAllEvents(userID).then(
      (usersInformation: Event[]) => {
        console.log(usersInformation);
        this.event = usersInformation;
        for (const user of this.event) {
          if (user.eventTiming != null) {
            const time = user.eventTiming.split('T');
            user.eventTiming = time[0];
          }
        }
        this.dataSource = new MatTableDataSource(this.event);
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.log(error);
      }
    );
  }
  cancelEvent(row) {
    const userID = Number(localStorage.getItem('id'));
    const eventID = Number(row.id);
    this.cancel.CancelEvents(eventID, userID).then(
      (usersInformation: any) => {
        console.log(usersInformation);
        if (usersInformation[0].response) {
          alert('SuccessFully Canceled');
          location.reload();
        } else {
          alert('Failed To Cancel Event');
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
