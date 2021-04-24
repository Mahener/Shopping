import { MainService } from './main.service';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { PagesComponent } from './pages/pages.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainAreaComponent,
    PagesComponent,
    ProductComponent,
    ProductDetailsComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
    
  ],
  providers: [
              MainService
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
