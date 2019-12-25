import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HallService {

    constructor(private http: HttpClient) {}
    getHallDetails(eventID: string) {
        const obj = {
            eventID
        };
        return this.http
          .post<any>('http://localhost:3000/events/getHallForEvent', obj).toPromise();
    }
    reserveSeat(eventID: number, userID: number, reservedRow: number, reservedColumn: number) {
      const obj = {
          eventID,
          userID,
          reservedRow,
          reservedColumn
      };
      console.log(obj);
      return this.http
        .post<any>('http://localhost:3000/user/reserveTicket', obj).toPromise();
    }
    getReservedSeats(eventID) {
      const obj = {
        eventID
      };
      return this.http
          .post<any>('http://localhost:3000/events/getReservedSeats', obj).toPromise();
    }


}
