import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Events } from '../../../../home/home.model';
import { HomeServices } from '../../../../home/home.service';
import { CancelServices } from '../cancel-event/cancel-event.service';

@Component({
  selector: 'app-cancel-event',
  templateUrl: './cancel-event.component.html',
  styleUrls: ['./cancel-event.component.css']
})
export class CancelEventComponent implements OnInit {
  displayedColumns: string[] = ['eventName', 'eventTiming', 'hallNumber', 'eventStatus', 'action'];
  dataSource: MatTableDataSource<Events>;
  events: Events[] = [];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private eventService: HomeServices, private cancelServices: CancelServices) { }

  ngOnInit() {
    this.eventService.getAllEvents().then(
      (eventInformation: Events[]) => {
        this.events = eventInformation;
        for (const ev of this.events) {
          if (ev.eventTiming != null) {
            const splitted = ev.eventTiming.split('T');
            ev.eventTiming  = splitted[0];
          }
        }
        this.dataSource = new MatTableDataSource(this.events);
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.log(error);
      }
    );
  }
  CancelEvent(row) {
    this.cancelServices.CancelEvent(row.id.toString()).then(
      (cancelInformation: any) => {
        if (cancelInformation[0].response === 0) {
          alert('SuccessFully Canceled The Event');
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
