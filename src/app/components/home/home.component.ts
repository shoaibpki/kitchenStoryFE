import { MenuService } from './../../service/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menus!: any

  constructor(private menuService: MenuService){}

  ngOnInit(): void {
    this.menuService.getMenus().subscribe(data => this.menus = data)
  }


}
