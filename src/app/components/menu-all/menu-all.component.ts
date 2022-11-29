import { ActivatedRoute } from '@angular/router';
import { MenuService } from './../../service/menu.service';
import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-all',
  templateUrl: './menu-all.component.html',
  styleUrls: ['./menu-all.component.css']
})
export class MenuAllComponent implements OnInit {
  amenus!: any

  constructor(private menuService: MenuService, 
    private activatedRoute: ActivatedRoute
    ){}   

  ngOnInit(): void {
    this.menuService.getMenus().subscribe(data => this.amenus = data)
    console.log(this.amenus)

  }
  seleItem(event: any){}
  
}
