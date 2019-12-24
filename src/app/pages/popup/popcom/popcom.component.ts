import { Component, OnInit, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-popcom',
  templateUrl: './popcom.component.html',
  styleUrls: ['./popcom.component.css']
})
export class PopcomComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopcomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
