import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminServices } from '../admin/admin.service';
import { UsersData } from '../admin/admin.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'userName',
    'birthDate',
    'email',
    'userStatus',
    'position',
    'choice'
  ];
  dataSource: MatTableDataSource<UsersData>;
  public users: UsersData[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private adminServices: AdminServices) {}
  selected  = '0';
  selectFormControl = null;

  ngOnInit() {
    this.adminServices.getAllUsers().then(
      (usersInformation: UsersData[]) => {
        this.users = usersInformation;
        for (const user of this.users) {
          this.selected  =  user.position.toString();
        }
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.log(error);
      }
    );
    this.selectFormControl = new FormControl('');
  }
  Verify(row) {
    this.adminServices.verifyUser(row.id.toString()).then(
      (verifyResponse: any) => {
        if (verifyResponse[0].response === 1) {
          alert('Verified Successfully');
          location.reload();
        } else {
          alert('Failed To Verify User');
        }
      },
      error => {
        console.log(error);
      }
    );
  }
  upDatePosiion(row) {
    this.adminServices.changePosition(row.id.toString(), this.selectFormControl.value.toString()).then(
      (positionResponse: any) => {
        alert('Verified Successfully');
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }
  removeUser(row) {
    this.adminServices.removeUser(row.id.toString()).then(
      (removeResponse: any) => {
        if (removeResponse[0].response === 0) {
          alert('Removed Successfully');
          location.reload();
        } else {
          alert('Failed To Remove User');
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
