import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

    constructor(private http: HttpClient) {}
    allCountries() {
        return this.http.get('assets/countries.json');
      }

    sigUp(firstName: string, lastName: string, userName: string, birthDate: string,
                  gender: string, city: string, userAddress = null, userPassword: string, email: string, position: number) {
        console.log(userName, userPassword);
        const auth = {
            firstName,
            lastName,
            userName,
            userPassword,
            birthDate,
            gender,
            city,
            userAddress,
            email,
            position
        };
        return this.http
          .post<any>('http://localhost:3000/user/register', auth).toPromise();
      }
}
