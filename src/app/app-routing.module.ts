import { MenuAllComponent } from './components/menu-all/menu-all.component';
import { ItemPurchaseComponent } from './components/item-purchase/item-purchase.component';
import { MenuItemsComponent } from './components/menu-items/menu-items.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/admin/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'menu', component: HomeComponent, 
    children: [
      {path: 'list', component: MenuAllComponent},
      {path: ':menuId', component: MenuItemsComponent},
      {path: ':mid', redirectTo: 'itempurchase', pathMatch:'full'},
    ]},
  {path: 'login', component: LoginComponent},
  {path: 'itempurchase', component: ItemPurchaseComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
