import { CartComponent } from './product/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [ 
  { path: '', component: HomeComponent},      
  { path: 'cart', component: CartComponent},
  { path: 'products', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
