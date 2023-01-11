import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TopDealsComponent } from './top-deals/top-deals.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { TopdealproductdetailComponent } from './components/topdealproductdetail/topdealproductdetail.component';
import { ViewProductDetailsCategoryComponent } from './components/view-product-details-category/view-product-details-category.component';
import {  CartComponent} from './components/cart/cart.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PagenotfoundComponent,
    MedicineHomeComponent,
    TopDealsComponent,
    TopdealproductdetailComponent,
    ViewProductDetailsCategoryComponent,
    CartComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    HttpClientModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
