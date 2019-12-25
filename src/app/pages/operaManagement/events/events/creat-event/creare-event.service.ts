import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Halls } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class CreateEventService {

    constructor(private http: HttpClient) {}
    getAlllAvHalls() {
        return this.http
          .post<Halls[]>('http://localhost:3000/halls/getAvailable', null).toPromise();
    }
    createNewEvent(eventName: string, eventDescription: string, eventPoster: string, eventTiming: string, hallNumber: string) {
        console.log(eventTiming);
        const obj = {
            eventName,
            eventDescription,
            eventPoster,
            eventTiming,
            hallNumber,
        };
        return this.http
          .post<Halls[]>('http://localhost:3000/events/create', obj).toPromise();
    }
}
