import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TopdealproductdetailComponent } from './components/topdealproductdetail/topdealproductdetail.component';
import { ViewProductDetailsCategoryComponent } from './components/view-product-details-category/view-product-details-category.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'medicine-home',component:MedicineHomeComponent},
  {path:'topdealproductdetail/:drugCode',component:TopdealproductdetailComponent},
  {path:'view-product-details-by-category',component:ViewProductDetailsCategoryComponent},
  {path:'',redirectTo:'/home',pathMatch:'full' },
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
