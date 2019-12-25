import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent  implements OnInit  {
  userLogedIn = false;
  constructor(private router: Router) {}
  ngOnInit() {
    if (localStorage.getItem('userStatus') !== null) {
        this.userLogedIn = true;
    }
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
    location.reload();
  }

}
