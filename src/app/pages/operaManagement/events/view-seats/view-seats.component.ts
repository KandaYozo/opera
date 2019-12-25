import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-seats',
  templateUrl: './view-seats.component.html',
  styleUrls: ['./view-seats.component.css']
})
export class ViewSeatsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const urlparameter = this.route.snapshot.paramMap.get('id');
  }

}
