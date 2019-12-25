import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HallService } from './reserve-place.service';

@Component({
  selector: 'app-reserve-place',
  templateUrl: './reserve-place.component.html',
  styleUrls: ['./reserve-place.component.css']
})
export class ReservePlaceComponent implements OnInit {

  hallName: string;
  rows: number;
  col: number;
  cols = {
    colarray: [],
    check: [],
  };
  rowss = {
    rowarray: [],
    check: [],
  };
  urlparameter;
  hallStatus: string;
  constructor(private route: ActivatedRoute, private hallservice: HallService) { }

  ngOnInit() {
    this.urlparameter = this.route.snapshot.paramMap.get('id');
    console.log(this.urlparameter);
    const urlparameter2 = this.route.snapshot.paramMap.get('hallid');
    this.hallservice.getHallDetails(this.urlparameter).then(
      (hallInformation: any) => {
        console.log(hallInformation);
        if (hallInformation[0][0].response === 0) {
          this.hallName = hallInformation[1][0].hallName;
          this.rows = hallInformation[1][0].numberRows;
          this.rowss.rowarray = Array(this.rows).fill(0).map((x, i) => i);
          this.rowss.check = Array(this.rows).fill(0).map((x, i) => i);
          this.col = hallInformation[1][0].numberColumns;
          this.cols.colarray = Array(this.col).fill(0).map((x, i) => i);
          this.cols.check = Array(this.col).fill(0).map((x, i) => i);
          this.hallStatus = hallInformation[1][0].hallStatus;
        }
      },
      error => {
        console.log(error);
      }
    );
    this.hallservice.getReservedSeats(this.urlparameter).then(
      (seatsInformation: any) => {
        console.log(seatsInformation);
        for (const seat of seatsInformation) {
          this.rowss.check[Number(seat.reservedRow)] = 100;
          this.cols.check[Number(seat.reservedColumn)] = 100;
        }
      },
      error => {
        console.log(error);
      }
    );

  }
  reserve(i: number , j: number) {
    const userID = Number(localStorage.getItem('id'));
    const eventID = Number(this.urlparameter);
    this.hallservice.reserveSeat(eventID, userID, i, j).then(
      (reserveInfo: any) => {
        if (reserveInfo[0].response === 0) {
          alert('Successfully Reserved');
          location.reload();
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
