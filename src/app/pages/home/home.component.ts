import { Component, OnInit } from '@angular/core';
import { Events } from './home.model';
import { HomeServices } from './home.service';
import { Router } from '@angular/router';

export interface IImage {
  url: string | null;
  href?: string;
  // tslint:disable-next-line: ban-types
  clickAction?: Function;
  caption?: string;
  title?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public events: Events[] = [];
  imageUrls: (string | IImage)[] = [
    {  url: 'assets/images/1.jpg', caption: 'Opera Cairo House'},
    {  url: 'assets/images/2.jpg', caption: 'Opera Cairo House'},
    {  url: 'assets/images/3.jpg', caption: 'Opera Cairo House'},
    {  url: 'assets/images/4.jpg', caption: 'Opera Cairo House'},
    {  url: 'assets/images/5.jpg', caption: 'Opera Cairo House'},
    {  url: 'assets/images/6.jpg', caption: 'Opera Cairo House'},
    {  url: 'assets/images/7.jpg', caption: 'Opera Cairo House'},
    {  url: 'assets/images/8.jpg', caption: 'Opera Cairo House'},
  ];
  constructor(private homeService: HomeServices, private router: Router) { }

  ngOnInit() {
    this.homeService.getAllEvents().then(
      (eventInformation: Events[]) => {
        this.events = eventInformation;
      },
      error => {
        console.log(error);
      }
    );
  }
  goToEvent(event) {
    this.router.navigate(['/reserveseat/' + event.id, event.hallNumber]);
  }

}
