import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminServices } from '../admin/admin.service';
import { UsersData } from '../admin/admin.model';

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
    'choice'
  ];
  dataSource: MatTableDataSource<UsersData>;
  public users: UsersData[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private adminServices: AdminServices) {}
  labelPosition = '1';

  ngOnInit() {
    this.adminServices.getAllUsers().then(
      (usersInformation: UsersData[]) => {
        this.users = usersInformation;
        for (const user of this.users) {
          this.labelPosition =  user.userStatus.toString();
        }
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.log(error);
      }
    );
  }
}
