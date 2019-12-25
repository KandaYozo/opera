import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Events } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeServices {

    constructor(private http: HttpClient) {}
    getAllEvents() {
        return this.http
          .post<Events[]>('http://localhost:3000/events/getAll', null).toPromise();
    }
}
