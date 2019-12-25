import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent  implements OnInit  {
  userLogedIn = false;
  constructor() {}
  ngOnInit() {
    if (localStorage.getItem('userStatus') !== null) {
        this.userLogedIn = true;
    }
  }
  logout() {
    localStorage.clear();
    location.reload();
  }

}
