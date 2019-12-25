import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CancelReservation {

    constructor(private http: HttpClient) {}
    getAllEvents(userID: string) {
        const obj = {
            userID
        };
        return this.http
          .post<any>('http://localhost:3000/user/myEvents', obj).toPromise();
    }
    CancelEvents(eventID: number, userID: number) {
      const obj = {
          eventID,
          userID
      };
      return this.http
        .post<any>('http://localhost:3000/user/cancelTicket', obj).toPromise();
  }
}
