import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent  implements OnInit  {
  userLogedIn = false;
  position = '';
  constructor(private router: Router) {}
  ngOnInit() {
    if (localStorage.getItem('id') !== null) {
        this.userLogedIn = true;
        this.position = localStorage.getItem('position');
        console.log(this.position);
    }
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
    location.reload();
  }

}
