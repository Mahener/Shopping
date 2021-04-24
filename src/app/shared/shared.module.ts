import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainAreaComponent } from './main-area/main-area.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MainAreaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
