import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersData } from '../admin/admin.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

    constructor(private http: HttpClient) {}
    uppDateUser(firstName: string, lastName: string, userPassword: string, gender: string, city: string) {
        const objToSend = {
            userID: localStorage.getItem('id'),
            firstName,
            lastName,
            userName: localStorage.getItem('userName'),
            userPassword,
            birthDate: null,
            gender,
            city,
            userAddress: localStorage.getItem('userAddress'),
            email: localStorage.getItem('email'),
            position: localStorage.getItem('position'),
        };
        console.log(objToSend);
        return this.http
          .post<UsersData>('http://localhost:3000/user/editData', objToSend).toPromise();
      }
}
