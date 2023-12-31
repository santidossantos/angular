import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  displayedColumns: string[] = ['username', 'name', 'surname', 'gender', 'actions'];
  tableContent: any[] = [''];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _userService: UserService, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.loadTableContent();
  }

  loadTableContent() {
    this._userService.getTableContent().subscribe((data) => {
      this.initializeDataSource(data);
    });
  }

  initializeDataSource(data: any[]) {
    this.tableContent = data;
    this.dataSource = new MatTableDataSource(this.tableContent);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteUser(id: number) {
    this.tableContent.splice(id, 1) // Simulacion de eliminar
    this.initializeDataSource(this.tableContent) // Recargamos la tabla
    this._snackBar.open('User succesfully deleted', '', {
      duration: 3000
    })
  }
}
