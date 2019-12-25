import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reserve-place',
  templateUrl: './reserve-place.component.html',
  styleUrls: ['./reserve-place.component.css']
})
export class ReservePlaceComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const urlparameter = this.route.snapshot.paramMap.get('id');
    const urlparameter2 = this.route.snapshot.paramMap.get('hallid');
    
  }

}
