import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HallServices {

    constructor(private http: HttpClient) {}
    createHall(hallName: string, numberRows: string, numberColumns: string) {
        const obj = {
            hallName,
            numberRows,
            numberColumns
        };
        return this.http
          .post<any>('http://localhost:3000/halls/addNew', obj).toPromise();
    }
}
