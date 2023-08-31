import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menuItems: Menu[] = []; // Trae los elementos del menu definido en assets, menu dinamico :)

  constructor(private _menuService: MenuService) {}

  ngOnInit(): void {
    this.loadMenu();
  }

  loadMenu() {
    this._menuService.getMenu().subscribe((data) => {
      this.menuItems = data;
    });
  }
}
