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
}
