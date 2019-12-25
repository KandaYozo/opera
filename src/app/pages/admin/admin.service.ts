import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersData } from '../admin/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminServices {

    constructor(private http: HttpClient) {}
    getAllUsers() {
        return this.http
          .post<UsersData[]>('http://localhost:3000/user/getAll', null).toPromise();
      }
}
