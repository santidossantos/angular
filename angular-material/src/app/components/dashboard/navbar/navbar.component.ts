import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private _menuService: MenuService) {}

  ngOnInit() {
    this.loadMenu();
  }

  loadMenu() {
    this._menuService.getMenu().subscribe((data) => {
      console.log(data);
    });
  }
}
