import { ActivatedRoute } from '@angular/router';
import { MenuService } from './../../service/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
   
  menuItems!: any[]
  mid!:number

  constructor(private menuService: MenuService,
      private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params => {
      this.menuService.getMenuItems(+params['menuId']).subscribe({
        next: (mItems) => this.menuItems = mItems
      })
    }))
  }

  seleItem(event: any){
    let target: any = event.target || event.srcElement || event.currentTarget
    let idAttr = target.attributes.id
    this.mid = idAttr.value
    console.log(this.mid)
  }
}
