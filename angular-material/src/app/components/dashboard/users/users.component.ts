import { Component } from '@angular/core';
import { user } from 'src/app/interfaces/user';


const ELEMENT_DATA: user[] = [
  { username: 'juanchito', name: 'Juan', surname: 'Perez', gender: 'M' },
 
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  displayedColumns: string[] = ['username', 'name', 'surname', 'gender', 'actions'];
  dataSource = ELEMENT_DATA;
}
