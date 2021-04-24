import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CounterComponent } from './counter/counter.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    CartComponent,
    CounterComponent,
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
