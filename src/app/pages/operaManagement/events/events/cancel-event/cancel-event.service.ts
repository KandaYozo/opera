import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CancelServices {

    constructor(private http: HttpClient) {}
    CancelEvent(eventID: string) {
        const obj = {
            eventID
        };
        return this.http
          .post<any>('http://localhost:3000/events/cancel', obj).toPromise();
    }
}
