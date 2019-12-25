import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../login/login.model';

@Injectable({
  providedIn: 'root'
})
export class UserServices {

    constructor(private http: HttpClient) {}
    Login(userName: string, userPassword: string) {
        console.log(userName, userPassword);
        const auth = {
            userName,
            userPassword
        };
        return this.http
          .post<Login>('http://localhost:3000/user/login', auth).toPromise();
      }
}
