import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/interfaces/user';
import { MatPaginator } from '@angular/material/paginator';

const ELEMENT_DATA: User[] = [
  {
    username: 'juanchito',
    name: 'Juan',
    surname: 'Perez',
    gender: 'Masculino',
  },
  {
    username: 'unix_cath',
    name: 'Catalina',
    surname: 'Gaitan',
    gender: 'Femenino',
  },
  {
    username: 'CR7',
    name: 'Cristiano',
    surname: 'Ronaldo',
    gender: 'Masculino',
  },
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  displayedColumns: string[] = [
    'username',
    'name',
    'surname',
    'gender',
    'actions',
  ];
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
