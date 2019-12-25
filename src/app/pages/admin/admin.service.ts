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
    verifyUser(id: string) {
      const obj = {
        id
      };
      return this.http
          .post<any>('http://localhost:3000/user/verify', obj).toPromise();
    }
    changePosition(id: string, position: string) {
      const obj = {
        id,
        position
      };
      return this.http
          .post<any>('http://localhost:3000/user/changePosition', obj).toPromise();
    }
}
