import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  firstName: string;
  lastName: string;
  userName: string;
  birthDate: string;
  email: string;
  userStatus: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {firstName: 'Hydrogen', lastName: 'Hydrogen', 		userName: 'Hydrogen', 	birthDate: 'Hydrogen', 	email: 'Hydrogen', 		userStatus: 1 	},
  {firstName: 'Helium', 	lastName: 'Helium', 		userName: 'Helium', 	birthDate: 'Helium', 	email: 'Helium', 		userStatus: 2 	},
  {firstName: 'Lithium', lastName: 'Lithium', 		userName: 'Lithium', 	birthDate: 'Lithium', 	email: 'Lithium', 		userStatus: 3 	},
  {firstName: 'Beryllium', lastName: 'Beryllium', 	userName: 'Beryllium', 	birthDate: 'Beryllium', email: 'Beryllium', 	userStatus: 1 	},
  {firstName: 'Boron', 	lastName: 'Boron', 			userName: 'Boron', 		birthDate: 'Boron', 	email: 'Boron', 		userStatus: 2 	},
  {firstName: 'Carbon', 	lastName: 'Carbon', 		userName: 'Carbon', 	birthDate: 'Carbon', 	email: 'Carbon', 		userStatus: 3 	},
  {firstName: 'Nitrogen', lastName: 'Nitrogen', 		userName: 'Nitrogen', 	birthDate: 'Nitrogen', 	email: 'Nitrogen', 		userStatus: 1   	},
  {firstName: 'Oxygen', 	lastName: 'Oxygen', 		userName: 'Oxygen', 	birthDate: 'Oxygen', 	email: 'Oxygen', 		userStatus: 2  	},
  {firstName: 'Fluorine', lastName: 'Fluorine', 		userName: 'Fluorine', 	birthDate: 'Fluorine', 	email: 'Fluorine', 		userStatus: 1  	},
  {firstName: 'Neon', 	lastName: 'Neon', 			userName: 'Neon', 		birthDate: 'Neon', 		email: 'Neon', 			userStatus: 3  	},
  {firstName: 'Sodium', 	lastName: 'Sodium', 		userName: 'Sodium', 	birthDate: 'Sodium', 	email: 'Sodium', 		userStatus: 2  	},
  {firstName: 'Magnesium', lastName: 'Magnesium', 	userName: 'Magnesium', 	birthDate: 'Magnesium', email: 'Magnesium', 	userStatus: 1 	},
  {firstName: 'Aluminum', lastName: 'Aluminum', 		userName: 'Aluminum', 	birthDate: 'Aluminum', 	email: 'Aluminum', 		userStatus: 2  	},
  {firstName: 'Silicon', lastName: 'Silicon', 		userName: 'Silicon', 	birthDate: 'Silicon', 	email: 'Silicon', 		userStatus: 1 	},
  {firstName: 'Phosphorus', lastName: 'Phosphorus',	userName: 'Phosphorus', birthDate: 'Phosphorus',email: 'Phosphorus', 	userStatus: 2  	},
  {firstName: 'Sulfur', 	lastName: 'Sulfur', 		userName: 'Sulfur', 	birthDate: 'Sulfur', 	email: 'Sulfur', 		userStatus: 3 	},
  {firstName: 'Chlorine', lastName: 'Chlorine', 		userName: 'Chlorine', 	birthDate: 'Chlorine', 	email: 'Chlorine', 		userStatus: 1 	},
  {firstName: 'Argon', 	lastName: 'Argon', 			userName: 'Argon', 		birthDate: 'Argon', 	email: 'Argon', 		userStatus: 2 	},
  {firstName: 'Potassium', lastName: 'Potassium', 	userName: 'Potassium', 	birthDate: 'Potassium', email: 'Potassium', 	userStatus: 3  	},
  {firstName: 'Calcium', lastName: 'Calcium', 		userName: 'Calcium', 	birthDate: 'Calcium', 	email: 'Calcium', 		userStatus: 2 	},
];
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
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor() { }
  labelPosition = '1';
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
